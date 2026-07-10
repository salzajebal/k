import { Router, type IRouter } from "express";
import { sql } from "drizzle-orm";
import { db, pageViewsTable } from "@workspace/db";
import { GetStatsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

function isAuthorized(req: { header(name: string): string | undefined }): boolean {
  const adminKey = req.header("x-admin-key");
  const expectedKey = process.env.ADMIN_PASSWORD;
  return Boolean(expectedKey) && Boolean(adminKey) && adminKey === expectedKey;
}

const KST = "Asia/Seoul";

router.get("/stats", async (req, res): Promise<void> => {
  if (!isAuthorized(req)) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const periodQuery = async (sinceExpr: ReturnType<typeof sql>) => {
    const [row] = await db
      .select({
        visitors: sql<number>`count(distinct ${pageViewsTable.visitorId})`,
        views: sql<number>`count(*)`,
      })
      .from(pageViewsTable)
      .where(sinceExpr);
    return {
      visitors: Number(row?.visitors ?? 0),
      views: Number(row?.views ?? 0),
    };
  };

  const [today, last7Days, last30Days, total, dailyRows] = await Promise.all([
    periodQuery(
      sql`date(${pageViewsTable.createdAt} at time zone ${KST}) = date(now() at time zone ${KST})`,
    ),
    periodQuery(sql`${pageViewsTable.createdAt} >= now() - interval '7 days'`),
    periodQuery(sql`${pageViewsTable.createdAt} >= now() - interval '30 days'`),
    periodQuery(sql`true`),
    db
      .select({
        date: sql<string>`to_char(${pageViewsTable.createdAt} at time zone ${KST}, 'YYYY-MM-DD')`,
        visitors: sql<number>`count(distinct ${pageViewsTable.visitorId})`,
        views: sql<number>`count(*)`,
      })
      .from(pageViewsTable)
      .where(sql`${pageViewsTable.createdAt} >= now() - interval '13 days'`)
      .groupBy(sql`1`)
      .orderBy(sql`1`),
  ]);

  const daily = dailyRows.map((row) => ({
    date: row.date,
    visitors: Number(row.visitors),
    views: Number(row.views),
  }));

  res.json(
    GetStatsResponse.parse({
      today,
      last7Days,
      last30Days,
      total,
      daily,
    }),
  );
});

export default router;
