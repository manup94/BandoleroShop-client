export type Product = {
    attributes: {
        title: string
        price: number
        releaseDate: string
        description: string
        category: string
        slug: string
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

    }
    id: number

}