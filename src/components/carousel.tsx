

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CustomCarousel({ images }) {
    return (
        <div className=" h-120 w-80">
            <div className="max-w-lg mx-auto">
                <Carousel showArrows={false} showThumbs={true}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                className='object-cover'
                                src={image}
                                alt={`Image ${index}`}
                                style={{ maxHeight: '400px', maxWidth: '100%' }}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}











