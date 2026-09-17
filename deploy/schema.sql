CREATE TABLE IF NOT EXISTS leads (
  id serial PRIMARY KEY,
  name text NOT NULL,
  phone text NOT NULL,
  credit_debt text,
  secured_debt text,
  assets text,
  income text,
  created_at timestamptz NOT NULL DEFAULT now(),
  preferred_time text
);

CREATE TABLE IF NOT EXISTS page_views (
  id serial PRIMARY KEY,
  visitor_id text NOT NULL,
  session_id text NOT NULL,
  path text NOT NULL,
  referrer text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT page_views_session_id_unique UNIQUE (session_id)
);

CREATE TABLE IF NOT EXISTS app_settings (
  id serial PRIMARY KEY,
  telegram_bot_token text,
  telegram_chat_id text,
  telegram_chat_title text,
  updated_at timestamptz NOT NULL DEFAULT now()
);