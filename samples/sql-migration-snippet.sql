-- Sanitized pattern: migration for operational sync state.
CREATE TABLE IF NOT EXISTS public.sync_state (
  id SMALLINT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  last_run_at TIMESTAMPTZ,
  last_result JSONB,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO public.sync_state (id, last_run_at)
VALUES (1, NULL)
ON CONFLICT (id) DO NOTHING;
-- Sanitized migration excerpt: single-row operational state + RLS enabled.
-- No production policy text here by design.

CREATE TABLE IF NOT EXISTS public.pipeline_cron_state (
  id SMALLINT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  last_run_at TIMESTAMPTZ,
  last_result JSONB,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO public.pipeline_cron_state (id, last_run_at)
VALUES (1, NULL)
ON CONFLICT (id) DO NOTHING;

COMMENT ON TABLE public.pipeline_cron_state IS
  'Operational state for scheduled sync cadence; policies managed outside this showcase.';

ALTER TABLE public.pipeline_cron_state ENABLE ROW LEVEL SECURITY;
