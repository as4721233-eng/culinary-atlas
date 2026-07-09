/*
# Create newsletter_subscribers and leaderboard_entries tables

## Purpose
Culinary Atlas is a single-tenant, no-auth public site. Two pieces of data
genuinely need server-side persistence:
  1. Newsletter subscribers (the "Weekly Culinary Drop" signup in the footer).
  2. A community foodie leaderboard so visitors can post their quiz score and
     compete alongside the seeded fictional Grand Master Chefs.

The personal "Daily Spice Streak" and "Culinary Passport" toggles (Want to Go /
Tasted It) are per-visitor state with no sign-in, so those remain in
localStorage — not in these tables.

## New Tables
- `newsletter_subscribers`
  - `id` uuid PK
  - `email` text, unique, not null
  - `created_at` timestamptz default now()
- `leaderboard_entries`
  - `id` uuid PK
  - `player_name` text not null
  - `avatar` text not null (initials)
  - `score` integer not null default 0
  - `streak` integer not null default 0
  - `is_seeded` boolean not null default false  (marks the fictional baseline users)
  - `created_at` timestamptz default now()

## Security
- RLS enabled on both tables.
- Both tables are intentionally public/shared (no auth), so all four CRUD
  policies use `TO anon, authenticated`. SELECT/INSERT are open to everyone;
  UPDATE/DELETE are intentionally restricted to no-one via `USING (false)`
  because visitors should only ever add rows, never mutate or remove them
  (leaderboard ranks and subscriber lists must be append-only from the
  frontend).

## Seeded Data
- Eight fictional leaderboard_entries are inserted as baseline competitors
  (is_seeded = true) so the Global Foodie Leaderboard is never empty.
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_select_subscribers" ON newsletter_subscribers
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_insert_subscribers" ON newsletter_subscribers
  FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_update_subscribers" ON newsletter_subscribers
  FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "anon_delete_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_delete_subscribers" ON newsletter_subscribers
  FOR DELETE TO anon, authenticated USING (false);

CREATE TABLE IF NOT EXISTS leaderboard_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player_name text NOT NULL,
  avatar text NOT NULL,
  score integer NOT NULL DEFAULT 0,
  streak integer NOT NULL DEFAULT 0,
  is_seeded boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leaderboard_entries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_leaderboard" ON leaderboard_entries;
CREATE POLICY "anon_select_leaderboard" ON leaderboard_entries
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_leaderboard" ON leaderboard_entries;
CREATE POLICY "anon_insert_leaderboard" ON leaderboard_entries
  FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_leaderboard" ON leaderboard_entries;
CREATE POLICY "anon_update_leaderboard" ON leaderboard_entries
  FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "anon_delete_leaderboard" ON leaderboard_entries;
CREATE POLICY "anon_delete_leaderboard" ON leaderboard_entries
  FOR DELETE TO anon, authenticated USING (false);

-- Seed fictional baseline competitors (idempotent via ON CONFLICT)
INSERT INTO leaderboard_entries (player_name, avatar, score, streak, is_seeded)
VALUES
  ('Sofia Ricci',     'SR', 8420, 42, true),
  ('Arjun Mehta',     'AM', 7980, 38, true),
  ('Lucía Mendoza',   'LM', 7650, 35, true),
  ('Kenji Tanaka',    'KT', 7120, 29, true),
  ('Aisha Khan',      'AK', 6890, 27, true),
  ('Marco Bianchi',   'MB', 6450, 24, true),
  ('Yara Haddad',     'YH', 5980, 20, true),
  ('Ngozi Okoro',     'NO', 5340, 18, true)
ON CONFLICT DO NOTHING;
