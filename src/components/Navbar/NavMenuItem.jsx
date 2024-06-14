import React from 'react'
import { FaCaretDown } from 'react-icons/fa6'

function NavMenuItem({ data }) {
    return (
        <div className="group ">
            {/* navbar menu */}
            <a
                href={data.link}
                className="flex items-center h-10  px-4 hover:text-pink-700  uppercase  group-hover:border-b-pink-700 group-hover:border-b-4 transition-all duration-200"
            >
                {data.nav.name}
                {data.nav.option && (
                    <span>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                )}
            </a>
            {/* nav items */}
            <div className=" hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-300  ">
                {data.nav.option && (
                    <div className="absolute z-[999] flex items-center justify-evenly   h-[420px] w-[100vw] lg:w-[86vw] left-1/2 -translate-x-1/2 top-50 rounded-b-xl bg-white shadow-[0_0_3px_3px_3px_rbga(0,0,0,30)]">
                        {/* image Header */}
                        {data.nav.img && (
                            <div className="flex justify-center items-center gap-4 w-2/5  h-[100%] p-3 ">
                                {data.nav.img.map((img, item) => (
                                    <div
                                        key={item}
                                        className="relative flex gap-3"
                                    >
                                        {/* <div className=""> */}
                                        <a href={img.link}>
                                            <img
                                                className="h-[270px] "
                                                src={img.name}
                                                alt=""
                                            />
                                            <div className="absolute bottom-0  h-14 w-[100%] bg-pink-400 opacity-80 text-center uppercase text-xl text-white">
                                                <h1>{img.desc}</h1>
                                            </div>
                                        </a>
                                        {/* </div> */}
                                    </div>
                                ))}
                            </div>
                        )}
                        {data.nav.option && (
                            // options
                            <div className="flex items-center justify-center w-3/5 h-[100% p-3 ">
                                <ul className="grid grid-cols-3 w-[100%] ">
                                    {data.nav.option.map((option, item) => (
                                        <il key={item}>
                                            {option.optionItem && (
                                                <div>
                                                    <h1 className="text-black font-semibold text-xl">
                                                        {option.name}
                                                    </h1>
                                                    <ul className="text-sm ps-1 p-1">
                                                        {option.optionItem.map(
                                                            (type, item) => (
                                                                <li
                                                                    className="text-slate-600 p-1 hover:ps-2 hover:text-blue-950-900 transition-all duration-300"
                                                                    key={item}
                                                                >
                                                                    <a
                                                                        href={
                                                                            type.link
                                                                        }
                                                                    >
                                                                        {
                                                                            type.name
                                                                        }
                                                                    </a>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </il>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavMenuItem
