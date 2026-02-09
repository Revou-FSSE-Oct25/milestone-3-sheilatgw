import Link from "next/link";
import { getSession } from "@/lib/auth";
import { logoutAction } from "@/app/login/action";

export default async function AuthButton() {
  const user = await getSession();

  if (user) {
    return (
      <form action={logoutAction}>
        <button className="py-2 px-6 bg-red-600 text-white rounded-sm cursor-pointer">
          Logout
        </button>
      </form>
    );
  }

  return (
    <Link href="/signin" className="py-2.5 px-6 bg-blue-800 text-stone-50 hover:bg-blue-900 rounded-sm cursor-pointer">
      Sign In
    </Link>
  );
}
