import { HomeBanner } from "@/components/HomeBanner";
import { ProductList } from "@/components/ProductList";
import { getProducts } from "./data";
import { ShoppingCartButton } from "@/components/Fragments/ShoppingCartButton";
import { Header } from "@/components/Header";

const allProducts = await getProducts();

export default function Home() {
  return (
    <>
    <Header>
      <ShoppingCartButton />
    </Header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeBanner />
      <ProductList productName="default" allProducts={allProducts}/>
    </main>
    </>
  )
}