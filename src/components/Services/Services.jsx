import React from 'react'
import Image1 from './../../assets/image-acceuil/gif_incisione_trendsetter_1_.gif'
import Image2 from './../../assets/bag-test/bracelet.png'
import Image3 from './../../assets/image-acceuil/anneaux-pour-couples.jpeg'
import Image4 from './../../assets/bag-test/bag.png'

function Services() {
    return (
        <div className="">
            <div className="grid  grid-cols-2 ">
                <img
                    className="h-[550px] w-[100%]"
                    src={Image3}
                    alt="anneaux pour couples"
                    srcset=""
                />
                <div className="relative">
                    <img
                        src={Image3}
                        className="h-[550px] w-[100%]"
                        alt="anneaux pour couples"
                        srcset=""
                    />
                    <div className="absolute top-0 bg-black w-[100%] h-[550px] opacity-45"></div>
                </div>
            </div>
        </div>
    )
}

export default Services
