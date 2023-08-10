import { Product } from "@/app/types/product"
import Carousel from "./carousel"


function ProductDetailsCard({ product }: { product: Product }) {

    const mainImg = product.attributes.mainImg.data.attributes.formats.small.url
    const images = product.attributes.images.data
    const imagesArr: any = []
    imagesArr.push(mainImg)
    images.forEach(image => {
        imagesArr.push(image.attributes.formats.small.url)
    });




    return (
        < >

            <div className="flex rounded items-stretch   justify-center overflow-hidden shadow-lg  ">

                <img className="object-contain  " src={mainImg} alt={'main-img'} />
                <div className="px-6 py-4 flex flex-col justify-between ">
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-m mb-2">{product.attributes.title}</h2>
                        <p>{product.attributes.description}</p>

                    </div>

                    <div className="flex justify-center gap-5" >
                        <div className="flex justify-start items-center w-2/5">
                            <p className="text-gray-700 text-xl">
                                <span className="font-bold">Precio: </span>   {product.attributes.price} €
                            </p>

                        </div>
                        <div className="flex justify-center gap-10 w-3/5">

                            <button className="bg-[#1e293b] w-4/5  hover:bg-blue-700 text-white font-bold py-2 rounded">
                                Añadir al carrito
                            </button>
                            <button className="bg-[#1e293b] w-20 flex text-center justify-center items-center  hover:bg-blue-700 text-white font-bold py-2 rounded">
                                <img className="w-5" src="/images/favorite.png" alt="favorite-icon" />
                            </button>
                        </div>

                    </div>


                </div>

                <Carousel images={imagesArr}></Carousel>
            </div>

        </>
    )
}

export default ProductDetailsCard