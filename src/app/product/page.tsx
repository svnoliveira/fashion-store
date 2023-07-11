import { ProductDetail } from "@/components/ProductDetail";
import { ProductList } from "@/components/ProductList";

export default function Product() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductDetail />
      <ProductList />
    </main>
  )
}
