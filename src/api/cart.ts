import { authFetch } from "@/utils/authFetch";
import { ENV } from "@/utils/constants";

export class Cart {
    add(productId: any) {
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

    changeQuantity(productId, quantity) {
        const products = this.getAll()
        const objIndex = products.findIndex((product) => product.id === productId)

        products[objIndex].quantity = quantity

        localStorage.setItem(ENV.CART, JSON.stringify(products))
    }

    count() {
        const response = this.getAll()
        let count = 0

        response.forEach(item => {
            count += item.quantity
        });
        return count
    }

    delete(productId) {
        const products = this.getAll()
        const updateProducts = products.filter((product) => product.id !== productId)

        localStorage.setItem(ENV.CART, JSON.stringify(updateProducts))
    }
}