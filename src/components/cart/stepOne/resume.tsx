import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Product } from '@/app/types/product'


export default function Resume(props: any) {

    const { products } = props
    const router = useRouter()
    const [totals, setTotals] = useState(null)


    useEffect(() => {
        let totals = {
            original: 0,
            discount: 0,
            price: 0,
        }
        products?.forEach((product: Product): any => {
            const price = product.attributes.price - product.attributes.price * product.attributes.discount / 100

            totals = {
                original: totals.original + product.attributes.price * product.quantity,
                discount: totals.discount + (product.attributes.price - price) * product.quantity,
                price: totals.price + price * product.quantity
            }
        });
        setTotals(totals)
    }, [products])

    const goToStepTwo = () => {
        router.replace('/cart?step=2')
    }

    if (!totals) return null


    return (
        <div >
            <h2 className="mb-5">Resumen</h2>
            <div  >
                <div className="flex flex-col  mb-3">
                    <div>
                        <span className="font-normal">Precio oficial: </span>
                        <span>{totals.original.toFixed(2)}€</span>
                    </div>
                    <div>
                        <span className="font-normal">Descuento: </span>
                        <span>{totals.discount.toFixed(2)}€</span>
                    </div>
                    <div className="mt-4">
                        <span className="font-bold text-lg">Subtotal: </span>
                        <span>{totals.price.toFixed(2)}€</span>
                    </div>
                </div>
                <div className="flex gap-1.5">
                    <button onClick={goToStepTwo} className="bg-[#1e293b] p-4 text-center mx-auto  hover:bg-blue-800 text-white font-bold py-2 rounded">Proceder con el pago</button>
                    <Link className="bg-[#1e293b] hover:bg-blue-800 p-4 text-white font-bold text-center py-2 rounded" href={'/'}>Continuar comprando</Link>

                </div>
            </div>
        </div>
    )
}
