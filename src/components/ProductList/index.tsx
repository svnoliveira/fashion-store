import { ProductCard } from "../Cards/ProductCard"
import { getProducts } from "./data"

const products = await getProducts()

export const ProductList = () => {

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