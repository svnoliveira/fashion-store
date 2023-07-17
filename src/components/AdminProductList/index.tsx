"use client"
import { useProductStore } from "@/stores/useProductStore"
import { AdminProductCard } from "../Cards/AdminProductCard"
import { Loading } from "../Fragments/Loading";

export const AdminProductList = () => {
  const { products, loading } = useProductStore((store) => store);
  return (
    
    <ul className="flex flex-wrap justify-between gap-6">
      {loading ? <Loading /> :
        products.map(product => {
          return (
            <AdminProductCard key={product.id} product={product} />
          )
        })
      }
    </ul>
  )
}