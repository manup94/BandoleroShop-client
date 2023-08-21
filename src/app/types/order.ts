import { Address } from "@/app/types/address"
import { Product } from "@/app/types/product"


export type Order = {
    attributes: {
        addressShipping: Address
        idPayment: string
        products: Product[]
        totalPayment: number

    }
    id: number

}