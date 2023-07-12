"use client"

import { RiShoppingCart2Line } from "react-icons/ri"
import { ShoppingCartCounter } from "../ShoppingCartCounter"
import { useShoppingStore } from "@/stores/useShoppingStore"


export const ShoppingCartButton = () => {

    const setShoppingModalOpen = useShoppingStore((state) => state.setShoppingModalOpen)
    
    return (
        <div onClick={() => setShoppingModalOpen(true)}>
            <ShoppingCartCounter />
            <RiShoppingCart2Line fill="000000" size={40} />
        </div>
    )
}