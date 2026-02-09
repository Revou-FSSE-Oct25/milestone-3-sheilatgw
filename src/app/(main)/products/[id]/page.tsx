import { getProduct } from "@/lib/api"
import { getSession } from "@/lib/auth";
import Link from "next/link";
import {IoPeopleOutline, IoBagAdd} from "react-icons/io5"
import { IoMdStar } from "react-icons/io";
import Wishlist from "@/components/wishlist";
import { AddToCartLargeButton } from "@/components/addToCartButton";


export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProduct(id)
  const user = await getSession();

  return (
    <div className="min-h-screen flex justify-center items-center">
  <div className="bg-white p-6 shadow grid md:grid-cols-2 gap-8 max-w-250">
    <img src={product.image} alt={product.title} className="w-full h-80 object-contain rounded" />
    <div>
      <h1 className="text-2xl font-semibold line-clamp-3">{product.title}</h1> 
      <div className="flex items-center space-x-1">
        <IoMdStar style={{ fontSize: 20, color: '#fdc700' }}/>
        <p className="text-gray-500 text-sm">${product.rating.rate} | {product.rating.count} sold</p>
      </div>
      <p className="text-xl font-bold mt-4">${product.price}</p>
      <div className="mt-auto p-3 flex items-center justify-between gap-8">
          <Wishlist user = {user}/>
       <AddToCartLargeButton user = {user}/>
        </div>
      <p className="text-gray-600 mt-4">{product.description}</p>
      </div> 
  </div>
</div>
  )
}



