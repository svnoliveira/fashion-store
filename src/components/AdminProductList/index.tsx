"use client"
import { useProductStore } from "@/stores/useProductStore"
import { AdminProductCard } from "../Cards/AdminProductCard"
// import { useUserStore } from "@/stores/useUserStore"

export const AdminProductList = () => {
  // const user = useUserStore((store) => store.userData?.user);
  const { products, loading } = useProductStore((store) => store);
  return (

    <ul>
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