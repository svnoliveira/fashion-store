import { removeSpaces } from "@/services/utilities";
import { ProductCard } from "../Cards/ProductCard";
import { getProducts } from "./data";

export const allProducts = await getProducts();

interface IProductListProps{
    productName: string;
}

export const ProductList = ({ productName }:IProductListProps) => {

    const products = allProducts.filter((product) => 
    removeSpaces(product.name) !== productName)

    return(
        <section className="bg-white">
            <h1 className="text-black">SEE ALSO</h1>
            <ul className="text-black">
                {products.map((product) => 
                <ProductCard product={product}
                key={product.id}/>)}
            </ul>
        </section>
    )
}