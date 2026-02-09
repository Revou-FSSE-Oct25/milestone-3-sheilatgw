"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { User } from "@/lib/auth";
import {IoHeartOutline, IoHeart} from "react-icons/io5"

type Props = {
  user: User | null;
};


const Wishlist = ({ user }: Props) => {
    const [wishlist, setWishlist] = useState(false)
    const router = useRouter();

    const handleClick = () => {
      if (!user) {
      router.push("/signin?callbackURL=/products")
      return
      }

    setWishlist(!wishlist)
    }
    

  return (
    <button onClick={handleClick} className= "w-40 h-10 flex items-center justify-center rounded bg-white shadow hover:bg-gray-100 transition">
        {wishlist ? (<IoHeart size={20} className="text-red-500 text-xl" />) : (<IoHeartOutline size={20} className="text-xl" />)}
        <p className="ml-1">Wishlist</p>
    </button>
  )
}

export default Wishlist
    
