"use client"

import { useProductStore } from "@/stores/useProductStore"
import { useUserStore } from "@/stores/useUserStore"

export const Toast = () => {
    const { error, message } = useUserStore((store) => store)
    const productMessage = useProductStore((store) => store.message)
    const productError = useProductStore((store) => store.error)

    return (
        <>
            {error || productError && <span className="fixed w-2/5 text-center p-5 top-[5%] left-1/2 ml-[20%] bg-black text-white">
                {error}</span>}
            {message || productMessage && <span className="fixed w-2/5 text-center p-5 top-[5%] left-1/2 ml-[20%] bg-gray text-black">
                {message}</span>}
        </>
    )
}