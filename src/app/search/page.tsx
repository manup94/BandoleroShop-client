'use client'
import { Products } from "@/api/products";
import Pagination from "@/components/pagination";
import ProductsList from "@/components/productsList";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

interface PaginationInfo {
    totalCount: number;
    pageCount: number;
    currentPage: number;
    perPage: number;
}

const productsCtrl = new Products()

export default function SearchPage(props: any) {

    const [products, setProducts] = useState(null)
    const [pagination, setPagination] = useState<PaginationInfo | null>(null)
    const [actualPage, setActualPage] = useState(1)

    const changePage = (newPage: number) => {
        setActualPage(newPage)
    }




    const searchParams = useSearchParams()

    const search = searchParams.get('search')


    useEffect(() => {
        (async () => {
            try {
                const result = await productsCtrl.GetOneProduct(search, actualPage)
                setProducts(result.data)
                setPagination(result.meta.pagination)


            } catch (error) {
                console.log(error)
            }
        })()
    }, [search, actualPage])


    return (
        <div className="container mx-auto p-10">
            {products?.length !== 0 && searchParams.s !== '' ? (
                <>
                    <ProductsList products={products}></ProductsList>
                    <hr className="m-7" />
                    <Pagination totalPages={pagination?.pageCount} changePage={changePage} />
                </>
            ) : (
                <h2 className="p-10 font-bold">No hay productos</h2>
            )}
        </div>
    )
}
