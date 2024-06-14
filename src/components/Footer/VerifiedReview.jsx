import React from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import { CiYoutube } from 'react-icons/ci'
import { SiInstagram } from 'react-icons/si'
import { FaPinterestP } from 'react-icons/fa'

function VerifiedReview() {
    return (
        <div className="px-20 py-4 space-y-3 ">
            <hr className="" />
            <div className="flex justify-between items-center px-3">
                <h1 className="text-2xl ">Suivez-nous</h1>
                <div className="flex items-center gap-10 text-2xl">
                    <SiInstagram></SiInstagram>
                    <GrFacebookOption></GrFacebookOption>
                    <CiYoutube></CiYoutube>
                    <FaPinterestP></FaPinterestP>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default VerifiedReview
