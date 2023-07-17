"use client"

import { useProductStore } from "@/stores/useProductStore"
import { useUserStore } from "@/stores/useUserStore"

export const Toast = () => {
  const { error, message } = useUserStore((store) => store)
  const productMessage = useProductStore((store) => store.message)
  const productError = useProductStore((store) => store.error)

  return (
    <>
      {error && <span className="fixed min-w-[50%] lg:min-w-[20%] text-small-price text-center p-5 bottom-[17%] left-1/2 translate-x-[-50%] bg-black text-white border-2 border-white">
        {error}</span>}
      {message && <span className="fixed min-w-[50%] lg:min-w-[20%] text-small-price text-center p-5 bottom-[17%] left-1/2 translate-x-[-50%] bg-grey text-black border-2 border-black">
        {message}</span>}
      {productError && <span className="fixed min-w-[50%] lg:min-w-[20%] text-small-price text-center p-5 bottom-[17%] left-1/2 translate-x-[-50%] bg-black text-white border-2 border-white">
        {productError}</span>}
      {productMessage && <span className="fixed min-w-[50%] lg:min-w-[20%] text-small-price text-center p-5 bottom-[17%] left-1/2 translate-x-[-50%] bg-grey text-black border-2 border-black">
        {productMessage}</span>}
    </>
  )
}