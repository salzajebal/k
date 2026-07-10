import { Router, type IRouter } from "express";
import { db, pageViewsTable } from "@workspace/db";
import { TrackPageViewBody } from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

const BOT_UA_PATTERN =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|headless|curl|wget|python-requests|axios|postman/i;

router.post("/track", async (req, res): Promise<void> => {
  res.status(204).end();

  const parsed = TrackPageViewBody.safeParse(req.body);
  if (!parsed.success) return;

  if (parsed.data.path.startsWith("/admin")) return;

  const userAgent = req.header("user-agent") ?? "";
  if (BOT_UA_PATTERN.test(userAgent)) return;

  try {
    await db
      .insert(pageViewsTable)
      .values({
        visitorId: parsed.data.visitorId,
        sessionId: parsed.data.sessionId,
        path: parsed.data.path,
        referrer: parsed.data.referrer ?? null,
        userAgent,
      })
      .onConflictDoNothing({ target: pageViewsTable.sessionId });
  } catch (err) {
    logger.error({ err }, "Failed to record page view");
  }
});

export default router;
