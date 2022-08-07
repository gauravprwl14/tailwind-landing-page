import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from '../utility/routes'
import { handleGetInTouch } from '../utility/helper'

const NavigationLinks = () => {
    return (
        <div className='flex flex-row items-center justify-center cursor-pointer'>
            <Link href={ROUTES.home}><div className='px-6 hover:text-electricGreen'>Home</div></Link>
            <Link href={ROUTES.services}><div className='px-6 hover:text-electricGreen'>What we do</div></Link>
            <Link href={ROUTES.aboutUs}><div className='px-6 hover:text-electricGreen'>About us</div></Link>
        </div>
    )
}
const ActionButton = () => {
    return (
        <div className='flex justify-center lg:justify-end items-center'>
            <button
                className='footer-action-btn-container hover:bg-electricGreen300'
                onClick={handleGetInTouch}
            >
                Get in Touch
            </button>
        </div>
    )
}
const CopyRightText = () => {
    return (
        <div className='text-center justify-items-end '>© 2022 BikeCloud. All rights reserved.</div>
    )
}



const Footer = () => {
    return (
        <footer className="flex w-full items-center justify-center bg-[url('/img/footer_bg.svg')] bg-[#303030] bg-no-repeat bg-cover dotted-border-green">
            <div className='flex-1 flex-col py-6 lg:py-12'>
                <div className='justify-center text-white'>
                    <NavigationLinks />
                </div>
                <div className='text-white my-4 lg:mt-6 lg:mr-40'>
                    <ActionButton />
                </div>
                <div className='justify-center text-white'>
                    <CopyRightText />
                </div>
            </div>
        </footer>
    )
}






export default Footer