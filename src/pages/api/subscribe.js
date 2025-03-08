import { getSupabaseClient } from '@/lib/supabaseClient';
import { buildResponse } from "@/lib/apiResponseBuilder";
import { EMAIL_SUBSCRIPTIONS } from "@/lib/sharedConsts";

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  if (req.method.toLowerCase() !== 'post') {
    return buildResponse(null, 404, "Not Found");
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return buildResponse(null, 400, "Bad Request");
    }

    const supabase = getSupabaseClient();

    const selectResponse = await supabase.from(EMAIL_SUBSCRIPTIONS)
      .select('*')
      .eq('email', email);

    if (selectResponse.error || selectResponse.status !== 200) {
      return buildResponse(null, 400, "Request Failed");
    }

    const { data } = selectResponse;

    if (data.length === 0) {
      const insertResponse = await supabase.from(EMAIL_SUBSCRIPTIONS)
        .insert([{ email }]);

      if (insertResponse.error || insertResponse.status !== 201) {
        return buildResponse(null, 400, "Request Failed");
      }
    }

    return buildResponse();
  } catch (e) {
    return buildResponse(null, 400, "Bad Request");
  }
}
