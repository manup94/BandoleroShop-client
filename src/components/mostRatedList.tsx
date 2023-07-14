import { Product } from "@/app/types/product"
import ProductCard from "./productCard"


function MostRatedList({ products }) {
    console.log(products);
    return (
        <ul className="grid grid-cols-3 gap-4">
            {
                products?.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </ul>
    )
}

export default MostRatedList