import { DateTime } from "luxon"
import { useState } from "react"
import { Image } from "semantic-ui-react"
import { OrderModal } from "./orderModal"
import Link from "next/link"



export default function OrdersList(props: any) {

    const { order } = props


    const createdAt = new Date(order.attributes.createdAt).toISOString()
    const [showModal, setShowModal] = useState(false)
    const products = order.attributes.products
    const address = order.attributes.addressShipping

    const openCloseModal = () => setShowModal((prevState) => !prevState)

    const getTotalProducts = () => {
        let total = 0
        products.forEach(product => {
            total += product.quantity
        });
        return total
    }

    return (

        <>
            <div className="flex justify-between"
                onClick={openCloseModal}>
                <div className=" ">
                    <p>{DateTime.fromISO(createdAt, { locale: 'es' }).toFormat('dd/MM/yyyy')}</p>
                    <p>{getTotalProducts()} productos</p>
                </div>
                <div>
                    <p>{order.attributes.totalPayment}€</p>
                </div>
            </div>
            <OrderModal show={showModal} onClose={openCloseModal} title={'Información de pedido'}>
                <div className="flex">
                    <div>

                        <h2>Productos</h2>
                        {
                            products?.map((product) => {
                                return (

                                    <div className="flex ">

                                        <Link href={`/${product?.attributes.slug}`} >
                                            <div className="flex mb-3 mr-5">
                                                <img src={product?.attributes.images.data[0].attributes?.url} alt='product-img' className="w-16 h-16 mr-5 object-contain" />
                                                <div className="flex-col justify-start text-left">
                                                    <h3 className=" text-lg font-semibold">{product?.attributes.title}</h3>
                                                    <p className="text-gray-600 m-2">{product?.attributes.category.data.attributes?.title}</p>
                                                    <p className="text-gray-600 m-2">{product?.attributes.price}€ {product.attributes.discount &&
                                                        <span>- {product.attributes.discount}% =
                                                            <span className="text-red-600"> {product?.attributes.price - product?.attributes.price * product.attributes.discount / 100}€</span>
                                                        </span>}  <span>x {product.quantity}</span></p>

                                                </div>

                                            </div>
                                        </Link>



                                    </div>

                                )
                            })
                        }
                    </div>

                    <div className="flex-col flex justify-between">
                        <div className="mb-5">
                            <h2>Dirección</h2>
                            <div
                                className={`p-5 border-2 mt-2 mb-2 rounded-md border-black`} key={address.id}>
                                <p className="font-bold">{address.attributes.name} ({address.attributes.title})</p>
                                <p>{address.attributes.address}, {address.attributes.postal_code}, {" "}
                                    {address.attributes.state}, {address.attributes.city}</p>
                            </div>

                        </div>

                        <p className="font-bold">Total {order.attributes.totalPayment}€</p>

                    </div>
                </div>

            </OrderModal>
        </>



    )
}
