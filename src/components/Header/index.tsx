import Image from "next/image"
import { RiShoppingCart2Line } from "react-icons/ri"

export const Header = () => {
    return (
        <header className="bg-white">
            <Image
                src="/fashion-store.svg"
                width={500}
                height={500}
                alt="Fashion store logo"
            />
            <RiShoppingCart2Line fill="000000" size={40}/>
        </header>
    )
}