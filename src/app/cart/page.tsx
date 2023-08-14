'use client'
import { Products } from "@/api/products";
import HeaderCart from "@/components/cart/headerCart";
import StepOne from "@/components/cart/stepOne";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const productCtrl = new Products()

export default function CartPage() {
    const { user } = useAuth()
    const router = useRouter()
    const { cart } = useCart()
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step')
    const [products, setProducts] = useState(null)

    useEffect(() => {
        (
            async () => {
                try {
                    const data = []
                    for await (const item of cart) {
                        const response = await productCtrl.getProductById(item.id)
                        data.push({ ...response.data, quantity: item.quantity })
                    }
                    setProducts(data)
                } catch (error) {
                    console.log(error);
                }
            }
        )()
    }, [cart])

    if (!user) router.push('/')

    return (
        <div >
            <HeaderCart currentStep={currentStep} />
            {currentStep <= 1 && <StepOne products={products} />}
            {currentStep == 2 && <p >Step 2</p>}
            {currentStep == 3 && <p >Step 3</p>}
        </div >
    )
}

