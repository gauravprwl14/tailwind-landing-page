import React from 'react'
import Image from 'next/image'

const NavigationLinks = () => {
    return (
        <div className='flex flex-row items-center justify-center cursor-pointer'>
            <div className='px-6 hover:text-electricGreen'>Home</div>
            <div className='px-6 hover:text-electricGreen'>What we do</div>
            <div className='px-6 hover:text-electricGreen'>About us</div>
        </div>
    )
}
const ActionButton = () => {
    return (
        <div className='flex justify-center lg:justify-end items-center'>
            <button
                className='mt-auto p-3 px-6 border-4 text-white border-white bg-electricGreen rounded-lg baseline font-Poppins font-medium'
            >
                Get in touch
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