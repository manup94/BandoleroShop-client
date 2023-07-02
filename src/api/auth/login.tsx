import { schemaType } from "@/components/auth/login"

async function Login(data: schemaType) {
    const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            username: data.username,
            password: data.password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

export { Login }