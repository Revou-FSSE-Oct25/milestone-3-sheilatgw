import Link from "next/link";
import { getSession } from "@/lib/auth";
import { logoutAction } from "@/app/login/action";
import LogoutButton from "./logout";

export default async function AuthButton() {
  const user = await getSession();

  if (user) {
      return <LogoutButton />;
  }

  return (
    <Link href="/signin" className="py-2.5 px-6 bg-blue-800 text-stone-50 hover:bg-blue-900 rounded-sm cursor-pointer">
      Sign In
    </Link>
  );
}
