import { getSupabaseClient } from '@/lib/supabaseClient'
import { buildResponse } from '@/lib/apiResponseBuilder'
import { EMAIL_SUBSCRIPTIONS } from '@/lib/sharedConsts'

export async function POST(request) {
  try {
    let { email } = await request.json()
    if (!email) return buildResponse(null, 400, 'Bad Request')

    let supabase = getSupabaseClient()
    let selectResponse = await supabase
      .from(EMAIL_SUBSCRIPTIONS)
      .select('*')
      .eq('email', email)

    if (selectResponse.error || selectResponse.status !== 200) {
      return buildResponse(null, 400, 'Request Failed')
    }

    if (selectResponse.data.length === 0) {
      let insertResponse = await supabase.from(EMAIL_SUBSCRIPTIONS).insert([{ email }])
      if (insertResponse.error || insertResponse.status !== 201) {
        return buildResponse(null, 400, 'Request Failed')
      }
    }

    return buildResponse()
  } catch {
    return buildResponse(null, 400, 'Bad Request')
  }
}
