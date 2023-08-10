

export default function Carousel(props: any) {
    const { images } = props
    return (

        <div className="flex items-center justify-center py-8">
            <div className="relative max-w-lg mx-auto">
                <div className="overflow-hidden rounded-lg">
                    <div className="relative w-full">
                        <div className="carousel">
                            {images.map((image: any, index: any) => (

                                <div
                                    key={index}
                                    className={`carousel-item absolute ${index === 0 ? 'opacity-100' : 'opacity-0'
                                        } transition-opacity duration-300`}
                                >
                                    <img
                                        src={image}
                                        alt={`Image ${index}`}
                                        className="object-cover w-full h-64 sm:h-96"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-2 -mb-4 flex justify-center space-x-2">
                    {images.map((_: any, index: any) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600 ${index === 0 ? 'bg-gray-600' : ''
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    )




}
