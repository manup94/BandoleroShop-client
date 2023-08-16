import { useState } from "react"
import Addresses from "./addresses"
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { ENV } from "@/utils/constants"
import Payment from "./payment"
import Resume from "./resume"

const stripeInit = loadStripe(ENV.STRIPE_TOKEN)

export default function StepTwo(props: any) {

    const { products } = props
    const [addressSelected, setAddressSelected] = useState(null)

    return (
        <Elements stripe={stripeInit}>

            <div className="flex justify-center p-10 ">
                <div className="w-full pr-5">
                    <Addresses addressSelected={addressSelected} setAddressSelected={setAddressSelected} />
                    <hr className="h-14" />
                    {addressSelected && <Payment />}

                </div>
                <div className="w-full pl-5">
                    <Resume addressSelected={addressSelected} products={products} />
                </div>
            </div>
        </Elements>
    )
}
