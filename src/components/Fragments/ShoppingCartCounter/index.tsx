"use client"

import { useShoppingStore } from "@/stores/useShoppingStore"

export const ShoppingCartCounter = () => {
    const shoppingList = useShoppingStore((state) => (state.shoppingList))
    return(
        shoppingList.length > 0? <span>{shoppingList.reduce((prev, current) => prev + current.quantity,0)}</span>: null
    )
}