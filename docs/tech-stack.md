# Technology stack

Derived from the main application `package.json` (versions as in the project). **No environment values** are listed here.

## Runtime / language

- **TypeScript**
- **Node.js** (for Next.js and tooling)

## Web application

- **Next.js** `^14.0.4` — App Router, server and client components, route handlers (`app/api/**`)
- **React** `^18.2.0` / **react-dom**

## Data and backend integration

- **@supabase/supabase-js** — Postgres client and auth-related usage patterns
- **@supabase/ssr** — server-side Supabase integration for Next.js
- **PostgreSQL** (hosted via Supabase in the real project)

## AI

- **@google/genai** — LLM API client for generation and structured calls (exact models configured in private env)

## Content / UI helpers

- **react-markdown** + **remark-gfm** — render assistant output safely in the UI
- **date-fns**, **luxon** — time zones and scheduling logic
- **better-sqlite3** — local/auxiliary usage where applicable (see private code)

## Styling and quality

- **Tailwind CSS** `^3.4.0`
- **PostCSS**, **Autoprefixer**
- **ESLint** + **eslint-config-next**

## Scripts (conceptual)

The private repo includes npm scripts for local dev, lint, phased verification, and **data sync** CLI entrypoints. Command names and schedules are not duplicated here to avoid drift; this doc is for **stack recognition** only.
