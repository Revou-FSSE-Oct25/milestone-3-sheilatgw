"use client"

import { useCartStore } from "@/store/cartStore"
import { useRouter } from "next/navigation"
import { IoBagAdd } from "react-icons/io5"
import { User } from "@/lib/auth";

type Props = {
  user: User | null;
  product: any
};

function handleAddToCart(user: User | null, router: ReturnType<typeof useRouter>, product: any, addToCart: (product: any) => void) {
  return () => {
    if (!user) {
      router.push("/signin?callbackURL=/products")
      return;
    }

    addToCart(product);
    console.log("added to cart", product)
  };
}


export function AddToCartSmallButton({ user, product }: Props) {
    const router = useRouter();
    const addToCart = useCartStore(state => state.addToCart)
    const handleClick = handleAddToCart(user, router, product, addToCart);
  return (
    <button onClick={handleClick} className="flex items-center justify-center w-10 h-10 py-2 text-white bg-blue-700 rounded hover:bg-blue-800 transition">
      <IoBagAdd size={20}/>
    </button>
  )
}

export function AddToCartLargeButton({ user, product }: Props){
    const router = useRouter();
    const addToCart = useCartStore(state => state.addToCart)
    const handleClick = handleAddToCart(user, router, product, addToCart);
    return (
    <button onClick={handleClick} className="flex items-center justify-center w-70 h-10 py-2 text-white bg-blue-700 rounded hover:bg-blue-800 transition">
     <IoBagAdd size={20}/> <p className="ml-1">Add to cart</p>
    </button>)
}


