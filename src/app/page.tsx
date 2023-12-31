'use client'
import { Product } from '@/app/types/product';
import ProductsList from '@/components/productsList'
import { Category } from './types/category'
import Link from 'next/link'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import BarTrust from '@/components/barTrust'
import Newsletter from '@/components/newsletter'
import { Categories } from '@/api/categories';
import { Products } from '@/api/products';

const productsCtrl = new Products()
const categoriesCtrl = new Categories()

function HomePage() {

  // const [products, setProducts] = useState()
  // const [categories, setCategories] = useState()
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([]);

  const getNewProducts = async () => {
    try {
      const response = await productsCtrl.GetProducts()
      const allProducts = response.data;

      const sortedProducts = allProducts.slice().sort((a: Product, b: Product) => {
        const dateA = new Date(a.attributes.releaseDate).getTime();
        const dateB = new Date(b.attributes.releaseDate).getTime();
        return dateB - dateA;
      });

      const result = sortedProducts.slice(0, 6);

      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        getNewProducts()
        const getCategories = await categoriesCtrl.GetCategories()
        setCategories(getCategories.data)

      } catch (error) {
        console.log(error)
      }
    })()
  }, [])


  return (

    <>

      <header className={styles.headerContainer}>
        <img className={styles.banner} src='images/banner.avif' alt='banner' />
        <h1 className='text-white text-xl'>Desde el sur para el mundo</h1>
      </header>

      <div className=' container mx-auto '>

        <div className=' p-5 mt-5 '>
          <ul className='grid gap-5 grid-cols-2 sm:grid-cols-5 md:grid-cols-5 justify-center'>
            {categories?.map((category: Category) => (
              <li key={category.attributes.slug} className='hover:underline  flex flex-col items-center'>
                <Link className='flex flex-col text-black align-middle justify-center' href={`/products/${category.attributes.slug}`}>
                  <img className='w-10 m-auto ' src={category.attributes.icon.data.attributes.url} alt={category.attributes.title} />
                  <h2>{category.attributes.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='text-2xl text-left m-5'>Novedades:</h2>
          <hr className='m-7' />
          {
            products ?
              <ProductsList products={products} />
              :
              <p>No hay productos</p>
          }

        </div>
      </div>

      <Newsletter />
      <BarTrust />
    </>


  )
}

export default HomePage
