# Database Layer (PostgreSQL / Supabase)

## Role in the system

The database is the central data foundation for:
- sports domain records (fixtures, odds, stats context)
- application data (user preferences, saved interactions)
- operational state (sync metadata and run status)

## Data engineering approach

- SQL migration files for schema lifecycle control
- Explicit evolution of tables as product scope expanded
- Query paths designed for API/assistant consumption
- Separation between operational tables and user-facing domain tables

## What is intentionally not published

- Full schema dump
- RLS policy details
- Sensitive identifiers
- Any credentials or environment-linked values

## Transferable skills shown

- Relational modeling
- Migration-driven development
- Analytical dataset structuring
- Production-aware database usage
