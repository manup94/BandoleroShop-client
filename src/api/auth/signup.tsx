import { schemaType } from "@/components/auth/signup"


async function SignUp(data: schemaType) {
    fetch('https://fakestoreapi.com/users', {
        method: "POST",
        body: JSON.stringify(
            {
                email: data.email,
                username: data.username,
                password: data.password,
                name: {
                    firstname: data.firstname,
                    lastname: data.lastname
                },
                address: {
                    city: data.city,
                    street: data.street,
                    number: data.number,
                    zipcode: data.zipcode,

                },
                phone: data.phone
            }
        ),


    })
        .then(res => res.json())
        .then(json => console.log(json))
}

export { SignUp }