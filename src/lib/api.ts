import { Product } from "@/types/product"

export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products")

  if (!res.ok) {
    throw new Error("Failed to fetch API")
  }

  return res.json()
}

export async function getProduct(id: string) {
  console.log("Fetching product ID:", id)

  const res = await fetch(`https://fakestoreapi.com/products/${id}`)

  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }

  const data = await res.json()
  console.log("Data:", data)

  return data
}

