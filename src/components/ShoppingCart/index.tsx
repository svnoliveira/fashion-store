"use client"
import { useShoppingStore } from "@/stores/useShoppingStore"
import { CartCard } from "../Cards/CartCard"


export const ShoppingCart = () => {

  const { shoppingModalOpen, setShoppingModalOpen, shoppingList } = useShoppingStore((state) => state)

  return (
    <>
      {shoppingModalOpen &&
        <section>
          <div>
            <div>
              <h1>SHOPPING CART</h1>
              <button type="button" onClick={() => setShoppingModalOpen(false)}>X</button>
            </div>
            <ul>
              {shoppingList.length > 0 ? shoppingList.map((product) =>
                <CartCard key={product.id} product={product}/>)
                :
                <span>EMPTY</span>}
            </ul>
            <div>
              <span>TOTAL $ {(shoppingList.reduce((prev, current) => prev + (current.price * current.quantity),0)).toFixed(2)}</span>
            </div>
          </div>
        </section>
      }
    </>
  )
}