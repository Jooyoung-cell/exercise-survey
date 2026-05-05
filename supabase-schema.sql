create extension if not exists "pgcrypto";

create table if not exists public.survey_responses (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  profile jsonb not null,
  answers jsonb not null,
  scores jsonb not null,
  type_profile jsonb
);

alter table public.survey_responses
  add column if not exists type_profile jsonb;

alter table public.survey_responses enable row level security;

-- Public access is intentionally blocked. Vercel API Functions use the
-- server-only Supabase service role key to insert and read responses.
