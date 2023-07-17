"use client"
import { useShoppingStore } from "@/stores/useShoppingStore"
import { CartCard } from "../Cards/CartCard"
import { TfiClose } from "react-icons/tfi"

export const ShoppingCart = () => {

  const { shoppingModalOpen, setShoppingModalOpen, shoppingList } = useShoppingStore((state) => state)
  const handlePropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  }


  return (
    <>
      {shoppingModalOpen &&
        <section className="fixed top-0 h-screen w-screen bg-white/40"
        onClick={() => setShoppingModalOpen(false)}>
          <div className="relative max-w-[1728px] m-auto"
          onClick={(event) => handlePropagation(event)}>
            <div className="flex flex-col justify-between absolute top-9 md:top-0 m-auto right-[4%] md:right-0 w-11/12 md:w-[512px] h-[80vh] px-3 md:px-10 py-8 bg-white shadow-cart">
              <div>
                <div className="flex justify-between">
                  <h1 className="text-title3">SHOPPING CART</h1>

                  <button className="absolute top-0 md:top-[25px] right-0 md:right-[15px]" type="button" 
                  onClick={() => setShoppingModalOpen(false)} >
                    <TfiClose size={27}/>
                  </button>

                </div>

                <ul className="flex flex-col gap-10 overflow-y-auto mt-10">
                  {shoppingList.length > 0 ? shoppingList.map((product) =>
                    <CartCard key={product.id} product={product} />)
                    :
                    <span className="text-small-price text-center">EMPTY</span>}
                </ul>
              </div>
              <div>
                
                <span className="text-small-price">TOTAL</span>
                <span className="text-bread-bold"
                > $ {(shoppingList.reduce((prev, current) => prev + (current.price * current.quantity), 0)).toFixed(2)}
                </span>

              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}