import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { Dropdown } from "semantic-ui-react";

export default function Basket(props) {

    const { products } = props
    const { changeQuantityItem, deleteItem } = useCart()

    const options = Array.from({ length: 20 }, (_, index) => {
        const number = index + 1
        return { key: number, text: String(number), value: number }
    })

    return (
        <div>
            <h2 className="mb-5 text-center">Cesta</h2>

            {products?.map((product, index) => (
                <div key={index} className="flex flex-col p-4 bg-white shadow-md rounded mb-4">
                    <Link href={`/${product?.attributes.slug}`} className="text-black">
                        <div className="flex items-center">
                            <img src={product?.attributes.images.data[0].attributes?.url} alt='product-img' className="w-16 h-16 mr-3 object-contain" />
                            <div className="flex flex-col justify-start">
                                <h3 className="text-lg font-semibold">{product?.attributes.title}</h3>
                                <p className="text-gray-600 mt-1">{product?.attributes.category.data.attributes?.title}</p>
                                <p className="text-gray-600 mt-1">
                                    {product?.attributes.price}€{' '}
                                    {product.attributes.discount && (
                                        <span>
                                            - {product.attributes.discount}% ={' '}
                                            <span className="text-red-600">
                                                {product?.attributes.price - (product?.attributes.price * product.attributes.discount) / 100}€
                                            </span>
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </Link>

                    <div className="flex justify-between items-center mt-3">
                        <Dropdown
                            className="number text-black"
                            options={options}
                            selection
                            value={product.quantity}
                            compact
                            onChange={(_, data) => changeQuantityItem(product.id, data.value)}
                        />

                        <button
                            onClick={() => deleteItem(product.id)}
                            className="w-8 h-8 text-red-600 hover:text-red-800"
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
                </div>
            ))}
        </div>

        // <div>
        //     <h2 className="mb-5">Cesta</h2>

        //     {products?.map((product, index) => (
        //         <div key={index} className="flex items-center justify-between p-4 bg-white shadow-md rounded">
        //             <div className="flex  space-x-4">
        //                 <Link href={`/${product?.attributes.slug}`} className="text-black">
        //                     <div className="flex">
        //                         <img src={product?.attributes.images.data[0].attributes?.url} alt='product-img' className="w-16 h-16 mr-5 object-contain" />
        //                         <div className="flex-col justify-start text-left">
        //                             <h3 className=" text-lg font-semibold">{product?.attributes.title}</h3>
        //                             <p className="text-gray-600 m-2">{product?.attributes.category.data.attributes?.title}</p>
        //                             <p className="text-gray-600 m-2">{product?.attributes.price}€ {product.attributes.discount && <span>- {product.attributes.discount}% = <span className="text-red-600"> {product?.attributes.price - product?.attributes.price * product.attributes.discount / 100}€</span></span>}</p>

        //                         </div>

        //                     </div>
        //                 </Link>

        //                 <div>
        //                     <Dropdown
        //                         className="number text-black"
        //                         options={options}
        //                         selection
        //                         value={product.quantity}
        //                         compact
        //                         onChange={(_, data) => changeQuantityItem(product.id, data.value)}
        //                     />

        //                 </div>
        //                 <button
        //                     onClick={() => deleteItem(product.id)}
        //                     className=" items-center justify-center w-8 h-8 text-red-600 hover:text-red-800"
        //                 >
        //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        //                         <path
        //                             fillRule="evenodd"
        //                             d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 1 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
        //                             clipRule="evenodd"
        //                         />
        //                     </svg>
        //                 </button>
        //             </div>
        //         </div>

        //     ))}
        // </div>
    )
}
