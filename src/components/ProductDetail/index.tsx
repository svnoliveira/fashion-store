import { removeSpaces, validateImage } from "@/services/utilities";
import Image from "next/image";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AddtoShoppingCartButton } from "../Fragments/AddToShoppingCartButton";

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
                    <Image
                        src={validateImage(currentProduct.image)}
                        height={500}
                        width={500}
                        alt="Product image"
                    />
                    <div>
                        <h2>{currentProduct?.name}</h2>
                        <h1>$ {currentProduct?.price.toFixed(2)}</h1>
                        <p>{currentProduct?.description}</p>
                        <AddtoShoppingCartButton product={currentProduct}>
                            <MdOutlineAddShoppingCart />
                            <span>ADD TO SHOPPING CART</span>
                        </AddtoShoppingCartButton>
                    </div>
                </> :
                <p>Product not found</p>}
        </section>
    )
}