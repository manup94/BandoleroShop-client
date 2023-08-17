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

            <div className="flex flex-col justify-between items-center sm:flex-row sm:justify-between" onClick={openCloseModal}>
                <div className="text-center sm:text-left">
                    <p>{DateTime.fromISO(createdAt, { locale: 'es' }).toFormat('dd/MM/yyyy')}</p>
                    <p>{getTotalProducts()} productos</p>
                </div>
                <div className="text-center sm:text-right mt-4 sm:mt-0">
                    <p>{order.attributes.totalPayment}€</p>
                </div>
            </div>
            <OrderModal show={showModal} onClose={openCloseModal} title={'Información de pedido'}>
                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col sm:w-2/3">
                        <h2 className="mb-4">Productos</h2>
                        {products?.map((product) => (
                            <div key={product.id} className="flex mb-3">
                                <Link href={`/${product?.attributes.slug}`} className="text-black">
                                    <div className="flex items-center">
                                        <img src={product?.attributes.images.data[0].attributes?.url} alt='product-img' className="w-16 h-16 mr-3 object-contain" />
                                        <div className="flex-col justify-start">
                                            <h3 className="text-lg font-semibold">{product?.attributes.title}</h3>
                                            <p className="text-gray-600 mt-1">{product?.attributes.category.data.attributes?.title}</p>
                                            <p className="text-gray-600 mt-1">
                                                {product?.attributes.price}€{' '}
                                                {product.attributes.discount && (
                                                    <span>
                                                        - {product.attributes.discount}% =
                                                        <span className="text-red-600"> {product?.attributes.price - (product?.attributes.price * product.attributes.discount) / 100}€</span>
                                                    </span>
                                                )}{' '}
                                                <span>x {product.quantity}</span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col justify-between sm:w-1/3 sm:pl-6">
                        <div className="mb-5">
                            <h2 className="mb-2">Dirección</h2>
                            <div className={`p-5 border-2 mt-2 rounded-md border-black`} key={address.id}>
                                <p className="font-bold">{address.attributes.name} ({address.attributes.title})</p>
                                <p>{address.attributes.address}, {address.attributes.postal_code}, {address.attributes.state}, {address.attributes.city}</p>
                            </div>
                        </div>
                        <p className="font-bold text-center sm:text-right">Total {order.attributes.totalPayment}€</p>
                    </div>
                </div>
            </OrderModal>


        </>



    )
}
