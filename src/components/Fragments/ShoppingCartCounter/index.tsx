"use client"

import { useShoppingStore } from "@/stores/useShoppingStore"

export const ShoppingCartCounter = () => {
    const shoppingList = useShoppingStore((state) => (state.shoppingList))
    return(
        shoppingList.length > 0? 
        <span className="absolute top--2 left-[35%] min-w-[30px] text-center font-bold bg-grey border-[2px] border-black rounded-full">
            {shoppingList.reduce((prev, current) => prev + current.quantity,0)}
        </span>: null
    )
}