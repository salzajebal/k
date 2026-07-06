import { Router, type IRouter } from "express";
import { desc } from "drizzle-orm";
import { db, leadsTable, appSettingsTable } from "@workspace/db";
import {
  CreateLeadBody,
  CreateLeadResponse,
  ListLeadsResponse,
} from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

async function notifyTelegram(lead: {
  name: string;
  phone: string;
  creditDebt?: string | null;
  securedDebt?: string | null;
  assets?: string | null;
  income?: string | null;
}): Promise<void> {
  const [settings] = await db.select().from(appSettingsTable).limit(1);
  const token = settings?.telegramBotToken;
  const chatId = settings?.telegramChatId;
  if (!token || !chatId) return;

  const lines = [
    "새로운 상담 신청이 접수되었습니다.",
    `이름: ${lead.name}`,
    `전화번호: ${lead.phone}`,
    lead.creditDebt ? `신용채무: ${lead.creditDebt}` : null,
    lead.securedDebt ? `담보채무: ${lead.securedDebt}` : null,
    lead.assets ? `재산: ${lead.assets}` : null,
    lead.income ? `월소득: ${lead.income}` : null,
  ].filter((line): line is string => Boolean(line));

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: lines.join("\n") }),
    });
    if (!response.ok) {
      const body = await response.text();
      logger.error({ status: response.status, body }, "Telegram notification failed");
    }
  } catch (err) {
    logger.error({ err }, "Failed to send Telegram notification");
  }
}

router.post("/leads", async (req, res): Promise<void> => {
  const parsed = CreateLeadBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [lead] = await db.insert(leadsTable).values(parsed.data).returning();

  res.status(201).json(CreateLeadResponse.parse(lead));

  void notifyTelegram(parsed.data);
});

router.get("/leads", async (req, res): Promise<void> => {
  const adminKey = req.header("x-admin-key");
  const expectedKey = process.env.ADMIN_PASSWORD;

  if (!expectedKey || !adminKey || adminKey !== expectedKey) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const leads = await db.select().from(leadsTable).orderBy(desc(leadsTable.createdAt));

  res.json(ListLeadsResponse.parse(leads));
});

export default router;
