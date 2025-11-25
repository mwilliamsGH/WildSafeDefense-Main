import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if user has valid access cookie
  const hasAccess = request.cookies.get('site-access')?.value === 'granted';

  // If accessing the gate page, allow it
  if (request.nextUrl.pathname === '/gate') {
    // If already has access, redirect to home
    if (hasAccess) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  // If accessing API route for gate, allow it
  if (request.nextUrl.pathname === '/api/gate') {
    return NextResponse.next();
  }

  // For all other pages, check if user has access
  if (!hasAccess) {
    return NextResponse.redirect(new URL('/gate', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|images|.*\\.svg|.*\\.png).*)',
  ],
};
