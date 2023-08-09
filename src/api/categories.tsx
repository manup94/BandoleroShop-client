import { ENV } from "@/utils/constants"

export class Categories {

    async GetCategories() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}?populate=*`
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

