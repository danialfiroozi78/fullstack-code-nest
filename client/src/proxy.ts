import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  const { pathname } = request.nextUrl;

  if (token && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/panel", request.url));
  }

  if (!token && pathname.startsWith("/panel")) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth", "/panel/:path*"],
};
