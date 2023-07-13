
import { FetchProducts } from "@/api/products"
import MostRatedList from "@/components/mostRatedList"
import styles from './page.module.css'


async function HomePage() {

  const prueba = await FetchProducts()
  console.log(prueba);
  return (
    <>
      <header className={styles.headerContainer}>
        <img className={styles.banner} src="images/banner.avif" alt="banner" />
        <h1 className={styles.bannerText}>"Desde el sur para el mundo"</h1>
      </header>

      <div className=" container mx-auto">
        <div>
          <h2 className="text-2xl text-left m-5">Productos destacados:</h2>
          <hr className="m-7" />
          <MostRatedList products={prueba} />
        </div>
      </div>
    </>
  )
}

export default HomePage
