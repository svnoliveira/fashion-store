import { AddtoShoppingCartButton } from "@/components/Fragments/AddToShoppingCartButton";
import { removeSpaces } from "@/services/utilities";
import { IProduct } from "@/stores/@productTypes";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProductCardProps) => {

  return (
    <li className="min-w-[271px] flex flex-col h-[592px]">
      <Image
        src={product.image}
        width={332}
        height={383}
        alt="Picture of clothes"
        className="rounded-[20px]"
      />
      <div className="h-full flex flex-col mt-16 justify-between">
        <h2 className="text-title4">{product.name}</h2>
        <span className="text-small-price">$ {Number(product.price).toFixed(2)}</span>
        <div className="flex gap-9 items-center">
          <AddtoShoppingCartButton product={product}>
            <MdOutlineAddShoppingCart size={36}/>
          </AddtoShoppingCartButton>
          <Link className="flex justify-center" 
          href={`/product/${removeSpaces(product.name)}`}>
            <span className="text-paragraph tracking-widest hover:underline decoration-solid decoration-black decoration-2">learn more</span>
          </Link>
        </div>
      </div>
    </li>
  )
}