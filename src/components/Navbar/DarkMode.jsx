import React, { useState } from 'react'
import { MdLightMode, MdTranslate } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'

function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const element = document.documentElement

    const darkHandler = () => {
        setIsDarkMode(!isDarkMode)
        if (!isDarkMode) {
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }
    }

    return (
        <div className="relative">
            <div
                className="  relative z-10 w-[28px] h-[28px] overflow-hidden rounded-full cursor-pointer"
                onClick={darkHandler}
            >
                <MdLightMode
                    className={`text-cl-or  scale-75 text-3xl absolute -left-[1px] -top-[1px] ${isDarkMode ? 'transition-all duration-300 hidden' : ''}`}
                />
                <MdDarkMode
                    className={` dark:text-white py-1 px-1 text-3xl absolute -top-[1px] ${isDarkMode ? '' : 'transition-all duration-300 hidden'} `}
                />
            </div>
            <div className="absolute z-0 top-0 w-[27px] h-[27px] bg-yellow-200 blur-sm rounded-full dark:bg-blue-700"></div>
        </div>
    )
}

export default DarkMode
