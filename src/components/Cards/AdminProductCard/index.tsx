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
    <li className="flex gap-7 items-center w-full md:w-[48%] h-[210px]">
      <Image
        src={product.image}
        width={180}
        height={210}
        alt="Miniature of the product"
        className="w-[180] h-[210] rounded-[20px]"
      />
      <div className="w-full flex-col text-center md:text-left md:flex-row flex justify-between items-center gap-3">
        <div className="flex flex-col gap-6">
          <h2 className="text-title4"
          >{product.name}</h2>
          <span className="text-small-price">$ {Number(product.price).toFixed(2)}</span>
        </div>
        <div className="flex gap-4">
          <button onClick={() => handleEditClick(product.id)}>
            <BsPen size={36}/>
          </button>

          <button onClick={() =>
            deleteProduct(
              {
                productId: product.id,
                token: token!
              }
            )}>
            <TfiTrash size={36}/>
          </button>

        </div>
      </div>
    </li>
  )
}