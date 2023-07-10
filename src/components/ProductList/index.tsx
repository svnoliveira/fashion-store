import { ProductCard } from "../ProductCard"

export const ProductList = () => {
    return(
        <section>
            <h1>VEJA TAMBÉM</h1>
            <ul>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ul>
        </section>
    )
}