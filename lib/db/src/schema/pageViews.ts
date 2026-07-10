import { pgTable, serial, text, timestamp, unique } from "drizzle-orm/pg-core";

export const pageViewsTable = pgTable(
  "page_views",
  {
    id: serial("id").primaryKey(),
    visitorId: text("visitor_id").notNull(),
    sessionId: text("session_id").notNull(),
    path: text("path").notNull(),
    referrer: text("referrer"),
    userAgent: text("user_agent"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [unique("page_views_session_id_unique").on(table.sessionId)],
);

export type InsertPageView = typeof pageViewsTable.$inferInsert;
export type PageView = typeof pageViewsTable.$inferSelect;
