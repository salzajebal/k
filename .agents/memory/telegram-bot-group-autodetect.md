---
name: Telegram bot group chat auto-detection
description: How to let an admin UI auto-discover which group chat a Telegram bot has been added to, without asking for a manual chat ID.
---

Telegram's Bot API has no "list groups this bot is in" endpoint. The reliable way to
discover a group chat id is to call `getUpdates` on the bot token and scan recent
`message` / `my_chat_member` / `channel_post` updates for a `chat` object with
`type` `group` or `supergroup`, then take the most recent one.

**Why:** The user explicitly wanted the admin UI to require only a bot token (no
manual chat ID field) and still be able to notify the right group. `getUpdates` only
returns updates the bot has *already received*, so this only works after the bot is
invited to the group AND someone sends at least one message there (invite alone
sometimes doesn't produce a usable update depending on privacy mode).

**How to apply:** Surface this constraint in the UI copy — instruct the admin to
invite the bot to the group and send one message before clicking "detect". Persist
both the detected chat id and a human-readable title (group name) so the admin gets
visible confirmation of which group is connected, and surface a clear Korean/localized
error when no group update is found yet instead of silently failing.
