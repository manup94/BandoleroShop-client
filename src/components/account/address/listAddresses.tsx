'use client'
import { useState, useEffect } from "react"
import { Address as AddressCtrl } from "@/api/address"
import { useAuth } from "@/hooks/useAuth"
import AddressForm from "./addressForm"
import Address from "./address"

const addressCtrl = new AddressCtrl()

function ListAddresses(props) {


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

    if (!addresses) return <p>No hay direcciones aun</p>

    return (
        <div className="d-block">

            {addresses.map((address: any) => {
                return <Address key={address.id} onReload={onReload} addressId={address.id} address={address.attributes} />
            })}


        </div>
    )
}

export default ListAddresses