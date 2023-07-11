import { ProductCard } from "../Cards/ProductCard"

export const ProductList = () => {
    return(
        <section>
            <h1>SEE ALSO</h1>
            <ul>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ul>
        </section>
    )
}