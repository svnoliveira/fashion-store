"use client"
import { IProduct } from "@/stores/@productTypes";
import { useProductStore } from "@/stores/useProductStore";
import { useUserStore } from "@/stores/useUserStore";
import Image from "next/image";
import { BsPen } from "react-icons/bs";
import { TfiTrash } from "react-icons/tfi";

interface IAdminProductCardProps {
  product: IProduct;
}

export const AdminProductCard = ({ product }: IAdminProductCardProps) => {

  const token = useUserStore((store) => store.userData?.accessToken)
  const { deleteProduct, setAdminModalOpen, setEditingProduct } = useProductStore((store) => store)

  const handleEditClick = (productId: number) => {
    setAdminModalOpen(true)
    setEditingProduct(productId)
  }

  return (
    <li>
      <Image
        src={product.image}
        width={50}
        height={50}
        alt="Miniature of the product"
      />
      <div>
        <div>
          <h2>{product.name}</h2>
          <span>$ {Number(product.price).toFixed(2)}</span>
        </div>
        <div>
          <button onClick={() => handleEditClick(product.id)}>
            <BsPen />
          </button>

          <button onClick={() =>
            deleteProduct(
              {
                productId: product.id,
                token: token!
              }
            )}>
            <TfiTrash />
          </button>

        </div>
      </div>
    </li>
  )
}