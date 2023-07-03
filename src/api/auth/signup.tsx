import { schemaType } from "@/components/auth/signup"


async function SignUp(data: schemaType) {
    try {
        const url = `${process.env.API_BASE_URL}/auth/local/register`
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status !== 200) throw result

        return result

    } catch (error) {
        throw error
    }

}

export { SignUp }