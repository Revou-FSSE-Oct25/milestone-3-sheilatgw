"use client"

import { useRouter } from "next/navigation"
import { IoBagAdd } from "react-icons/io5"
import { User } from "@/lib/auth";

type Props = {
  user: User | null;
};

function handleAddToCart(user: User | null, router: ReturnType<typeof useRouter>) {
  return () => {
    if (!user) {
      router.push("/signin?callbackURL=/products")
      return;
    }

    console.log("Add to cart");
  };
}

export function AddToCartSmallButton({ user }: Props) {
    const router = useRouter();
    const handleClick = handleAddToCart(user, router);
  return (
    <button onClick={handleClick} className="flex items-center justify-center w-10 h-10 py-2 text-white bg-blue-700 rounded hover:bg-blue-800 transition">
      <IoBagAdd size={20}/>
    </button>
  )
}

export function AddToCartLargeButton({ user }: Props){
    const router = useRouter();
    const handleClick = handleAddToCart(user, router);
    return (
    <button onClick={handleClick} className="flex items-center justify-center w-70 h-10 py-2 text-white bg-blue-700 rounded hover:bg-blue-800 transition">
     <IoBagAdd size={20}/> <p className="ml-1">Add to cart</p>
    </button>)
}


