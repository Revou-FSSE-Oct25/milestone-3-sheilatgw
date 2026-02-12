"use server"

import { revalidatePath } from "next/cache"

export async function deleteProduct(formData: FormData) {
  const id = formData.get("id")

  await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "DELETE",
  })

  revalidatePath("/admin/items")
}

export async function createProduct(formData: FormData) {
  const title = formData.get("title")
  const price = formData.get("price")
  const description = formData.get("description")
  const image = formData.get("image")

  await fetch("https://api.escuelajs.co/api/v1/products/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      price: Number(price),
      description,
      categoryId: 1,
      images: [image],
    }),
  })

  revalidatePath("/admin/items")
}

export async function updateProduct(formData: FormData) {
  const id = formData.get("id")
  const title = formData.get("title")
  const price = formData.get("price")
  const description = formData.get("description")

  await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      price: Number(price),
      description,
      categoryId: 1,
      images: ["https://placehold.co/300"]
    }),
  })

  revalidatePath("/admin/items")
}