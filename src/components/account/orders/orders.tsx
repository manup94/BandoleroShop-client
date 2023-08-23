'use client'
import { Order } from "@/api/order"
import { useAuth } from "@/hooks/useAuth"
import { useState, useEffect } from "react"
import OrdersList from "./ordersList"
import { Order as OrderType } from "@/app/types/order"


const orderCtrl = new Order()

export default function Orders() {

    const { user } = useAuth()
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await orderCtrl.getAll(user.id)
                setOrders(response.data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (

        <div className="p-10">
            {!orders && <h3>No tienes ningun pedido aun</h3>}

            {
                orders?.map((order: OrderType) => {
                    return (
                        <div key={order.id}
                            className="p-5 w-1/2 mx-auto  hover:cursor-pointer hover:border-green-500 border-2 mt-2 mb-2 rounded-md border-black">
                            <OrdersList order={order} />

                        </div>
                    )
                })
            }
        </div>
    )
}