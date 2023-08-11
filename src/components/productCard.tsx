import { Product } from "@/app/types/product"
import Link from "next/link"
import WhisListIcon from "./whisListIcon"

function ProductCard({ product }: { product: Product }) {

    const mainImg = product.attributes.mainImg.data.attributes.formats.medium.url

    return (
        < >

            <div className="max-w-sm rounded overflow-hidden shadow-lg h-[30rem] ">
                <Link href={`/${product.attributes.slug}`}>
                    <img className="w-full object-contain h-[16rem] " src={mainImg} alt={'img'} />
                    <div className="px-6 py-4 ">
                        <div className="font-bold text-m mb-2">{product.attributes.title}</div>
                        <p className="text-gray-700 text-base">
                            Precio: {product.attributes.price} EUR
                        </p>
                    </div>
                </Link>
                <div className="px-6 flex gap-5 py-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                    <WhisListIcon productId={product.id} />
                </div>
            </div>
        </>
    )
}

export default ProductCard