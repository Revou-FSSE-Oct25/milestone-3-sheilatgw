import Link from "next/link"
import Navlink from "./navlink"
import AuthButton from "../authButton"
import { getSession } from "@/lib/auth";

export default async function Navbar() {
  const user = await getSession();

  return (
    <div className="fixed top-0 w-full bg-stone-50 shadow-sm z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
            <Link href="/">
                <p>Nama toko</p>
            </Link>
            <div className="flex items-center space-x-4">
                <Navlink user = {user}/>
                <AuthButton/>
            </div>
        </div>
    </div>
  )
}

