import { Product } from "@/types/product"
import { User } from "@/lib/auth";
import Link from "next/link"
import { AddToCartSmallButton } from "./addToCartButton";
import {IoPeopleOutline, IoBagAdd} from "react-icons/io5"
import { IoMdStar } from "react-icons/io";
import Image from "next/image";

type Props = {
  product: Product
  user: User | null;
}

export default function ProductCard({ product, user }: Props) {

  return (
    <div  className="bg-stone-50 shadow-lg rounded-sm flex flex-col h-full hover:shadow-md transition max-w-55">
      <Link href={`/products/${product.id}`}>
      <div className="h-36 w-full">
        <img src={product.image} alt={product.title} className="w-full h-full object-contain rounded-t-md"/>
      </div>
      <div className="p-3">
        <p className="text-sm font-medium line-clamp-2">
          {product.title}
        </p>

        <p className="text-base font-semibold text-gray-700 mt-1">
          ${product.price}
        </p>
      </div>
      </Link>
      <div className="mt-auto p-3 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <IoMdStar style={{ fontSize: 20, color: '#fdc700' }}/>
            <p className="text-gray-500 text-sm">${product.rating.rate} | {product.rating.count} sold</p>
        </div>
        <AddToCartSmallButton user={user} product={product} />
      </div>
    </div>
  )
}