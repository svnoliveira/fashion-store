import { removeSpaces } from "@/services/utilities";
import { ProductCard } from "../Cards/ProductCard";
import { IProduct } from "@/stores/@productTypes";

interface IProductListProps{
    productName: string;
    allProducts: IProduct[];
}

export const ProductList = ({ productName, allProducts }:IProductListProps) => {

    const products = allProducts.filter((product) => 
    removeSpaces(product.name) !== productName)

    return(
        <section>
            <h1>SEE ALSO</h1>
            <ul>
                {products.map((product) => 
                <ProductCard product={product}
                key={product.id}/>)}
            </ul>
        </section>
    )
}