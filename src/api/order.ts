import { authFetch } from "@/utils/authFetch";
import { ENV } from "@/utils/constants";

export class Order {
    async getAll(userId: string) {
        try {
            const filters = `filters[user][id][$eq]=${userId}`
            const sort = 'sort[0]=createdAt:desc'
            const urlParams = `${filters}&${sort}`
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ORDER}?${urlParams}`

            const response = await authFetch(url)
            const result = await response.json()

            if (response.status !== 200) throw result

            return result
        } catch (error) {
            throw error
        }
    }
}