import React from 'react'

function OptionItem() {
    return (
        <div>
            <ul className="grid grid-cols-5 p-4">
                {Footerlink.map((item, id) => (
                    <li key={id}>
                        <h1 className="uppercase text-xl text-slate-600">
                            {item.item}
                        </h1>
                        {item.optionItem && (
                            <ul className="text-slate-600">
                                {item.optionItem.map((item, id) => (
                                    <li
                                        className=" hover:text-pink-500 cursor-pointer"
                                        key={id}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            <div>
                <hr />
                <div className="flex justify-center flex-col items-center gap-4">
                    <ul className="flex">
                        {FooterLow.map((Link, id) => (
                            <li
                                className="hover:text-pink-500 cursor-pointer px-2"
                                key={id}
                            >
                                <span className="text-pink-800 font-bold text-4xl p-1">
                                    .
                                </span>
                                {Link}
                            </li>
                        ))}
                    </ul>
                    <p>
                        Made with ❤ by{' '}
                        <a
                            className="text-pink-400 cursor-pointer"
                            href="#mirado"
                        >
                            mirado
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OptionItem
