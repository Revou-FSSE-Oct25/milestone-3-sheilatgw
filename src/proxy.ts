import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE, User } from "./lib/auth";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

const PROTECTED_ROUTES = {
    '/admin': ['admin'],
    '/dashboard': ['user', 'admin'],
} as const;

export function proxy(request: NextRequest){
    const { pathname } = request.nextUrl;


    const authCookie = request.cookies.get(AUTH_COOKIE)
    let user:  User | null = null
    if (authCookie){
        try{
            user = JSON.parse(authCookie.value)
        } catch {
            console.log('no cookkie')
        }
    }

    const isLoggedIn = !!user;

    if (isLoggedIn && pathname === '/signin'){
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    const protectedRouteKey = Object.keys(PROTECTED_ROUTES).find(route => pathname.startsWith(route))

    if(protectedRouteKey){
        if(!isLoggedIn){
            const url = new URL('/signin', request.url)
            url.searchParams.set('callbackURL', pathname)
            return NextResponse.redirect(url)
        }

        const allowedRoles = PROTECTED_ROUTES[protectedRouteKey as keyof typeof PROTECTED_ROUTES];
        if (user && !allowedRoles.includes(user.role as any)){
            return NextResponse.redirect(new URL('/access-denied', request.url))
        }
    }


}