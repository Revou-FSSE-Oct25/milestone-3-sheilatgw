import Link from "next/link"
import { loginAction } from "@/app/login/action";
import {LoginGoogleButton, LoginAppleButton} from "@/components/loginButton"
import { FiEye, FiEyeOff } from "react-icons/fi";


const SignInPage = ({
  searchParams,
}: {
  searchParams: { callbackURL?: string };
}) => {
  const callbackURL = searchParams.callbackURL || "/dashboard";
    
  return (
    <div className="min-h-screen flex-col items-center">
        <div className="m-5 text-center">
            <Link href="/" className="text-4xl font-extrabold py-2 px-3 text-blue-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
        Home
        </Link>
            <p className="text-2xl text-gray-500">Explore Your Hobby With Us!</p>
        </div>
        <div className="bg-white w-96 mx-auto rounded-sm shadow p-8 mb-5">
            <h1 className='text-4xl font-bold mb-1'>Log In</h1>
            <p className="font-medium mb-5 text-gray-500">Log in to your account</p>
            <div>
      <form action={async () => {
        "use server";
        await loginAction("user", callbackURL);
      }}>
        <button type="submit" className="bg-blue-800 p-3 font-bold text-stone-50 w-full text-center rounded-sm hover:bg-blue-900 mb-3 cursor-pointer">Login as User</button>
      </form>

      <form action={async () => {
        "use server";
        await loginAction("admin", callbackURL);
      }}>
        <button type="submit" className="bg-blue-800 p-3 font-bold text-stone-50 w-full text-center rounded-sm hover:bg-blue-900 mb-3 cursor-pointer">Login as Admin</button>
      </form>
    </div>
            <p className="text-sm text-gray-500 mb-3 text-center">Or sign in with the following methods</p>
            <div className="grid grid-cols-1 space-y-2">
                <LoginGoogleButton/>
                <LoginAppleButton/>
            </div>
        </div>
    </div>
  )
}

export default SignInPage