'use client'
import { Cart } from "@/api/cart"
import { useAuth } from "@/hooks/useAuth"
import { useCart } from "@/hooks/useCart"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const cartCtrl = new Cart()

export default function Resume(props: any) {

    const { addressSelected, products } = props
    const [total, setStotal] = useState(null)
    const [loading, setLoading] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useAuth()
    const { deleteAllItems } = useCart()
    const router = useRouter()

    useEffect(() => {
        let totalTemp = 0
        products?.forEach(product => {
            const price = product.attributes.price - product.attributes.price * product.attributes.discount / 100

            totalTemp += price * product.quantity
        });
        setStotal(totalTemp.toFixed(2))
    }, [products])

    const onPay = async () => {
        setLoading(true)

        if (!stripe || !elements) {
            setLoading(false)
            return
        }

        let cardElement = elements.getElement(CardElement)
        const result = await stripe.createToken(cardElement)

        if (result.error) {
            console.error(result.error.message)
        } else {
            const response = await cartCtrl.paymentCard(result.token, products, user.id, addressSelected)

            if (response.status === 200) {
                deleteAllItems()
                goToStepEnd()

            } else {
                console.log('Error al realizar pedido');
            }
        }

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    const goToStepEnd = () => {
        router.replace('/cart?step=3')
    }

    if (!total) return null

    return (
        <div >
            <h2 className="mb-4">Resumen</h2>
            <div className="flex-col rounded-md border-black border-2 flex">
                <div >
                    {products?.map((product, index) => {
                        return (
                            <div key={product.id} className="flex flex-col mb-3 p-4">
                                <div className="mb-3">
                                    <p className="font-bold">{product.attributes.title}</p>
                                </div>
                                <span className="flex justify-between">
                                    <span>{product.attributes.category.data.attributes.title}</span>
                                    {product.quantity > 0 && `${product.quantity}x `}
                                    {product.attributes.price - product.attributes.price * product.attributes.discount / 100}€
                                </span>
                                {index !== products.length - 1 && <hr className="mt-3 h-2" />}
                            </div>

                        )
                    })}
                </div>
            </div>
            <div className=" font-bold">
                <div className="mt-3">
                    <span>Total:  </span>
                    <span>{total}€</span>
                </div>

                <button
                    disabled={!addressSelected}
                    onClick={onPay}
                    loading={loading}
                    className="bg-[#1e293b] w-4/5    hover:bg-blue-700 text-white font-bold py-2 rounded">
                    {loading ?
                        <svg className="animate-spin mx-auto  w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> :
                        'Pagar'
                    }
                </button>
            </div>
        </div>
    )
}
