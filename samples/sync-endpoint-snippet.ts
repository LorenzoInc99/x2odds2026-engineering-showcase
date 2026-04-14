/**
 * Sanitized pattern: protected sync route.
 * Purpose: show API->DB ingestion control, not full production logic.
 */
import type { NextRequest } from 'next/server'

function authorize(req: NextRequest): boolean {
  const secret = process.env.SYNC_SECRET
  if (!secret) return false
  const auth = req.headers.get('authorization')
  const bearer = auth?.startsWith('Bearer ') ? auth.slice(7).trim() : null
  return bearer === secret
}

export async function POST(req: NextRequest) {
  if (!authorize(req)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // 1) fetch from external Sport API
  // 2) transform to internal shape
  // 3) upsert to PostgreSQL tables
  // 4) write operational run metadata

  return Response.json({ ok: true })
}
/**
 * Sanitized excerpt: authenticated POST for triggering a sync pipeline.
 * Pattern: secret in env, compare Bearer or custom header — never expose to client.
 */

import type { NextRequest } from 'next/server'

function authorize(req: NextRequest): boolean {
  const secret = process.env.SYNC_SECRET
  if (!secret) return false

  const auth = req.headers.get('authorization')
  const bearer = auth?.startsWith('Bearer ') ? auth.slice(7).trim() : null
  const header = req.headers.get('x-sync-secret')?.trim()
  return bearer === secret || header === secret
}

export async function POST(req: NextRequest) {
  if (!process.env.SYNC_SECRET) {
    return Response.json({ error: 'SYNC_SECRET is not set' }, { status: 503 })
  }
  if (!authorize(req)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let skipSecondaryStep = false
  try {
    const body = await req.json()
    if (body.skipSecondaryStep === true) skipSecondaryStep = true
  } catch {
    /* empty body */
  }

  const started = new Date().toISOString()

  try {
    // Primary + optional secondary sync; persist run row for observability.
    void skipSecondaryStep
    return Response.json({ ok: true, started_at: started })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    return Response.json({ ok: false, error: msg }, { status: 500 })
  }
}
