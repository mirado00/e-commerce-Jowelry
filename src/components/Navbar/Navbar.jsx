import React from 'react'
import './Navbar.css'
import menu from './data/menuItemData'
import dropDwonLinks from './data/Navdata'
import logo from './../../assets/image-acceuil/diamond.png'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartShopping, FaRegUser } from 'react-icons/fa6'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { FaShoppingBag, FaRegHeart } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import DarkMode from './DarkMode'
import NavMenuItem from './NavMenuItem'

function Navbar() {
    return (
        <div>
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
                {/* upper Navbar */}
                <div className="bg-white py-2 shadow-sm dark:bg-gray-900">
                    <div className="container flex justify-between place-items-center">
                        <div>
                            <a href="mailto:#" className="flex  gap-3">
                                <img
                                    className="w-14 mb-2 "
                                    src={logo}
                                    alsvgt="logo"
                                    srcset=""
                                />

                                <div className="min-w-24">
                                    <h1 className="text-xl md:text-3xl font-bold font-myFont ">
                                        <span className="text-pink-700 text-4xl">
                                            M
                                        </span>
                                        i-haingo
                                    </h1>
                                    <p className="uppercase text-xxs">
                                        bijouterie
                                    </p>
                                </div>
                            </a>
                        </div>
                        {/* search bar */}
                        <div className="relative group  hidden sm:block">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="search"
                                className=" md:w-[200px] md:hover:w-[250px] lg:h-[40px] lg:w-[300px] lg:group-hover:w-[360px] 
                            transition-all duration-300 border rounded-full
                            border-gray-300 px-3 py-1  
                            focus:outline-none focus:border-1
                            focus:border-pink-700 dark:text-cl-arg
                           dark:bg-gray-800
                            "
                            ></input>
                            <IoMdSearch className="text-gray-500 group-hover:text-pink-700 absolute top-1/3  right-3 text-1xl" />
                        </div>
                        <div className="flex justify-between gap-4 items-center dark:text-white">
                            {/* order button */}
                            <button
                                onClick={() =>
                                    alert('pas encore, attend un peu')
                                }
                                className="relative "
                            >
                                <IoLocationOutline className=" text-2xl text-gray-800  dark:text-white drop-shadow-sm cursor-pointer" />
                            </button>
                            <button
                                onClick={() =>
                                    alert('pas encore, attend un peu')
                                }
                                className="relative "
                            >
                                <FaRegUser className=" text-xl text-gray-800 dark:text-white drop-shadow-sm cursor-pointer" />
                            </button>
                            <button
                                onClick={() =>
                                    alert('pas encore, attend un peu')
                                }
                                className="relative "
                            >
                                <FaRegHeart className=" text-xl text-gray-800  dark:text-white drop-shadow-sm cursor-pointer" />
                                <span className="absolute top-[10px] h-4 w-4 rounded-full text-white text-xs bg-red-800 ">
                                    2
                                </span>
                            </button>
                            <button
                                onClick={() =>
                                    alert('pas encore, attend un peu')
                                }
                                className="relative "
                            >
                                <HiOutlineShoppingBag className=" text-xl text-gray-800  dark:text-white drop-shadow-sm cursor-pointer" />
                                <span className="absolute top-[10px] h-4 w-4 rounded-full text-white text-xs bg-red-800 ">
                                    2
                                </span>
                            </button>
                            {/* dark mod switch */}
                            <div>
                                <DarkMode />
                            </div>
                        </div>{' '}
                    </div>
                </div>
                {/* lower Navbar */}
                <div className="sm:flex justify-center items-center">
                    <div className="flex justify-center  gap-4 items-center">
                        {menu.map((data, item) => (
                            <NavMenuItem key={item} data={data} />
                        ))}
                        <div className="group relative cursor-pointer">
                            <a
                                href="#"
                                className="flex items-center gap-2 py-2 hover:text-primary transition-all duration-200"
                            >
                                Catégories
                                <span>
                                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                </span>
                            </a>
                            <div className="absolute z-[999] right-0 hidden group-hover:block w-[150px] bg-white shadow-md rounded-md text-black transition-all duration-200">
                                <ul>
                                    {dropDwonLinks.map((data) => (
                                        <li key={data.id}>
                                            <a
                                                href={data.link}
                                                className="inline-block py-2 rounded-md w-full px-3 hover:bg-primary/20"
                                            >
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
