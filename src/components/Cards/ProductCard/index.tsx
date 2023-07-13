import { AddtoShoppingCartButton } from "@/components/Fragments/AddToShoppingCartButton";
import { removeSpaces, validateImage } from "@/services/utilities";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProductCardProps) => {

  return (
    <li>
      <Image
        src={validateImage(product.image)}
        width={250}
        height={250}
        alt="Picture of clothes"
      />
      <div>
        <h2>{product.name}</h2>
        <span>{Number(product.price).toFixed(2)}</span>
        <div>
          <AddtoShoppingCartButton product={product}>
            <MdOutlineAddShoppingCart />
          </AddtoShoppingCartButton>
          <Link href={`/product/${removeSpaces(product.name)}`}>
            <span>learn more</span>
          </Link>
        </div>
      </div>
    </li>
  )
}