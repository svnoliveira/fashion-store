import { removeSpaces } from "@/services/utilities";
import { ProductCard } from "../Cards/ProductCard";

interface IProductListProps{
    productName: string;
    allProducts: IProduct[];
}

export const ProductList = ({ productName, allProducts }:IProductListProps) => {

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