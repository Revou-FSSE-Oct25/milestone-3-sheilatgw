import Link from "next/link"
import { createProduct } from "../action"

export default function AddProductPage() {
  return (
    <div className="p-30 max-w-xl">
      <h1 className="text-xl font-semibold mb-4">Add Product</h1>
      <form action={createProduct} className="space-y-4">
        <input name="title" placeholder="Product Title" className="w-full border rounded-lg px-3 py-2"/>
        <input name="price" placeholder="Price" type="number" className="w-full border rounded-lg px-3 py-2"/>
        <textarea name="description" placeholder="Description" className="w-full border rounded-lg px-3 py-2"/>
        <input name="image" placeholder="Image URL" className="w-full border rounded-lg px-3 py-2"/>
        <button className="bg-blue-800 text-white px-6 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  )
}
