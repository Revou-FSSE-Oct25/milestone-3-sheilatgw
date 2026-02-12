"use client"

import { useRouter } from "next/navigation"
import { useCartStore } from "@/store/cartStore"

export function CheckoutButton() {
  const router = useRouter()
  const items = useCartStore(state => state.items)

  const handleCheckout = () => {
    if (items.length === 0) return
    router.push("/checkout")
  }

  return (
    <button onClick={handleCheckout} disabled={items.length === 0} className={`flex uppercase items-center justify-center gap-2 w-full text-stone-50 font-medium py-2 px-6 text-base rounded-xl
        ${items.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-800 hover:bg-blue-950 cursor-pointer"}`}>
      Checkout
    </button>
  )
}

export function PayButton() {
  const router = useRouter()
  const items = useCartStore(state => state.items)

  const handleCheckout = () => {
    if (items.length === 0) return
    router.push("/checkout")
  }

  return (
    <button onClick={handleCheckout} className="flex uppercase items-center justify-center gap-2 w-full bg-blue-800 text-stone-50 font-medium py-2 px-6 text-base rounded-xl hover:bg-blue-950 cursor-pointer">
      Pay Now
    </button>
  )
}


