import { authFetch } from "@/utils/authFetch"
import { ENV } from "@/utils/constants"


export class WishList {
    async check(userId: number, productId: number) {
        try {
            const filterUser = `filters[user][id][$eq][0]=${userId}`
            const filterProduct = `filters[product][id][$eq][1]=${productId}`
            const urlParams = `${filterUser}&${filterProduct}`

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`

            const response = await authFetch(url)
            const result = await response.json()

            if (response.status !== 200) throw result

            if (result.data.length === 0) {
                return false
            }

            return result.data[0]
        } catch (error) {
            throw error
        }
    }

    async add(userId: number, productId: number) {
        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}`

            const params = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: {
                        user: userId,
                        product: productId
                    }
                })

            }

            const response = await authFetch(url, params)
            const result = await response.json()

            if (response.status !== 200) throw result

            return result.data
        } catch (error) {
            throw error
        }
    }


    async delete(id: number) {
        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}/${id}`

            const params = {
                method: 'DELETE',

            }

            const response = await authFetch(url, params)
            const result = await response.json()

            if (response.status !== 200) throw result

            return result.data
        } catch (error) {
            throw error
        }
    }

    async getAll(userId: number) {
        try {

            const filters = `filters[user][id][$eq]=${userId}`
            const populate = `populate=product.images`
            const urlParams = `${filters}&${populate}`
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`

            const params = {
                method: 'GET',

            }

            const response = await authFetch(url, params)
            const result = await response.json()

            if (response.status !== 200) throw result

            return result.data

        } catch (error) {
            throw error
        }
    }


}