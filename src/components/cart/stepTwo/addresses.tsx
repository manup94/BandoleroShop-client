import { Address } from "@/api/address"
import { useAuth } from "@/hooks/useAuth"
import { useState, useEffect } from "react"
import { Address as AddressType } from "@/app/types/address"


const addressCtrl = new Address()

export default function Addresses(props: any) {

    const { addressSelected, setAddressSelected } = props
    const [addresses, setAddresses] = useState(null)
    const { user } = useAuth()

    useEffect(() => {
        (async () => {
            try {
                const response = await addressCtrl.getAll(user.id)
                setAddresses(response.data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <div>
            <h2>Dirección</h2>
            {addresses?.map((address: AddressType) => {
                return (
                    <div
                        onClick={() => setAddressSelected(address)}
                        className={`p-5  ${address.id === addressSelected?.id ? 'border-green-500 ' : ''}hover:cursor-pointer hover:border-green-500 border-2 mt-2 mb-2 rounded-md border-black`} key={address.id}>
                        <p className="font-bold">{address.attributes.name} ({address.attributes.title})</p>
                        <p>{address.attributes.address}, {address.attributes.postal_code}, {" "}
                            {address.attributes.state}, {address.attributes.city}</p>
                    </div>
                )
            })}
        </div>
    )
}
