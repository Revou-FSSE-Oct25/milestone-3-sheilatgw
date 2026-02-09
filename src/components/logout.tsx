"use client"
import { logoutAction } from "@/app/login/action"
import { useCartStore } from "@/store/cartStore"

export default function LogoutButton() {
  const clearCart = useCartStore(state => state.clearCart)

  const handleLogout = async () => {
    clearCart()
    await logoutAction()
  }

  return (
    <button onClick={handleLogout}className="py-2 px-6 bg-red-600 text-white rounded-sm cursor-pointer">
      Logout
    </button>
  )
}
