'use client'
import { FetchNewProducts } from "@/api/products"
import { FetchCategories } from "@/api/categories"
import MostRatedList from "@/components/latestProductList"
import { Category } from "./types/category"
import Link from "next/link"
import styles from './page.module.css'
import { useEffect, useState } from "react"
import BarTrust from "@/components/barTrust"


function HomePage() {

  const [products, setProducts] = useState()
  const [categories, setCategories] = useState()

  useEffect(() => {
    FetchNewProducts()
      .then(res => setProducts(res))
    FetchCategories()
      .then(res => setCategories(res))

  }, [])

  return (

    <>
      <header className={styles.headerContainer}>
        <img className={styles.banner} src="images/banner.avif" alt="banner" />
        <h1 className={styles.bannerText}>"Desde el sur para el mundo"</h1>
      </header>

      <div className=" container mx-auto">
        <div className=" p-5 mt-5">
          <ul className="grid gap-5 grid-cols-2 sm:grid-cols-5 md:grid-cols-5 justify-center">
            {categories?.map((category: Category) => (
              <li key={category.attributes.slug} className="flex flex-col items-center">
                <Link href={category.attributes.slug}>
                  <img className="w-20 justify-center" src={category.attributes.icon.data.attributes.url} alt={category.attributes.title} />
                </Link>
                <p className="p-5 text-center">{category.attributes.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl text-left m-5">Novedades:</h2>
          <hr className="m-7" />
          {
            products ?
              <MostRatedList products={products} />
              :
              <p>No hay productos</p>
          }

        </div>
      </div>
      <BarTrust></BarTrust>
    </>


  )
}

export default HomePage
