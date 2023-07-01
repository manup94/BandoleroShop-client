import { Product } from "@/app/types/product"
import ProductCard from "./productCard"


function MostRatedList({ products }: { products: Product[] }) {
    return (
        <ul className="grid grid-cols-3 gap-4">
            {
                products?.map((product) => {
                    return <ProductCard product={product} />
                })
            }
        </ul>
    )
}

export default MostRatedList