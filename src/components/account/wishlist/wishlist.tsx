
import { WishList } from "@/api/wishList"
import { useAuth } from "@/hooks/useAuth"
import Link from "next/link"
import { useEffect, useState } from "react"

const wishlistCtrl = new WishList()

export default function Wishlist() {
    const { user } = useAuth()
    const [wishList, setWishlist] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await wishlistCtrl.getAll(user.id)
                setWishlist(response)

            } catch (error) {
                console.log(error);
            }
        })()

    }, [user.id])


    const updateWishlist = async () => {
        try {
            const response = await wishlistCtrl.getAll(user.id)
            setWishlist(response)
        } catch (error) {
            console.log(error);
        }
    }

    const deleteWishlist = async (id) => {
        try {
            await wishlistCtrl.delete(id)
            updateWishlist()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        wishList && wishList.length > 0 ?
            <div className="flex flex-col space-y-4">
                {wishList?.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white shadow-md rounded">
                        <Link href={`/${product?.attributes.product.data.attributes.slug}`}>
                            <div className="flex items-center space-x-4">
                                <img src={product?.attributes.product.data.attributes.images.data[0].attributes?.url} alt='product-img' className="w-16 h-16 object-contain" />
                                <div>
                                    <h3 className="text-lg font-semibold">{product?.attributes.product.data.attributes.title}</h3>
                                    <p className="text-gray-600">{product?.attributes.product.data.attributes.price}€</p>
                                </div>
                            </div>
                        </Link>
                        <button
                            onClick={() => deleteWishlist(product.id)}
                            className="flex items-center justify-center w-8 h-8 text-red-600 hover:text-red-800"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 1 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
            :
            'Aun no hay productos en tu lista de deseos.'
    )
}
