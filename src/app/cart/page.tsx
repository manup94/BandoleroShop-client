'use client'
import HeaderCart from "@/components/cart/headerCart";
import { useAuth } from "@/hooks/useAuth";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function CartPage() {
    const { user } = useAuth()
    const router = useRouter()
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step')

    if (!user) router.push('/')

    return (
        <div >
            <HeaderCart currentStep={currentStep} />
            {currentStep == 1 && <p >Step 1</p>}
            {currentStep == 2 && <p >Step 2</p>}
            {currentStep == 3 && <p >Step 3</p>}
        </div >
    )
}

