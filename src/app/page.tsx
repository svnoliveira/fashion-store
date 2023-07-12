import { HomeBanner } from "@/components/HomeBanner";
import { ProductList } from "@/components/ProductList";
import { getProducts } from "./data";

const allProducts = await getProducts();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeBanner />
      <ProductList productName="default" allProducts={allProducts}/>
    </main>
  )
}