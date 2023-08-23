'use client'
import { Products } from "@/api/products"
import ProductDetailsCard from "@/components/productDetailsCard"
import { useEffect, useState } from "react"

const productsCtrl = new Products()

export default function ProductPage(props: any) {

    const [product, setProduct] = useState(null)
    console.log(product);
    const { params } = props
    console.log(params);
    const slug = params.product
    console.log(slug);

    useEffect(() => {
        (async () => {
            try {
                const result = await productsCtrl.GetOneProductBySlug(slug)
                console.log(result);
                setProduct(result.data[0])


            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

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
