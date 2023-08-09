import { Product } from "@/app/types/product";
import { ENV } from "@/utils/constants";

export class Products {


    async GetProducts() {
        try {
            const url = 'http://localhost:1337/api/products?populate=*'
            const params = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            }

            const response = await fetch(url, params)
            const result = await response.json()

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }
    }

    async GetByCategory(category: string, page: number) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}?filters[category][title][$eq]=${category}&pagination[page]=${page}&pagination[pageSize]=6&populate=*`
            const params = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            }

            const response = await fetch(url, params)
            const result = await response.json()

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }
    }


}



