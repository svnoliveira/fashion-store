"use client"
import { CartCard } from "../Cards/CartCard"

export const ShoppingCart = () => {
    return(
        <section>
            <div>
                <h1>SHOPPING CART</h1>
                <ul>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </ul>
                <div>
                    <span>TOTAL $ 810,00</span>
                </div>
            </div>
        </section>
    )
}