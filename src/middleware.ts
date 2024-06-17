import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";
  const authToken = request.cookies.get("next-auth.session-token");
  const isPublicPath = path == "/user/login" || path == "/user/signup";
  const tokenExistance = token.length !== 0 || authToken !== undefined;
  if (tokenExistance && isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // if(!tokenExistance && path == "/info/about_us"){
  //   return NextResponse.redirect(new URL("/user/login", request.url));
  // }
}

export const config = {
  matcher: ["/", "/user/login", "/user/signup"],
};
