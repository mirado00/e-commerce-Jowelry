import React from 'react'
import Slider from 'react-slick'
import Image1 from './../../assets/image-acceuil/COPERTINA-BLOG-750X720_2_1.webp'
import Image2 from './../../assets/image-acceuil/bijoux-pour-couple.jpg'
import Image3 from './../../assets/image-acceuil/anneaux-pour-couples-1.jpeg'
import Image4 from './../../assets/image-acceuil/anneaux-pour-couples-1.jpeg'

const ListImage = [
    {
        img: Image1,
        title: 'image 1',
    },
    {
        img: Image2,
        title: 'image 2',
    },
    {
        img: Image3,
        title: 'image 3',
    },
    {
        img: Image4,
        title: 'image 4',
    },
]
const OurServices = [
    {
        serviceName: 'fabrication',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, aliquam. Dolorem vitae soluta aperiam debitis inventore earum quisquam quia dolores perspiciatis. Esse eaque nam quam. Excepturi incidunt qui reiciendis quisquam.',
    },
    {
        serviceName: 'réparation',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, aliquam. Dolorem vitae soluta aperiam debitis inventore earum quisquam quia dolores perspiciatis. Esse eaque nam quam. Excepturi incidunt qui reiciendis quisquam.',
    },
    {
        serviceName: 'Prendre des commandes',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, aliquam. Dolorem vitae soluta aperiam debitis inventore earum quisquam quia dolores perspiciatis. Esse eaque nam quam. Excepturi incidunt qui reiciendis quisquam.',
    },
]
function Test() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    }

    return (
        <div>
            <div className="relative">
                <Slider {...settings} className="overflow-x-hidden">
                    {ListImage.map((data, item) => (
                        <div key={item}>
                            <img
                                className="h-[540px]"
                                src={data.img}
                                alt={data.title}
                            />
                        </div>
                    ))}
                </Slider>
                <div className="absolute top-0 h-[540px] w-[100%]  bg-black opacity-45 z-[2]"></div>
                <div className="absolute top-40 w-[100%] flex justify-around items-center z-[4]">
                    {OurServices.map((data, item) => (
                        <div
                            className="group flex flex-col justify-center space-y-14"
                            key={item}
                        >
                            <h3 className="flex items-center justify-center  bg-cl-or h-10  w-56 text-sm uppercase text-white ">
                                {data.serviceName}
                            </h3>
                            <div className="relative z-[3] hidden group-hover:block group-hover:z[100] bg-white ">
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Test
