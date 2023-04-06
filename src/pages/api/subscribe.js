import {supabase} from '@/lib/supabaseClient';

export const config = {
  runtime: 'experimental-edge',
}

function buildResponse(body = null, status = 200, statusText = "OK") {
  return new Response(body, { status, statusText });
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

    const selectResponse = await supabase.from('email_subscriptions')
      .select('*')
      .eq('email', email);

    if (selectResponse.error || selectResponse.status !== 200) {
      return buildResponse(null, 400, "Request Failed");
    }

    const { data } = selectResponse;

    if (data.length === 0) {
      const insertResponse = await supabase.from('email_subscriptions')
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
