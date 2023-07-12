import { removeSpaces } from "@/services/utilities";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProductCardProps) => {

  return (
    <li className="bg-white">
      <Image
        src={product.image}
        width={250}
        height={250}
        alt="Picture of clothes"
      />
      <div>
        <h2>{product.name}</h2>
        <span>{product.price}</span>
        <div className="bg-black text-white">
          <MdOutlineAddShoppingCart />
          <Link href={`/product/${removeSpaces(product.name)}`}>
            <span>learn more</span>
          </Link>
        </div>
      </div>
    </li>
  )
}