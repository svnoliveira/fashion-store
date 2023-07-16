"use client"
import { useProductStore } from "@/stores/useProductStore"
import { AdminProductCard } from "../Cards/AdminProductCard"

export const AdminProductList = () => {
  const { products, loading } = useProductStore((store) => store);
  return (
    
    <ul className="flex flex-wrap justify-between gap-6">
      {loading ? <span>LOADING</span> :
        products.map(product => {
          return (
            <AdminProductCard key={product.id} product={product} />
          )
        })
      }
    </ul>
  )
}