export const buildResponse = (body = null, status = 200, statusText = "OK") => {
  return new Response(body, { status, statusText });
}
