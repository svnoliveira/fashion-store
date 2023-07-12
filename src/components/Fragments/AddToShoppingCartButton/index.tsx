"use client"

import { useShoppingStore } from "@/stores/useShoppingStore";
import { MouseEvent } from "react";

interface IAddtoShoppingCartButtonProps{
    children: React.ReactNode;
    product: IProduct;
}

export const AddtoShoppingCartButton = ({children, product}:IAddtoShoppingCartButtonProps) => {

    const { addToCart } = useShoppingStore((store) => store)

    const handleAddClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, product: IProduct) => {
        event.preventDefault();
        addToCart({product})
    }

    return(
        <button onClick={(event) => handleAddClick(event, product)}>
            {children}
        </button>
    )
}