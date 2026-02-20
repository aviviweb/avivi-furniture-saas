import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const hostname = req.headers.get('host')

  // Define the main domain
  const mainDomain = process.env.NEXT_PUBLIC_MAIN_DOMAIN || 'localhost:3000'

  // Extract subdomain
  const subdomain = hostname?.replace(`.${mainDomain}`, '')

  if (subdomain && subdomain !== mainDomain) {
    // Rewrite to the tenant route
    return NextResponse.rewrite(new URL(`/tenant/${subdomain}${url.pathname}`, req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
