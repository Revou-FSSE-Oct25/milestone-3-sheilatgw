import { getProduct } from "@/lib/api"
import { updateProduct } from "../../action"

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProduct(id)

  return (
    <div className="p-30 max-w-3xl mx-auto bg-white shadow rounded-xl ">
      <h1 className="text-xl font-semibold mb-4">Edit Product</h1>

      <form action={updateProduct} className="space-y-4">
        <input type="hidden" name="id" value={product.id} />
        <input name="title" defaultValue={product.title} className="w-full border rounded-lg px-3 py-2"/>
        <input name="price" type="number" defaultValue={product.price} className="w-full border rounded-lg px-3 py-2"/>
        <textarea name="description" defaultValue={product.description} className="w-full border rounded-lg px-3 py-2"/>
        <button className="bg-blue-800 text-white px-6 py-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  )
}
