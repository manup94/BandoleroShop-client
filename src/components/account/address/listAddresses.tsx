'use client'
import { useState, useEffect } from "react"
import { Address } from "@/api/address"
import { useAuth } from "@/hooks/useAuth"
import AddressForm from "./addressForm"

const addressCtrl = new Address()

function ListAddresses() {

    const [addresses, setAddresses] = useState(null)
    const { user } = useAuth()

    useEffect(() => {
        (async () => {
            try {
                const response = await addressCtrl.getAll(user.id)
                setAddresses(response.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [addresses])

    if (!addresses) return <p>No hay direcciones aun</p>

    return (
        <div className="d-block">
            <ul>
                {addresses.map((address: any) => {
                    return <li>{address.attributes.title}</li>
                })}
            </ul>

        </div>
    )
}

export default ListAddresses