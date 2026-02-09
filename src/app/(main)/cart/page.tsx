"use client"

import { useCartStore } from "@/store/cartStore"
import Header from "@/components/Header"
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import CheckPay from "@/components/CheckPay";

export default function CartPage() {
  const items = useCartStore(state => state.items)
  const increaseQty = useCartStore(state => state.increaseQty)
  const decreaseQty = useCartStore(state => state.decreaseQty)
  const removeItem = useCartStore(state => state.removeItem)

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="p-26">
        <h1 className="text-xl font-bold mb-4">My Cart</h1>
        <div className="flex item-center gap-10">
        <div className="">
      {items.length === 0 && <p>Cart kosong</p>}

      {items.map(item => (
        <div key={item.id} className="flex items-center gap-4 mb-4 border border-gray-200 shadow-sm p-3 rounded-lg w-150">
          <img src={item.image} className="w-16 h-16 object-contain" />

          <div className="flex-1">
            <p>{item.title}</p>
             <p>${item.price}</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="self-end font-semibold text-blue-800 text-xl">${item.price * item.quantity}</p>
            <div className="flex items-center">
                <button onClick={() => removeItem(item.id)} className="mr-5"><FaRegTrashAlt/></button>
                <div className="flex items-center gap-4 border-3 border-gray-200 px-5 py-1 rounded-2xl">
                <button onClick={() => decreaseQty(item.id)} className="text-gray-400"><FiMinus size={20}/></button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)} className="text-blue-800"><IoMdAdd size={20}/></button>
                </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className="flex flex-col items-center gap-2 border border-gray-200 shadow-sm p-3 rounded-lg w-75 h-50">
        <p className="justify-center">Total Price</p>
        <h2 className=" font-bold text-2xl">{totalPrice.toFixed(2)} USD</h2>
        <CheckPay/>
        <div className="mt-1 border-t-2 border-gray-200">
            <p className="text-sm text-gray-500 mt-1">Shipping fee will be calculated when checkout</p>
        </div>
      </div>
        </div>
      
    </div>
  )
}
