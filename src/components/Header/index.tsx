import Image from "next/image"

interface IHeaderProps{
    children: React.ReactNode;
}

export const Header = ({children} : IHeaderProps) => {
    return (
        <header className="bg-white">
            <Image
                src="/fashion-store.svg"
                width={500}
                height={500}
                alt="Fashion store logo"
            />
            {children}
        </header>
    )
}