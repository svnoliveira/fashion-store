import { removeSpaces } from "@/services/utilities";
import Image from "next/image";
import { IProduct } from "@/stores/@productTypes";
import { ExtendedAddButton } from "../Fragments/ExtendedAddButton";

interface IProductDetailProps {
  productName: string;
  allProducts: IProduct[];
}

export const ProductDetail = ({ productName, allProducts }: IProductDetailProps) => {
  const currentProduct = allProducts.find((product) => removeSpaces(product.name) === productName)
  return (
    <section>
      {currentProduct ?
        <>
          <div className="mt-[88px] mb-12 text-center">
            <span className="text-menu">Home {">"} {currentProduct.name}</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="overflow-hidden flex items-center justify-center rounded-[20px] h-fit lg:h-[669px] sm:min-w-[580px] m-auto lg:m-0 lg:ml-[8%]">
              <Image
                src={currentProduct.image}
                height={669}
                width={580}
                alt="Product image"
                priority={true}
                className="min-h-[400px] scale-110 object-cover"
              />
            </div>
            <div className="h-[386px] flex flex-col justify-between text-left max-w-[580px] m-auto">
              <h2 className="text-title3.5">{currentProduct?.name}</h2>
              <h1 className="text-big-price">$ {Number(currentProduct.price).toFixed(2)}</h1>
              <p className="h-40 overflow-y-auto text-paragraph">{currentProduct?.description}</p>
              <ExtendedAddButton currentProduct={currentProduct}/>
            </div>
          </div>
        </> :
        <p>Product not found</p>}
    </section>
  )
}