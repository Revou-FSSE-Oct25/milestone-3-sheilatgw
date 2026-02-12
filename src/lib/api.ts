import { Product } from "@/types/product"

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products",{
    cache : "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch API")
  }

  const data = await res.json()

  return data.map((p: any) => ({
    id: p.id,
    title: p.title,
    price: p.price,
    description: p.description,
    image: p.images?.[0] || "/placeholder.png",
    rating: { rate: 0, count: 0 } 
  }))
}


export async function getProduct(id: string): Promise<Product> {
  console.log("Fetching ID:", id)
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)

  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }

  const p = await res.json()

  return {
    id: p.id,
    title: p.title,
    price: p.price,
    description: p.description,
    image: p.images?.[0] || "/placeholder.png",
    rating: { rate: 0, count: 0 }
  }
}


