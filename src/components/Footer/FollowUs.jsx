import React from 'react'
import logo48 from './../../assets/image-acceuil/logo_48.png'
import Location from './Location'
import VerifiedReview from './VerifiedReview'

function FollowUs() {
    return (
        <div>
            <VerifiedReview></VerifiedReview>
            <div className="flex flex-col px-20 items-center lg:grid lg:grid-cols-2 xl:translate-x-6">
                <div className="flex flex-col space-y-3 justify-center p-4 gap-3 h-[400px] w-[80vw] lg:w-[450px] xl:w-[500px] xl:translate-x-4 rounded-2xl bg-zinc-900/90 text-white ">
                    <div className="space-y-2">
                        <h1 className="font-bold text-2xl">
                            Inscrivez-vous à notre newslatter
                        </h1>
                        <p className="text-xl">
                            Recevez notre actualité et profitez de nos offres
                            privilégiées en avant-première.
                        </p>
                        <input
                            className="h-16 w-[100%] rounded-lg"
                            type="mail"
                            placeholder="votre adresse mail"
                        />
                    </div>
                    <div className="flex items-center justify-center gap-4 h-16 bg-gray-100 w-[75%] text-black rounded-sm translate-x-5">
                        <input
                            className="scale-150 m-3"
                            type="checkbox"
                            name="robot"
                            id="check-robot"
                        />
                        <p>je ne suis pas un robot</p>
                        <div className="flex flex-col justify-end items-end ">
                            <img
                                className="h-8 w-8"
                                src={logo48}
                                alt=""
                                srcset=""
                            />
                            <div className="text-zinc-700 flex flex-col justify-end items-end">
                                <p className="text-xs">reCAPTCHAT</p>
                                <p className="text-xxs">
                                    confidentialité-condition
                                </p>
                            </div>
                        </div>
                    </div>
                    <input
                        className="text-xl font-bold bg-pink-700 h-16 w-[100%] rounded-lg"
                        type="button"
                        value="M'inscrir"
                    />
                </div>
                <Location></Location>
            </div>
        </div>
    )
}

export default FollowUs
