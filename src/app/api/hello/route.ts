import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET() {
  const responseText = 'Hello World'

  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  // KV Example:

  const myKv = getRequestContext().env.MY_KV_NAMESPACE

  let suffix: string | null = ""

  try {
    suffix = await myKv.get("suffix")
  } catch (error) {
    console.error(error)
  }

  return new Response(responseText + suffix)

}
