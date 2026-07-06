import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, appSettingsTable } from "@workspace/db";
import {
  AdminLoginBody,
  AdminLoginResponse,
  GetAdminSettingsResponse,
  UpdateAdminSettingsBody,
  UpdateAdminSettingsResponse,
  DetectTelegramChatResponse,
} from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

interface TelegramChat {
  id: number;
  type: string;
  title?: string;
  first_name?: string;
  last_name?: string;
}

interface TelegramUpdate {
  update_id: number;
  message?: { chat: TelegramChat };
  my_chat_member?: { chat: TelegramChat };
  channel_post?: { chat: TelegramChat };
}

function chatDisplayName(chat: TelegramChat): string {
  if (chat.title) return chat.title;
  return [chat.first_name, chat.last_name].filter(Boolean).join(" ") || String(chat.id);
}

function isAuthorized(req: { header(name: string): string | undefined }): boolean {
  const adminKey = req.header("x-admin-key");
  const expectedKey = process.env.ADMIN_PASSWORD;
  return Boolean(expectedKey) && Boolean(adminKey) && adminKey === expectedKey;
}

async function getOrCreateSettings() {
  const [existing] = await db.select().from(appSettingsTable).limit(1);
  if (existing) return existing;

  const [created] = await db
    .insert(appSettingsTable)
    .values({ telegramBotToken: null, telegramChatId: null })
    .returning();
  return created;
}

router.post("/admin/login", async (req, res): Promise<void> => {
  const parsed = AdminLoginBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const { username, password } = parsed.data;
  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (
    !expectedUsername ||
    !expectedPassword ||
    username !== expectedUsername ||
    password !== expectedPassword
  ) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  res.json(AdminLoginResponse.parse({ ok: true }));
});

router.get("/admin/settings", async (req, res): Promise<void> => {
  if (!isAuthorized(req)) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const settings = await getOrCreateSettings();

  res.json(GetAdminSettingsResponse.parse(settings));
});

router.put("/admin/settings", async (req, res): Promise<void> => {
  if (!isAuthorized(req)) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const parsed = UpdateAdminSettingsBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const existing = await getOrCreateSettings();

  const [updated] = await db
    .update(appSettingsTable)
    .set(parsed.data)
    .where(eq(appSettingsTable.id, existing.id))
    .returning();

  res.json(UpdateAdminSettingsResponse.parse(updated));
});

router.post("/admin/settings/detect-telegram-chat", async (req, res): Promise<void> => {
  if (!isAuthorized(req)) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const existing = await getOrCreateSettings();
  const token = existing.telegramBotToken;

  if (!token) {
    res.status(400).json({ error: "먼저 텔레그램 봇 토큰을 저장해주세요." });
    return;
  }

  let updates: TelegramUpdate[];
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/getUpdates?limit=100`,
    );
    const body = (await response.json()) as { ok: boolean; result?: TelegramUpdate[]; description?: string };
    if (!response.ok || !body.ok) {
      logger.error({ status: response.status, body }, "Telegram getUpdates failed");
      res.status(400).json({ error: "봇 토큰이 올바른지 확인해주세요." });
      return;
    }
    updates = body.result ?? [];
  } catch (err) {
    logger.error({ err }, "Failed to reach Telegram API");
    res.status(400).json({ error: "텔레그램 서버에 연결하지 못했습니다." });
    return;
  }

  const groupChats = updates
    .map((update) => update.message?.chat ?? update.my_chat_member?.chat ?? update.channel_post?.chat)
    .filter((chat): chat is TelegramChat => Boolean(chat) && (chat!.type === "group" || chat!.type === "supergroup"));

  const detected = groupChats.at(-1);

  if (!detected) {
    res.status(400).json({
      error:
        "그룹방을 찾을 수 없습니다. 봇을 그룹방에 초대한 후 그룹방에 아무 메시지나 보내고 다시 시도해주세요.",
    });
    return;
  }

  const [updated] = await db
    .update(appSettingsTable)
    .set({ telegramChatId: String(detected.id), telegramChatTitle: chatDisplayName(detected) })
    .where(eq(appSettingsTable.id, existing.id))
    .returning();

  res.json(DetectTelegramChatResponse.parse(updated));
});

export default router;
