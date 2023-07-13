import { getProducts } from "@/app/data";
import { ShoppingCartButton } from "@/components/Fragments/ShoppingCartButton";
import { Header } from "@/components/Header";
import { ProductDetail } from "@/components/ProductDetail";
import { ProductList } from "@/components/ProductList";

interface IProductParams{
  params: {
    productName: string;
  };
}

const allProducts = await getProducts();

export default function Product({ params }:IProductParams) {
  const { productName }  = params

  return (
    <>
    <Header>
      <ShoppingCartButton />
    </Header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductDetail productName={productName} allProducts={allProducts}/>
      <ProductList productName={productName} allProducts={allProducts}/>
    </main>
    </>
  )
}
