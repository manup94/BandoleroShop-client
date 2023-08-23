export type Product = {
    attributes: {
        title: string
        price: number
        releaseDate: string
        description: string
        category: string | any
        slug: string
        discount: number
        images: string | any
        mainImg: {
            data: {
                attributes: {
                    formats: {
                        medium: {
                            url: string
                        },
                        small: {
                            url: string
                        }
                    }
                }
            }
        }

    } | any
    quantity: number
    id: string

}