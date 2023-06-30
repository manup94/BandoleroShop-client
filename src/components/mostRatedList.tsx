import ProductCard from "./productCard"

function mostRatedList({ products }: any) {
    return (
        <ul className="grid grid-cols-3 gap-4">
            {
                products?.map((product: any) => {
                    return <ProductCard product={product} />
                })
            }
        </ul>
    )
}

export default mostRatedList