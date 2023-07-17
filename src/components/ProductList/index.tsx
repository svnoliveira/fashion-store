import { removeSpaces } from "@/services/utilities";
import { ProductCard } from "../Cards/ProductCard";
import { IProduct } from "@/stores/@productTypes";

interface IProductListProps {
  productName: string;
  allProducts: IProduct[];
}

export const ProductList = ({ productName, allProducts }: IProductListProps) => {

  const products = allProducts.filter((product) =>
    removeSpaces(product.name) !== productName)

  return (
    <section className="mt-24">
      <h1 className="text-title2-m md:text-title2 mb-16 text-center md:text-left">
        {productName === "default" ? "HIGHLIGHTED PRODUCTS" : "SEE ALSO"}
      </h1>
      <ul className="flex flex-row overflow-x-auto gap-5">
        {products.map((product) =>
          <ProductCard product={product}
            key={product.id} />)}
      </ul>
    </section>
  )
}