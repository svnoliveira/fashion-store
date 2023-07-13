"use client"

import { useUserStore } from "@/stores/useUserStore"

export const Toast = () => {
    const { error, message } = useUserStore((store) => store)

    return (
        <>
            {error && <span className="fixed w-2/5 text-center p-5 top-[5%] left-1/2 ml-[20%] bg-black text-white">
                {error}</span>}
            {message && <span className="fixed w-2/5 text-center p-5 top-[5%] left-1/2 ml-[20%] bg-gray text-black">
                {message}</span>}
        </>
    )
}