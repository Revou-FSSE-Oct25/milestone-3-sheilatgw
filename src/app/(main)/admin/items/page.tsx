export const dynamic = "force-dynamic"
import { getProducts } from "@/lib/api"
import { deleteProduct } from "./action"
import Link from "next/link"

export default async function AdminItemsPage() {
  const products = await getProducts()

  return (
    <div className="p-30">
      <h1 className="text-xl font-semibold mb-4">Manage Products</h1>
        <Link href="/admin/items/add" className="bg-green-600 text-white px-4 py-2 rounded inline-block mb-4">
          Add Product
        </Link>
      <div className="space-y-3">
        {products.map((product: any) => (
          <div key={product.id} className="flex items-center justify-between border border-gray-200 shadow-sm p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <img src={product.image} className="w-12 h-12 object-contain"/>
              <p>{product.title}</p>
            </div>

            <form action={deleteProduct} className="flex gap-5">
                <Link href={`/admin/items/edit/${product.id}`} className="bg-blue-500 text-white px-3 py-1 rounded">
                    Edit
                </Link>
              <input type="hidden" name="id" value={product.id} />
              <button className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  )
}
