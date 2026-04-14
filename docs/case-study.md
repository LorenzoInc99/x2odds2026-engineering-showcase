# Case Study: From Feature Delivery to Reliability Engineering

## Context

The project started as an AI-enabled analytics product. Early progress was feature-heavy: add endpoints, wire data sources, integrate LLM prompts, and ship quickly.

The challenge appeared during real usage: output quality was not only a model issue. Many failures came from data freshness, sync gaps, and edge-case pipeline behavior.

## What was built

### 1) API and delivery surface
- Backend with `70+` route handlers for ingestion, assistant flows, admin tooling, and monitoring-related utilities.

### 2) Data modeling and lifecycle
- Relational schema evolution through SQL migrations in PostgreSQL/Supabase.
- Domain tables for fixtures, stats, personalization, and operational state.

### 3) Pipeline reliability layer
- Sync verification and audit-style checks to detect regressions earlier.
- Operational controls (debug/refresh endpoints) to speed up issue triage.
- Tiered sync cadence based on upcoming kickoff windows (higher frequency close to event time).

### 4) LLM integration discipline
- Structured context assembly before model invocation.
- JSON-schema-constrained outputs for specific extraction tasks.
- Prompt constraints to reduce ambiguity in downstream processing.

## Engineering lesson

The major lesson was practical: "AI quality" is often system quality.

- If data is stale, model answers drift.
- If context is noisy, model consistency drops.
- If sync pipelines are brittle, trust in outputs falls quickly.

This shifted development toward lifecycle-oriented engineering:

- monitor -> validate -> gate -> release -> review

## Relevance to analytics engineering roles

This work directly maps to common responsibilities in AI analytics teams:

- evaluation and structured review loops for generative outputs
- observability and regression detection in production-like systems
- SQL-centered analytical data modeling
- API-based integration and operational ownership
- collaboration across technical and business contexts
