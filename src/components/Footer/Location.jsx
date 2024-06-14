import React from 'react'
import location from './../../assets/image-acceuil/location.png'
import { MdPhoneCallback } from 'react-icons/md'
import { IoIosMail } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'

function Location() {
    return (
        <div className="p-6">
            <hr className="lg:hidden " />
            <div className="py-2 flex gap-4 justify-between w-[80vw] lg:w-[450px] xl:gap-20 xl:w-[550px] items-center ">
                <div>
                    <h2 className="text-pink-600 text-xl"> besoin d'aide</h2>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                            <MdPhoneCallback className="text-4xl "></MdPhoneCallback>
                            <div>
                                <h1 className="font-semibold">
                                    +261 33 20 229 77
                                </h1>
                                <h1 className="font-semibold">
                                    +261 32 20 229 77
                                </h1>
                                <h1 className="font-semibold">
                                    +261 38 20 229 77
                                </h1>
                                <p className="text-xs">
                                    LUN - VEN : 9H30 - 12H15 | 13H15 - 17H45
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <IoIosMail className="text-4xl"></IoIosMail>
                            <p>nous écrire</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-[350px] h-[200px] lg:w-[250px] lg:h-[400px] ">
                    <img
                        className="w-[100%] h-[100%] rounded-xl"
                        src={location}
                        alt="location"
                        srcset=""
                    />
                    <div className="absolute top-0 w-[100%] h-[100%] rounded-xl bg-pink-600 opacity-80"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 flex justify-center items-center flex-col  text-white text-4xl">
                        <FaLocationDot></FaLocationDot>
                        <p className="text-center text-xl px-20 p-3 font-bold">
                            Trouver mon magasin
                        </p>
                    </div>
                </div>
            </div>
            <hr className="lg:hidden" />
        </div>
    )
}

export default Location
