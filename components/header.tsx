import React from 'react'
import Link from 'next/link'
import { ROUTES } from '../utility/routes'

const Header = () => {
    return (
        // <!-- Navbar -- >
        <nav className="relative container mx-auto p-6">
            {/* <!-- Flex container --> */}
            <div className="flex items-center justify-between">
                {/* <!-- Logo --> */}

                <div className="pt-2" />

                {/* <!-- Menu Items --> */}

                <div className="space-x-6 md:fle">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">What we do</a>
                    <a href="#" className="text-white">About Us</a>
                </div>
                {/* <!-- Button --> */}
                <Link href={ROUTES.contactUs}>
                    <a href="#" className="hidden p-3 px-6 pt-2 text-veryLightGray bg-electricGreen rounded-lg baselin md:block">Contact Us</a>
                    {/* hover:bg-green-300 */}
                </Link>


                {/* <!-- Hamburger Icon --> */}
                <button
                    id="menu-btn"
                    className="block hamburger md:hidden focus:outline-none"
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

            {/* <!-- Mobile Menu --> */}
            <div className="md:hidden">
                <div
                    id="menu"
                    className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                >
                    <a href="#">Home</a>
                    <a href="#">What we do</a>
                    <a href="#">About Us</a>
                </div>
            </div>
        </nav>
    )
}


export default Header