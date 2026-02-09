'use server';

import { login as authLogin, logOut as authLogout, userRole } from "@/lib/auth"
import { redirect } from 'next/navigation'

export async function loginAction(role: userRole, callbackURL: string = "/dashboard"){
    await authLogin(role);

    redirect(callbackURL);
}

export async function logoutAction(){
    await authLogout();
    
    redirect('/signin');
}