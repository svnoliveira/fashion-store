"use client"
import { useShoppingStore } from "@/stores/useShoppingStore"
import { CartCard } from "../Cards/CartCard"


export const ShoppingCart = () => {

  const { shoppingModalOpen, setShoppingModalOpen, shoppingList } = useShoppingStore((state) => state)
  const handlePropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  }


  return (
    <>
      {shoppingModalOpen &&
        <section onClick={() => setShoppingModalOpen(false)} className="fixed top-0 h-screen w-screen bg-white/40">
          <div onClick={(event) => handlePropagation(event)} className="relative max-w-[1728px] m-auto">
            <div className="absolute top-0 right-0 bg-white">
              <div>
                <h1>SHOPPING CART</h1>
                <button type="button" onClick={() => setShoppingModalOpen(false)}>X</button>
              </div>
              <ul>
                {shoppingList.length > 0 ? shoppingList.map((product) =>
                  <CartCard key={product.id} product={product} />)
                  :
                  <span>EMPTY</span>}
              </ul>
              <div>
                <span>TOTAL $ {(shoppingList.reduce((prev, current) => prev + (current.price * current.quantity), 0)).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}