'use client'
import { Products } from "@/api/products"
import ProductDetailsCard from "@/components/productDetailsCard"
import { useEffect, useState } from "react"

const productsCtrl = new Products()

export default function ProductPage(props: any) {

    const [product, setProduct] = useState(null)
    const { params } = props
    const slug = params.product

    useEffect(() => {
        (async () => {
            try {
                const result = await productsCtrl.GetOneProductBySlug(slug)
                setProduct(result.data[0])


            } catch (error) {
                console.log(error)
            }
        })()
    }, [slug])

    return (
        <div className="container mx-auto p-10 ">
            {
                product ?
                    <ProductDetailsCard product={product}></ProductDetailsCard>
                    :
                    <h2>Producto no encontrado</h2>
            }
        </div>
    )
}
