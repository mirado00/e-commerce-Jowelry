import React from 'react'
import evenImage from './../../assets/image-acceuil/cadeau_fete_de_pere-removebg-preview.png'
import EvenTitle from './../../assets/image-acceuil/fête_de_pere-removebg-preview.png'
const ListButton = [
    {
        name: 'bracelets',
        link: '#BRACELETS',
    },
    {
        name: 'coliers',
        link: '#coliers',
    },
    {
        name: 'bagues',
        link: 'bagues',
    },
    {
        name: 'montres',
        link: 'montres',
    },
]
function Evenement() {
    return (
        <div className=" space-y-3 m-8 overflow-hidden shadow-md pb-6 dark:text-white dark:bg-or-gradient">
            <h1 className="capitalize text-3xl m-2">Evenement</h1>
            <div className=" space-y-4 pt-2">
                <hr className="w-[100%] text-blue-900" />
                {/* image */}
                <div className="flex xl:flex-row flex-col pt-2 bg-yellow-100 dark:bg-or-gradient">
                    <div className="flex items-center">
                        <div className=" ps-4 w-11/12 space-x-4 space-y-4 ">
                            <h1 className="text-3xl md:text-5xl capitalize font-bold font-myFont flex flex-col tracking-wider text-blue-900">
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay="0"
                                    className="ps-0"
                                    text-cl-or
                                >
                                    cadeau inoubliable
                                </span>{' '}
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay="200"
                                    className="ps-14 "
                                >
                                    pour
                                </span>{' '}
                                <span
                                    data-aos="fade-right"
                                    data-aos-delay="300"
                                    className="ps-28"
                                >
                                    la fête des pères !
                                </span>
                            </h1>
                            <p className="text-black">
                                Le{' '}
                                <span className="font-semibold">
                                    Dimanche 16 juin
                                </span>{' '}
                                ,faites briller les yeux de votre père avec
                                notre collection exclusive de bijoux élégants et
                                personnalisés. Chaque pièce exprime amour et
                                gratitude. Montres, bracelets gravés, et plus
                                encore ! Montrez à votre père combien il est
                                spécial. Visitez notre boutique dès aujourd'hui
                                pour trouver le cadeau parfait !
                            </p>
                        </div>
                    </div>
                    <img
                        className="max-h-[380px]"
                        data-aos="zoom-in"
                        src={evenImage}
                        alt=""
                        srcset=""
                    />
                </div>

                {/* contents */}
                {/* <div className="absolute bg-gray-500 "></div> */}
                <div className="flex gap-0 justify-evenly">
                    {ListButton.map((data, item) => (
                        <a
                            className="bg-gray-400 text-white   h-9 w-40 flex justify-center items-center hover:translate-y-[-2px] hover:translate-x-[1px] hover:shadow-[-1px_2px_3px_1px_rgba(27,6,88,30)] transition-all duration-200"
                            key={item}
                            href={data.link}
                        >
                            {data.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Evenement
