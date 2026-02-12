"use client"

import React from 'react'
import { useCartStore } from "@/store/cartStore"
import { PayButton } from '@/components/CheckPay'

function page() {
    const items = useCartStore(state => state.items)
    const totalItems = items.reduce((sum, item) => sum + item.quantity,0)
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className='px-30 pb-30 pt-25'>
        <p className='font-semibold text-xl text-gray-500 mb-2'>Shipping Details</p>
        <div className='flex gap-5'>
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-2 border border-gray-200 shadow-sm p-3 rounded-lg w-150 h-50">
                <form className="space-y-2 w-full">
                    <div className='flex items-center gap-3'>
                        <input type="text" placeholder="Full Name" className="border border-gray-400 rounded-lg px-3 py-2"/>
                        <input type="text" placeholder="Phone Number" className="border border-gray-400 rounded-lg px-3 py-2"/>
                    </div>
                    <textarea placeholder="Address" className="w-full border border-gray-400 rounded-lg px-3" rows={3}/>
                    <input type="text" placeholder="Additional Notes" className="w-full border border-gray-400 rounded-lg px-3 py-2"/>
                </form>
            </div>
            <div className='flex-1'>
                <p className='font-semibold text-xl text-gray-500 mb-2'>Order Details</p>
        {items.map(item => (
  <div key={item.id} className="flex items-center gap-4 mb-4 border border-gray-200 shadow-sm p-3 rounded-lg w-150">
    <img src={item.image} className="w-16 h-16 object-contain" />

    <div className="flex-1">
      <p>{item.title}</p>

      <p className="text-gray-500 text-sm">
        Quantity: {item.quantity} item(s)
      </p>
    </div>
    <p className="font-semibold text-blue-800 text-xl">
      ${item.price * item.quantity}
    </p>
  </div>
))}
            </div>
        </div>
        <div className="flex flex-col gap-2 border border-gray-200 shadow-sm p-3 rounded-lg w-80 h-50">
        <p className="text-base font-semibold text-gray-700">Payment Details</p>
        <div className='flex justify-between text-gray-500'>
            <p className='text-sm'>Subtotal <span className='text-xs'>({totalItems} items)</span></p>
            <p className='text-sm'>{totalPrice.toFixed(2)} USD</p>
        </div>
        <div className='flex justify-between text-gray-500'>
            <p className='text-sm'>Shipping Fee</p>
            <p className='text-sm text-green-700'>Free</p>
        </div>
        <div className="mt-1 border-t-2 border-gray-200"></div>
        <div className='flex justify-between'>
            <p className='text-sm text-gray-700'>Total</p>
            <p className='text-sm font-bold text-blue-800'>{totalPrice.toFixed(2)} USD</p>
        </div>
        <PayButton/>
      </div>
        </div>
    </div>
  )
}

export default page