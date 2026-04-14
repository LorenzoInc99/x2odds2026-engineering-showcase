/**
 * Sanitized excerpt: authenticated sync endpoint pattern.
 * Demonstrates API auth gates, optional params, and run logging.
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
    // empty body
  }

  const started = new Date().toISOString()

  try {
    // 1) sync primary entities
    // 2) optionally sync secondary entities
    // 3) persist run metadata
    return Response.json({ ok: true, started_at: started })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    // persist failure metadata
    return Response.json({ ok: false, error: msg }, { status: 500 })
  }
}
