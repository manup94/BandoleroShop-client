'use client'
import ProductsList from "@/components/producstList"
import { Products } from "@/api/products";
import { useState, useEffect } from "react";
import Pagination from "@/components/pagination";

const productsCtrl = new Products()

export default function CategoryPage(props: any) {

    const { params } = props
    function toUpperCase(string: string) {
        return string[0].toUpperCase() + string.slice(1)
    }
    const [products, setProducts] = useState(null)
    const [pagination, setPagination] = useState<object | null>(null)
    const [actualPage, setActualPage] = useState(1)
    console.log(pagination);
    const changePage = (newPage: number) => {
        setActualPage(newPage)
    }

    useEffect(() => {
        (async () => {
            try {
                const result = await productsCtrl.GetByCategory(toUpperCase(params.category), actualPage)
                setProducts(result.data)
                setPagination(result.meta.pagination)

            } catch (error) {
                console.log(error)
            }
        })()
    }, [actualPage])


    return (
        <div className="container mx-auto">
            <h2 className="text-2xl text-left m-5">{`Categoria: ${params.category}`}</h2>
            <hr className="m-7" />
            {
                products ?
                    <>
                        <ProductsList products={products}></ProductsList>
                        <hr className="m-7" />
                        <Pagination totalPages={pagination?.pageCount} changePage={changePage} />
                    </>
                    :
                    <p>No hay productos</p>

            }

        </div>
    )
}
