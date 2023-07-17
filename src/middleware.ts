import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem("@FS: userData");


        if (request.nextUrl.pathname.startsWith("/admin") && !token) {
            return NextResponse.rewrite(new URL("/login", request.url))
        }

        if (request.nextUrl.pathname.startsWith("/login") && token) {
            return NextResponse.rewrite(new URL("/", request.url))
        }

        if (request.nextUrl.pathname.startsWith("/register") && token) {
            return NextResponse.rewrite(new URL("/", request.url))
        }
    }
}

export const config = {
    matcher: '/:path*',
}