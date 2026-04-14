-- Sanitized migration excerpt: operational state table + RLS.

CREATE TABLE IF NOT EXISTS public.sync_cron_state (
  id SMALLINT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  last_run_at TIMESTAMPTZ,
  last_result JSONB,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO public.sync_cron_state (id, last_run_at)
VALUES (1, NULL)
ON CONFLICT (id) DO NOTHING;

COMMENT ON TABLE public.sync_cron_state IS
'Single-row state used by tiered scheduling and sync observability.';

ALTER TABLE public.sync_cron_state ENABLE ROW LEVEL SECURITY;
