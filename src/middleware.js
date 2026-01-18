import { NextResponse } from 'next/server';

export function middleware(request) {
  const authToken = request.cookies.get('auth_token');
  const isProtectedPath = request.nextUrl.pathname.startsWith('/add-item');

  if (isProtectedPath && !authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-item/:path*'],
};
