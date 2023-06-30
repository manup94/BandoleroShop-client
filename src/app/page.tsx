
import { FetchTopRatedProducts } from "@/api/products"
import MostRatedList from "@/components/mostRatedList"
import styles from './page.module.css'


async function HomePage() {

  const topRated = await FetchTopRatedProducts()

  return (
    <>
      <header className={styles.headerContainer}>
        <img className={styles.banner} src="images/banner.avif" alt="banner" />
        <h1 className={styles.bannerText}>"Desde el sur para el mundo"</h1>
      </header>

      <div className=" container mx-auto">
        <div>
          <h2 className="text-2xl text-left m-5">Productos destacados</h2>
          <MostRatedList products={topRated} />
        </div>
      </div>
    </>
  )
}

export default HomePage