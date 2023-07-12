"use client"
import { ProductDetail } from "@/components/ProductDetail";
import { ProductList } from "@/components/ProductList";

interface IProductParams{
  params: {
    productName: string;
  };
}

export default function Product({ params }:IProductParams) {
  const { productName }  = params

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductDetail productName={productName}/>
      <ProductList productName={productName}/>
    </main>
  )
}
