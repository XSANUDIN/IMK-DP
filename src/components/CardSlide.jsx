import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function x({ images, link }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className="">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
                <Slider {...settings}>
                    {images.map((imageData, index) => (
                        <div key={index}>
                            <img className="w-full h-64" src={imageData.image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
                {images.map((imageData, index) => (
                    <div key={index} className="px-6 py-4">
                        {imageData.nama && (
                            <div className="font-bold text-xl mb-2">{imageData.nama}</div>
                        )}
                        {imageData.deskripsi && (
                            <p className="text-gray-600 text-base">
                                {imageData.deskripsi}
                            </p>
                        )}
                    </div>
                ))}
                <div className="flex justify-center md:justify-end p-3">
                    <Link to={link} className="text-white shadow-md rounded-md py-2 px-4 bg-blue-500 hover:bg-blue-400 hover:text-white transition duration-200">
                        Lebih Banyak
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default x;
