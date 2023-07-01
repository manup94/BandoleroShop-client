import { Product } from "@/app/types/product"

function ProductCard({ product }: { product: Product }) {
    return (
        <li key={product.id}>

            <div className="max-w-sm rounded overflow-hidden shadow-lg h-[30rem] ">
                <img className="w-full object-contain h-[16rem] " src={product.image} alt={'img'} />
                <div className="px-6 py-4 ">
                    <div className="font-bold text-m mb-2">{product.title}</div>
                    <p className="text-gray-700 text-base mb-2">Categoria: {product.category}</p>
                    <p className="text-gray-700 text-base">
                        Precio: {product.price} EUR
                    </p>
                </div>
                <div className="px-6 py-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </li>
    )
}

export default ProductCard