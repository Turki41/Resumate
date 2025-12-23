import { NextRequest, NextResponse } from "next/server";
import { checkAuth } from "./middleware/check-auth.middleware";
import { loginSignup } from "./middleware/login-signup.middleware";

export const proxy = async (req: NextRequest) => {
    try {
        const path = req.nextUrl.pathname

        if(path.startsWith('/upload') || path.startsWith('/feedback')) {
           const res = await checkAuth(req)
           return res
        }

        if(path.startsWith('/login') || path.startsWith('/signup')) {
            const res = await loginSignup(req)
            return res
        }
    } catch (error) {
        console.log('Error in main middleware', error)
        return NextResponse.redirect(new URL('/', req.url))
    }
}

export const config = {
    matcher: ['/upload/:path*', '/feedback/:path*', '/login/:path*', '/signup/:path*']
}