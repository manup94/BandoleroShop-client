export type User = {

    email: string
    username: string
    password: string
    name: {
        firstname: string
        lastname: string
    }
    address: {
        city: string
        street: string
        number: number
        zipcode: string
    }
    phone: number

}