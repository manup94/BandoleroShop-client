import { useState } from "react"
import Addresses from "./addresses"

export default function StepTwo(props) {

    const { products } = props
    const [addressSelected, setAddressSelected] = useState(null)
    console.log(addressSelected);
    return (
        <div className="flex container p-10 w-full">
            <div className="w-2/3 pr-5">
                <Addresses addressSelected={addressSelected} setAddressSelected={setAddressSelected} />
                <hr className="h-14" />
                {addressSelected && <p>payment</p>}

            </div>
            <div className="w-1/3 pl-5">
                <p>resumen</p>
            </div>
        </div>
    )
}
