import { Product } from "@/app/types/product"
import Link from "next/link"
import WhisListIcon from "./whisListIcon"
import AddCartIcon from "./addCartIcon"

function ProductCard({ product }: { product: Product }) {

    const mainImg = product.attributes.mainImg.data.attributes.formats.medium.url

    return (
        < >
            <div key={product.id} className="max-w-xs m-auto rounded overflow-hidden shadow-lg md:w-full mb-4">
                <Link href={`/${product.attributes.slug}`} className="text-black">
                    <div className="aspect-w-4 aspect-h-5">
                        <img className="object-cover" src={mainImg} alt="img" />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-base md:text-m mb-2">{product.attributes.title}</div>
                        <p className="text-gray-700 text-sm md:text-base">
                            Precio: {product.attributes.price} EUR
                        </p>
                    </div>
                </Link>
                <div className="px-6 flex gap-3 md:gap-5 py-4">
                    <AddCartIcon productId={product.id} />
                    <WhisListIcon productId={product.id} />
                </div>
            </div>

        </>
    )
}

export default ProductCard