import React, { useEffect } from 'react'
import Image1 from './../../assets/image-acceuil/bijoux-pour-couple.jpg'
import Image2 from './../../assets/image-acceuil/histoire.jpg'
import Image3 from './../../assets/image-acceuil/magasine.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const List = [
    {
        img: Image1,
        title: 'Célébrez Votre Amour avec Nos Bijoux pour Couples 💕✨',
        description:
            'Exprimez votre amour avec notre collection exclusive de bijoux pour couples, conçus pour symboliser votre connexion spéciale.',
    },
    {
        img: Image2,
        title: 'Bienvenue sur mi-haingo Bijouterie .',
        description:
            "Découvrez l'élégance et le raffinement à travers notre collection exclusive de bijoux pour toutes les occasions. Que vous cherchiez à exprimer votre amour, célébrer un moment spécial, ou simplement ajouter une touche de glamour à votre quotidien, mi-haingo a ce qu'il vous faut.",
    },
]

function Hero() {
    const handlerOrder = () => {
        alert('order not yet')
    }
    const settings = {
        dodts: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    }
    const settingFade = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 8000,
        arrows: false,
        fade: true,
        cssEase: 'ease-in-out',
    }
    return (
        <div
            className="relative overflow-hidden w-full max-w-screen-2xl h-[560px] sm:min-h-[550px] bg-gray-100 flex items-center dark:bg-gray-900 dark:text-white transition-all duration-200 bg-cover bg-center  "
            style={{ backgroundImage: `url(${Image3})` }}
        >
            <div className="absolute   max-xl:z-[15] h-screen w-screen bg-white dark:bg-gray-900 opacity-65 blur-3xl"></div>
            <div>
                <div className="absolute  -top-[345px] -right-0 overflow-hidden rounded-3xl rotate-[43deg]  h-[730px] w-[730px] bg-or-gradient z-10 dark:shadow-[-2px_2px_9px_3px_rgba(27,6,88,30)]  shadow-2xl ">
                    <Slider
                        {...settingFade}
                        className="absolute -bottom-32 left-8  -rotate-[43deg] h-[550px] w-[875px]"
                    >
                        {List.map((data, item) => (
                            <img
                                src={data.img}
                                alt="model bag for men"
                                srcset=""
                                className="h-[550px] w-[875px]  bg-repeat scale-100"
                            />
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="container pb-8 px-6 sm:pb-0 z-20 max-w-max ">
                <Slider {...settings}>
                    {List.map((data, item) => (
                        <div key={item}>
                            <div className="flex gap-8 flex-row max-[640px]:flex-col px-8">
                                <div className="sm:w-[600px] lg:w-[650px] flex flex-col gap-6 text-center sm:text-left max-[640px]:order-1 ">
                                    {/* texOrder Nowt content section  */}
                                    <div className="flex flex-col gap-5 sm:p-0">
                                        <h1
                                            data-aos="fade-down"
                                            className="text-slate-950  dark:text-white  text-3xl sm:text-4xl lg:text-4xl font-bold capitalize"
                                        >
                                            {data.title}
                                        </h1>
                                        <p
                                            data-aos="fade-left"
                                            className="sm:text-lg lg:text-xl"
                                        >
                                            {data.description}
                                        </p>
                                    </div>

                                    <div>
                                        <button
                                            className="bg-or-gradient hover:bg-right  hover:scale-105 px-4 py-2 rounded-full transition-all duration-200 ease-in-out  text-lg text-yellow-900/100 uppercase"
                                            onClick={handlerOrder}
                                        >
                                            consulter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero
