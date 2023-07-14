"use client"
import { useProductStore } from "@/stores/useProductStore"
import { AdminProductCard } from "../Cards/AdminProductCard"
import { useUserStore } from "@/stores/useUserStore"

export const AdminProductList = () => {
    const { userData, loading } = useUserStore((store) => store)
    const user = userData?.user
    const { products } = useProductStore((store) => store)
    return(
        
        <ul>
            {user &&
            <>
                {loading? <span>LOADING</span> :
                products.map((product) => {
                    <AdminProductCard key={product.id} product={product}/>  
                })}
            </>
            }
        </ul>
    )
}