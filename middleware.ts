import { NextRequest, NextResponse } from "next/server";
import { decodeToken } from "@/lib/auth"; // Use your jose-based token decoder

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session-id")?.value;
  const currentPath = request.nextUrl.pathname.replace(/\/$/, "");

  const publicRoutes = ["/sign-in", "/sign-up"];
  const protectedRoutes = ["/admin-panel", "/dashboard"];

  const isPublicRoute = publicRoutes.includes(currentPath);
  const isProtectedRoute = protectedRoutes.some((route) =>
    currentPath.startsWith(route)
  );

  // If route is protected and there's no session, redirect to sign-in
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Try to decode the token if it exists
  const decoded = session ? await decodeToken(session) : null;

  // If session exists and token is valid
  if (session && decoded?.success) {
    const role = decoded.payload!.role;

    // Redirect authenticated user away from sign-in/up
    if (isPublicRoute) {
      const redirectPath =
        role === "ADMIN"
          ? "/admin-panel"
          : role === "CUSTOMER"
          ? "/dashboard"
          : "/";
      return NextResponse.redirect(new URL(redirectPath, request.url));
    }

    // Enforce role-based route protection
    if (
      (currentPath.startsWith("/admin-panel") && role !== "ADMIN") ||
      (currentPath.startsWith("/dashboard") && role !== "CUSTOMER")
    ) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  // If session is present but invalid (e.g. tampered or expired), clear the cookie and redirect
  if (session && decoded && !decoded.success && isProtectedRoute) {
    const res = NextResponse.redirect(new URL("/sign-in", request.url));
    res.cookies.delete("session-id");
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
