import React from 'react'
import { FaBagShopping, FaCartShopping, FaRegHeart } from 'react-icons/fa6'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { FaStar } from 'react-icons/fa'
import { MdEuroSymbol } from 'react-icons/md'
import imgProd1 from './../../assets/bag-test/B3DFJYI237-master.webp'
import imgProd2 from './../../assets/bag-test/B7AFBJW128-master.webp'
import imgProd3 from './../../assets/bag-test/B7AMJW00CB-master.webp'
import imgProd4 from './../../assets/bag-test/B7DFBDW4EP-master.webp'
import imgProd5 from './../../assets/bag-test/B7DFBDW4FF-master.webp'
import imgProd6 from './../../assets/bag-test/FADFBW0714-master.webp'
import imgProd7 from './../../assets/bag-test/FADFBW0883-master.webp'

const ProductsDataList = [
    {
        id: 1,
        img: imgProd1,
        title: 'Ethinic',
        price: 20,
    },
    {
        id: 2,
        img: imgProd2,
        title: 'Mens Ethinic',
        price: 40,
    },
    {
        id: 3,
        img: imgProd3,
        title: 'Products 3',
        price: 20,
    },
    {
        id: 4,
        img: imgProd4,
        title: 'Products4',
        price: 150,
    },
    {
        id: 5,
        img: imgProd5,
        title: 'Products4',
        price: 2,
    },
    {
        id: 6,
        img: imgProd6,
        title: 'Women Ethinic',
        price: 200,
    },
    {
        id: 7,
        img: imgProd7,
        title: 'Mens Ethinic',
        price: 80,
    },
    {
        id: 8,
        img: imgProd6,
        title: 'Products 3',
        price: 40,
    },
]
function ListProducts() {
    return (
        <div data-aos="fade-right" className=" overflow-hidden ">
            {/* Header Section */}
            <div className="mb-10 mx-20">
                <h1 className="lg:text-3xl md:text-2xl text-xl font-medium uppercase">
                    nouveaux produits
                </h1>
            </div>
            {/* List of  products */}
            <div className="flex justify-center flex-col items-center">
                <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {ProductsDataList.map((data, item) => (
                        <div data-aos="zoom-in" data-aos-delay="100" key={item}>
                            <div className="group relative w-[250px] h-[290px] shadow-md">
                                <img
                                    className="group-hover:scale-110 transition-all duration-300 ease-in-out"
                                    src={data.img}
                                    alt="bagues image"
                                    srcset=""
                                />
                                <div className="absolute z-[2] top-0 opacity-5  group-hover:opacity-10 bg-gray-600 h-[100%] w-[100%] transition-all duration-300"></div>
                                <div className="absolute top-0 opacity-0 group-hover:opacity-100  z-[5] w-10 h-24 flex justify-center flex-col items-center bg-black/15 text-4xl  transition-all duration-500">
                                    <FaRegHeart className="hover:bg-cl-or h-12 w-10 p-2 transition-all duration-500 "></FaRegHeart>
                                    <HiOutlineShoppingBag className="hover:bg-cl-or overflow-hidden h-12 w-10 p-2 transition-all duration-500"></HiOutlineShoppingBag>
                                </div>
                                <div className="absolute bottom-0 flex flex-col p-2 gap-1">
                                    <div className="flex justify-between w-[230px] items-center">
                                        <h1 className="">{data.title}</h1>
                                        <div className="flex items-center">
                                            <span>{data.price}</span>
                                            <MdEuroSymbol></MdEuroSymbol>
                                        </div>
                                    </div>
                                    <button className="px-3 py-2 rounded-lg bg-pink-700 text-white font-bold">
                                        ajouter au pannier
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a
                    className="bg-pink-700 text-white text-xl py-3 px-5 rounded-lg m-5"
                    href=""
                >
                    plus de produits
                </a>
            </div>
        </div>
    )
}

export default ListProducts
