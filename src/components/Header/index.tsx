import { getProducts } from "@/app/data";
import Image from "next/image"
import Link from "next/link";

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: IHeaderProps) => {

  const headerStyle = children ? "bg-white fixed top-0 z-30 w-screen" : 
  "bg-white w-screen flex justify-center"

  return (
    <header className={headerStyle}>
      <div className="max-w-[1448px] m-auto flex justify-between items-center min-h-[29px] md:min-h-[48px] px-3">
        <Link href={"/"} onClick={getProducts}>
          <Image className="h-auto"
            src="/fashion-store.svg"
            width={166}
            height={24}
            alt="Fashion store logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
          />
        </Link>
        {children}
      </div>
    </header>
  )
}