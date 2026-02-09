"use client"
import Link from "next/link"
import { User } from "@/lib/auth"
import { useState } from "react"
import CartBadge from "@/components/cartBadge"
import {IoClose, IoMenu, IoCartOutline, IoInformationCircleOutline, IoHeartOutline} from "react-icons/io5"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiPackageLight } from "react-icons/pi";
import clsx from "clsx"

type Props = {
    user: User | null
};

export default function Navlink({ user }: Props){
    const [open, setOpen] = useState(false)
  return (
    <>
        <button onClick={()=> setOpen(!open)} className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100">
            {!open ? <IoMenu className="size-8"/> : <IoClose className="size-8"/>}
        </button>
        <div className={clsx("w-full md:block md:w-auto", {"hidden" : !open})}>
            <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-stone-50">
                <li>
                    <Link href="/about" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
                        <IoInformationCircleOutline size={20}/>
                    </Link>
                </li>
                <li>
                    <div className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
                    <CartBadge user={user}/>
                    </div>
                </li>
                <li>
                    <Link href="/wishlist" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
                    <IoHeartOutline size={20}/>
                    </Link>
                </li>
                {user?.role === "admin" && (
                    <>
                        <li>
                            <Link href="/admin/dashboard" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
                                <MdOutlineDashboardCustomize size={20}/>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/items" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">
                                <PiPackageLight size={20}/>
                            </Link>
                        </li>
                    </>)}
            </ul>
        </div>
    </>
  )
}



