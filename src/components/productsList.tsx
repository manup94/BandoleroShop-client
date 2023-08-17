import { Product } from "@/app/types/product"
import ProductCard from "./productCard"


function productsList({ products }: { products: Product[] }) {

    return (
        <ul className="grid grid-cols-2  md:grid-cols-3 gap-5  ">
            {
                products?.map((product: Product) => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </ul>
    )
}

export default productsList