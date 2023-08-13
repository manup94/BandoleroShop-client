import { Product } from "@/app/types/product"
import Carousel from "./carousel"
import WhisListIcon from "./whisListIcon"
import AddCartIcon from "./addCartIcon"


function ProductDetailsCard({ product }: { product: Product }) {

    const mainImg = product.attributes.mainImg.data.attributes.formats.small.url
    const images = product.attributes.images.data
    const imagesArr: any = []
    imagesArr.push(mainImg)
    images.map(image => {
        imagesArr.push(image.attributes.formats.small.url)
    });




    return (
        < >

            <div className="flex rounded overflow-hidden shadow-lg  ">

                <Carousel images={imagesArr}></Carousel>

                <div className="px-6 py-4 flex flex-col justify-between ">
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-m mb-2">{product.attributes.title}</h2>
                        <p>{product.attributes.description}</p>

                    </div>

                    <div className="flex justify-center gap-5" >
                        <div className="flex justify-start items-center w-2/5">
                            <p className="text-gray-700 ">
                                <span className="font-bold">Precio: </span>   {product.attributes.price} €
                            </p>

                        </div>
                        <div className="flex justify-center gap-5 w-3/5">

                            <AddCartIcon productId={product.id} />
                            <WhisListIcon productId={product.id} />
                        </div>

                    </div>


                </div>

            </div>

        </>
    )
}

export default ProductDetailsCard