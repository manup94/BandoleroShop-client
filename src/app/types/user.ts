export type User = {

    email: string
    username: string
    password: string
    firstname: string
    lastname: string
    createdAt: string
    address: {
        city: string
        street: string
        number: number
        zipcode: string
    }
    phone: number

}