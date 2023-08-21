import { Product } from "@/app/types/product";
import { authFetch } from "@/utils/authFetch";
import { ENV } from "@/utils/constants";


export class Cart {
    add(productId: number) {
        const products = this.getAll()
        const objIndex = products.findIndex((product: any) => product.id === productId)

        if (objIndex < 0) {
            products.push({ id: productId, quantity: 1 })
        } else {
            const product = products[objIndex]
            products[objIndex].quantity = product.quantity + 1
        }

        localStorage.setItem(ENV.CART, JSON.stringify(products))
    }

    getAll() {
        const response = localStorage.getItem(ENV.CART)

        if (!response) {
            return []
        } else {
            return JSON.parse(response)
        }

    }

    changeQuantity(productId: number, quantity: number) {
        const products = this.getAll()
        const objIndex = products.findIndex((product: any) => product.id === productId)

        products[objIndex].quantity = quantity

        localStorage.setItem(ENV.CART, JSON.stringify(products))
    }

    count() {
        const response = this.getAll()
        let count = 0

        response.forEach((item: any) => {
            count += item.quantity
        });
        return count
    }


    delete(productId: number) {
        const products = this.getAll()
        const updateProducts = products.filter((product: Product) => product.id !== productId)

        localStorage.setItem(ENV.CART, JSON.stringify(updateProducts))
    }

    deleteAll() {
        localStorage.removeItem(ENV.CART)
    }

    async paymentCard(token: any, products: Product, idUser: number, address: any) {
        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENT_ORDER}`
            const params = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token,
                    products,
                    idUser,
                    addressShipping: address
                })
            }
            const response = await authFetch(url, params)

            return response

        } catch (error) {
            throw error
        }
    }
}