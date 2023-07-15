"use client"

import { IShoppingProduct } from "@/stores/@shoppingTypes";
import { useShoppingStore } from "@/stores/useShoppingStore";
import Image from "next/image";
import { MouseEvent } from "react";
import { TfiMinus } from "react-icons/tfi";

interface ICartCardProps {
    product: IShoppingProduct;
}

export const CartCard = ({ product }: ICartCardProps) => {

    const removeFromCart = useShoppingStore((store) => store.removeFromCart)

    const handleClick = (id: number, event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        event.preventDefault();
        const productId = id;
        removeFromCart({ productId })
    }

    return (
        <li className="flex justify-between">
            <div className="flex gap-7">
                <Image
                    src={product.image}
                    width={80}
                    height={80}
                    alt="Miniature of the product"
                    className="rounded-xl w-20 h-20 object-fill"
                />
                <div className="flex flex-col justify-around mr-2">
                    <h2 className="text-title4">{product.name}</h2>
                    <span className="text-small-price">$ {Number(product.price).toFixed(2)} </span>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row items-center gap-4">
                <div className="text-small-price md:text-big-price">{product.quantity}</div>
                <button onClick={(event) => handleClick(product.id, event)}
                ><TfiMinus size={36}/></button>
            </div>
        </li>
    )
}