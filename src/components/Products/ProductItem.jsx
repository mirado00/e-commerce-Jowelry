import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoIosHeart } from 'react-icons/io'
import { CiHeart } from 'react-icons/ci'
import { MdEuroSymbol } from 'react-icons/md'

function ProductItem({ data }) {
    return (
        <div
            data-aos="fade-up"
            className="group flex justify-center flex-col space-y-3 shadow-lg border-2 max-h-[400px]"
        >
            <img
                src={data.img}
                alt="image Products"
                className="group-hover:scale-90 transition-all duration-300 h-[300px]"
            />
            <div className="flex justify-center flex-col px-3 pb-2 space-y-2 -translate-y-2 rounded-b-md text-xl">
                <div className="flex justify-between -translate-y-1">
                    <h3 className="font-bold ">{data.name}</h3>
                    <div className="flex items-center  gap-2">
                        <p>{data.price}</p>
                        <MdEuroSymbol className="text-base"></MdEuroSymbol>
                    </div>
                </div>
                <button className="px-2 py-2 rounded-lg bg-or-gradient border-pink-300  text-yellow-900 hover:-translate-y-1 font-bold transition-all duration-300">
                    ajouter au pannier
                </button>
            </div>
        </div>
    )
}

export default ProductItem
