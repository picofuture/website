import { formatCDNURl } from '@/lib/cloudflareImageLoader'

const RESUME = '2026_04_05_resume_anfal.pdf'

export async function GET() {
  let response = await fetch(formatCDNURl(RESUME, 'docs'))
  if (!response.ok) return new Response('Résumé unavailable', { status: 502 })

  return new Response(response.body, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=${RESUME}`,
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
