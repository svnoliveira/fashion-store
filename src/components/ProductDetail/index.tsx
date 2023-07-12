import { removeSpaces } from "@/services/utilities";
import Image from "next/image";
import { getProducts } from "./data";

const allProducts = await getProducts()

interface IProductDetailProps{
    productName: string;
}

export const ProductDetail = ({ productName }:IProductDetailProps) => {
    const currentProduct = allProducts.find((product) => removeSpaces(product.name) === productName)
    return (
        <section>
            {currentProduct? 
            <>
            <Image 
            src={currentProduct.image}
            height={500}
            width={500}
            alt="Product image"
            />
            <div>
                <h2>{currentProduct.name}</h2>
                <h1>$ {currentProduct.price.toFixed(2)}</h1>
                <p>{currentProduct.description}</p>
                <button>
                    <img src="" alt="cart-icon" />
                    <span>ADD TO SHOPPING CART</span>
                </button>
            </div>
            </>
            : <p>Product not found</p>}
        </section>
    )
}