import { getProducts } from "@/lib/api"
import { getSession } from "@/lib/auth";
import ProductCard from "@/components/ProductCard"
import Hero from "@/components/hero"
import { Product } from "@/types/product"

export default async function Home() {
  const products: Product[] = await getProducts()
  const user = await getSession();


  return (
    <div>
      <Hero />
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase">Our Products</h1>
          <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, amet.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} user={user}/>
      ))}
    </div>
      </div>
    </div>
  )
}

