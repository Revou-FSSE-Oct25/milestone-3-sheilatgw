"use client"

import { User } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { useCartStore } from "@/store/cartStore"
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5"

type Props = {
  user: User | null
}

export default function CartBadge({ user }: Props) {
  const items = useCartStore(state => state.items)
  const router = useRouter()

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity, 0)

    const handleClick = () => {
    if (!user) {
      router.push("/signin?callbackURL=/cart")
      return
    }

    router.push("/cart")
  }

  return (
    <button onClick={handleClick} className="relative flex items-center cursor-pointer">
      <IoCartOutline size={22} />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
          {totalItems}
        </span>
      )}
    </button>
  )
}

