import React from 'react'
import { ProductsData } from './ProductsLike'
import { FaStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './products.css'
import ProductItem from './ProductItem'

function Products() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        pauseOnHover: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    speed: 1500,
                    // centerPadding: '60px',
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <div className="mt-14 mb-20 overflow-hidden space-y-7 px-9">
            <hr />
            <div className="flex justify-center">
                {/* Header Section */}
                <div className="text-center mb-5 ">
                    <div className="flex gap-5">
                        <CiHeart className="text-4xl"></CiHeart>
                        <h1 className="lg:text-3xl md:text-2xl text-xl font-medium capitalize">
                            NOS BIJOUX COUPS DE COEUR
                        </h1>
                    </div>
                    <p className="text-xs text-pink-700">
                        produits le plus chercher
                    </p>
                </div>
            </div>
            {/* Section body */}
            <div className="mx-12">
                <Slider {...settings}>
                    {ProductsData.map((data, item) => (
                        <ProductItem key={item} data={data}></ProductItem>
                    ))}
                </Slider>
            </div>
            <hr />
        </div>
    )
}

export default Products
