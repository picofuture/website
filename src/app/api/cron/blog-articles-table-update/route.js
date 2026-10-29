// Disabled: this job was switched off before the App Router migration.
// The previous implementation lives in git history (src/pages/api/cron).
export function GET() {
  return Response.json({ success: false, disabled: true })
}
