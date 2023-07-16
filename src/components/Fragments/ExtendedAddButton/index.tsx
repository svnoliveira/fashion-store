"use client"
import { IProduct } from "@/stores/@productTypes"
import { MdOutlineAddShoppingCart } from "react-icons/md"
import { AddtoShoppingCartButton } from "../AddToShoppingCartButton"
import { useShoppingStore } from "@/stores/useShoppingStore"
import { MouseEvent } from "react";

interface IExtendedAddButtonProps{
currentProduct: IProduct
}

export const ExtendedAddButton = ({currentProduct}:IExtendedAddButtonProps) => {

    const { addToCart } = useShoppingStore((store) => store)

    const handleAddClick = (event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, product: IProduct) => {
        event.preventDefault();
        addToCart({product})
    }
    return (
        <div className="flex bg-black text-white items-center w-fit pr-4 hover:opacity-50">
            <AddtoShoppingCartButton product={currentProduct}>
                <MdOutlineAddShoppingCart size={31} />
            </AddtoShoppingCartButton>
            <span onClick={(event) => handleAddClick(event, currentProduct)} className="cursor-pointer">ADD TO SHOPPING CART</span>
        </div>
    )
}