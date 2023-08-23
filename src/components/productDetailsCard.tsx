import { Product } from "@/app/types/product"
import Carousel from "./carousel"
import WhisListIcon from "./whisListIcon"
import { AddCartIcon } from "./addCartIcon"



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

            <div className="flex-col  md:flex justify-center items-center align-middle  overflow-hidden shadow-lg">

                <Carousel images={imagesArr}></Carousel>

                <div className="px-4 py-4 flex-col justify-between">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-lg mb-2">{product.attributes.title}</h2>
                        <p className="text-sm">{product.attributes.description}</p>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-3">
                        <div className="flex justify-start items-center mb-2 md:mb-0">
                            <p className="text-gray-700">
                                <span className="font-bold">Precio:</span> {product.attributes.price} €
                            </p>
                        </div>
                        <div className="flex justify-center gap-3 w-full">
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