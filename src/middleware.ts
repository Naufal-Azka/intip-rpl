import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Get cookie token
    const token = request.cookies.get('token')?.value;

    // Check if the path starts with /admin
    if (request.nextUrl.pathname.startsWith('/admin')) {
        if (!token) {
            // If no token, redirect to login
            return NextResponse.redirect(new URL('/login', request.url));
        }

        try {
            // Decode token and check role
            const payload = JSON.parse(atob(token.split('.')[1]));
            if (payload.role !== 'ADMIN') {
                // If not admin, redirect to home
                return NextResponse.redirect(new URL('/', request.url));
            }
        } catch (error) {
            // If token is invalid, redirect to login
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
    matcher: '/admin/:path*'
};
