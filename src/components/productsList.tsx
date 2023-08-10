import { Product } from "@/app/types/product"
import ProductCard from "./productCard"


function productsList({ products }: { products: Product[] }) {

    return (
        <ul className="grid grid-cols-3  gap-4">
            {
                products?.map((product: Product) => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </ul>
    )
}

export default productsList