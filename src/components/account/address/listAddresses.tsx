'use client'
import { useState, useEffect } from "react"
import { Address as AddressCtrl } from "@/api/address"
import { useAuth } from "@/hooks/useAuth"
import AddressForm from "./addressForm"
import Address from "./address"
import { Address as AddressType } from "@/app/types/address"

const addressCtrl = new AddressCtrl()

function ListAddresses(props: any) {


    const [addresses, setAddresses] = useState(null)
    const { user } = useAuth()
    const { reload, onReload } = props


    useEffect(() => {
        (async () => {
            try {
                const response = await addressCtrl.getAll(user.id)
                setAddresses(response.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [reload])



    return (

        <div className="flex  flex-col w-1/2">
            {addresses && addresses.length > 0 ? (
                addresses.map((address: AddressType) => (
                    <Address key={address.id} onReload={onReload} addressId={address.id} address={address.attributes} />
                ))
            ) : (
                <p className="font-bold">No hay direcciones aún</p>
            )}
        </div>
    )
}

export default ListAddresses