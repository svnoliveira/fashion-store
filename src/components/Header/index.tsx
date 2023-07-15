import Image from "next/image"
import Link from "next/link";

interface IHeaderProps{
    children: React.ReactNode;
}

export const Header = ({children} : IHeaderProps) => {
    return (
        <header className="bg-white">
            <Link href={"/"}>
            <Image
                src="/fashion-store.svg"
                width={500}
                height={500}
                alt="Fashion store logo"
            />
            </Link>
            {children}
        </header>
    )
}