/**
 * Sanitized excerpt: tiered cron cadence + operational state.
 * Adapted from the private project to demonstrate reliability-oriented scheduling.
 */

type CronTier = '15m' | '30m' | '1h'

const THREE_H_MS = 3 * 60 * 60 * 1000
const TEN_H_MS = 10 * 60 * 60 * 1000

export function tierFromMinutesToKickoff(minutes: number | null): CronTier {
  if (minutes == null || !Number.isFinite(minutes)) return '1h'
  const ms = minutes * 60_000
  if (ms <= THREE_H_MS) return '15m'
  if (ms <= TEN_H_MS) return '30m'
  return '1h'
}

export function requiredIntervalMs(tier: CronTier): number {
  if (tier === '15m') return 15 * 60 * 1000
  if (tier === '30m') return 30 * 60 * 1000
  return 60 * 60 * 1000
}

export type CronSyncResult = {
  skipped: boolean
  reason?: string
  tier: CronTier
  minutes_to_kickoff: number | null
  required_interval_ms: number
  elapsed_since_last_ms: number | null
}

/**
 * Example control flow:
 * - determine tier from nearest kickoff
 * - skip run if interval has not elapsed
 * - otherwise execute sync pipeline and persist run state
 */
export async function runCronRound(opts: {
  force?: boolean
  minutesToKickoff: number | null
  elapsedSinceLastMs: number | null
}): Promise<CronSyncResult> {
  const tier = tierFromMinutesToKickoff(opts.minutesToKickoff)
  const intervalMs = requiredIntervalMs(tier)
  const elapsed = opts.elapsedSinceLastMs

  if (!opts.force && elapsed != null && elapsed < intervalMs) {
    return {
      skipped: true,
      reason: `interval not elapsed (tier ${tier})`,
      tier,
      minutes_to_kickoff: opts.minutesToKickoff,
      required_interval_ms: intervalMs,
      elapsed_since_last_ms: elapsed,
    }
  }

  // sync fixtures, odds, and targeted stats here...
  return {
    skipped: false,
    tier,
    minutes_to_kickoff: opts.minutesToKickoff,
    required_interval_ms: intervalMs,
    elapsed_since_last_ms: elapsed,
  }
}
