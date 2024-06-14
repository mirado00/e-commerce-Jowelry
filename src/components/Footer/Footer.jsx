import React from 'react'
import Partnership from './Partnership'
import FollowUs from './FollowUs'
import { FooterLow, Footerlink } from './dataItemFooter'
import { space } from 'postcss/lib/list'

function Footer() {
    return (
        <div className="pb-2 overflow-hidden">
            <FollowUs></FollowUs>
            <Partnership></Partnership>
        </div>
    )
}

export default Footer
