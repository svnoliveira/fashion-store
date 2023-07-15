"use client"

import { IShoppingProduct } from "@/stores/@shoppingTypes";
import { useShoppingStore } from "@/stores/useShoppingStore";
import Image from "next/image";
import { MouseEvent } from "react";

interface ICartCardProps{
    product: IShoppingProduct;
}

export const CartCard = ({product}:ICartCardProps) => {

    const removeFromCart = useShoppingStore((store) => store.removeFromCart)

    const handleClick = (id: number, event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        event.preventDefault();
        const productId = id;
        removeFromCart({productId})
    }

    return (
        <li>
            <Image 
            src={product.image}
            width={150}
            height={150}
            alt="Miniature of the product"
            />
            <div>
                <h2>{product.name}</h2>
                <span>$ {Number(product.price).toFixed(2)} </span>
            </div>
            <div>{product.quantity}</div>
            <button onClick={(event) => handleClick(product.id, event)}>-</button>
        </li>
    )
}