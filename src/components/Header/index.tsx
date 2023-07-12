import Image from "next/image"
import { ShoppingCartButton } from "../Fragments/ShoppingCartButton"

export const Header = () => {
    return (
        <header className="bg-white">
            <Image
                src="/fashion-store.svg"
                width={500}
                height={500}
                alt="Fashion store logo"
            />
            <ShoppingCartButton />
        </header>
    )
}