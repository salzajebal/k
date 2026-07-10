---
name: Visitor tracking without inflated counts
description: How the zrg-law-clone (and similar) sites track real visitor counts without fake/duplicate inflation
---

For "no fake numbers" visitor counting on a public site, use a client-generated `visitorId` (persisted in `localStorage`, long-lived) and `sessionId` (persisted in `sessionStorage`, per-tab), sent once per session via `sessionStorage` flag to a `/api/track` endpoint.

**Why:** naive per-pageview counters inflate numbers on refresh/navigation; per-browser localStorage id + per-session dedup + a DB unique constraint on `sessionId` (`ON CONFLICT DO NOTHING`) gives accurate unique-visitor and visit counts even with React StrictMode double-invokes or duplicate client calls.

**How to apply:** exclude `/admin` paths from tracking, filter obvious bot User-Agents server-side before inserting, and always report both "unique visitors" (`COUNT(DISTINCT visitor_id)`) and "views" (row count) separately in admin stats so it's clear which number is deduplicated.
