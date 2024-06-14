import React from 'react'
import { FaCcVisa, FaStar } from 'react-icons/fa'
import { FaCcPaypal } from 'react-icons/fa6'
import { IoIosLock } from 'react-icons/io'
import imgMVOLA from './../../assets/image-acceuil/mvola.png'
import imgEirtel from './../../assets/image-acceuil/eirtel-money.png'
import imgOrange from './../../assets/image-acceuil/orange-money.png'

function Partnership() {
    return (
        <div className="flex justify-center flex-col-reverse items-center space-y-5 gap-6 xl:flex-row px-10 xl:px-20 xl:justify-between  bg-pink-300 ">
            <div className="flex space-y-1  items-center flex-col   justify-center md:flex-row  ">
                <div className="flex justify-center items-center w-[360px] gap-6 lg:gap-4">
                    <img
                        className="h-9  w-14 rounded-md"
                        src={imgMVOLA}
                        alt="image MVOLA"
                        srcset=""
                    />
                    <img
                        className="h-9 w-14 rounded-md"
                        src={imgEirtel}
                        alt="image eirtel"
                        srcset=""
                    />
                    <img
                        className="h-9 w-14 border-gray-300 border-2 rounded-md"
                        src={imgOrange}
                        alt="image orange"
                        srcset=""
                    />
                    <FaCcVisa className="text-5xl "></FaCcVisa>
                </div>

                <div className="flex items-center w-[160px] gap-3 -translate-y-1 md:justify-center">
                    <IoIosLock className="text-4xl"></IoIosLock>
                    <p className="font-bold ">100% SECURE</p>
                </div>
            </div>
            <div className="flex w-[100vw] flex-col space-y-4 justify-center items-center  sm:flex-row  sm:justify-evenly  xl:pb-5">
                <h2 className="font-bold text-3xl text-gray-700">
                    <span className="text-orange-500 font-serif">Avis</span>{' '}
                    vérifiés
                </h2>
                <div className="flex justify-center items-center px-3 h-10 w-[370px] rounded-md mx-1 gap-4 bg-gray-200">
                    <p>4/5</p>
                    <div className="flex gap-1">
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-white " />
                    </div>
                    |<p>1437 avis clients</p>
                </div>
            </div>
        </div>
    )
}

export default Partnership
