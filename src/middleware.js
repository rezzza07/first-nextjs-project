import { NextResponse } from "next/server";

export function middleware(req) {
  const auth = req.cookies.get("auth");

  if (req.nextUrl.pathname.startsWith("/add-item") && !auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
