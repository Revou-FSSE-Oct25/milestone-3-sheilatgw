import { promises } from "dns";
import { cookies } from "next/headers";

export const AUTH_COOKIE = 'auth_token';

export type userRole = "admin" | "user" | "guest";

export interface User {
    id : string,
    name : string,
    role : userRole;
}

export async function login(role : userRole){
    const user: User = {
        id: crypto.randomUUID(),
        name: role === "admin" ? "admin user" : "standard user",
        role
    }
    const expires = new Date(Date.now() * 1000 * 60 * 60)
    const cookieStore = await cookies()

    cookieStore.set(AUTH_COOKIE, JSON.stringify(user), {
        httpOnly: true,
        expires,
        sameSite: "lax",
        path:"/"
    })

    console.log('[Mock Auth] Logging in as ${role}...');
    return user;
}

export async function logOut(){
    const cookieStore = await cookies()
    cookieStore.delete(AUTH_COOKIE)

    console.log('[Mock Auth] Logging out...');
}

export async function getSession() : Promise<User | null> {
    const cookieStore = await cookies()
    const token = cookieStore.get(AUTH_COOKIE)

    if (!token) return null

    try{
     return JSON.parse(token.value) as User
    } catch{
        return null
    }
} 