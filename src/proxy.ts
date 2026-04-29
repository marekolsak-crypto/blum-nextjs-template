import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { auth } from "@/lib/auth";
import { routing } from "./i18n/routing";

const nextIntlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.endsWith("/sign-in")) {
    return nextIntlMiddleware(request);
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return nextIntlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api/auth|api/healthcheck|trpc|_next|_vercel|.*\\..*).*)"],
};
