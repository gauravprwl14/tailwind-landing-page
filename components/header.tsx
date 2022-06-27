import React from 'react'
import Link from 'next/link'
import { ROUTES } from '../utility/routes'

type HeaderType = {
    title: string;
    description: string;
    bgContainer: string;
    headerContainer: string;
}

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
                    <a href="/" className="text-white">Home</a>
                    <a href="/services" className="text-white">What we do</a>
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
                    <a href="/">Home</a>
                    <a href="/services">What we do</a>
                    <a href="#">About Us</a>
                </div>
            </div>
        </nav>
    )
}

export const HeaderContainer = ({ title, description, bgContainer, headerContainer }: HeaderType) => {
    return (
        <div className={`flex flex-col h-full w-full md:pb-8  bg-no-repeat bg-cover bg-[url('/img/header_background_01.svg')] object-contain ${bgContainer}`}>
            <Header />

            <section id="header-background" className={`flex w-full flex-1 flex-col items-center  px-4 text-center font-Comfortaa ${headerContainer}`}>
                <div className='flex flex-col max-w-screen-xl  space-y-4 text-white  items-center justify-center'>
                    <div className='text-3xl  lg:text-5xl tracking-tight font-thin leading-tight max-w-4xl'>{title} </div>
                    <div className='text-xl md:text-2xl lg:text-3xl text-electricGreen  tracking-tight'>{description} </div>
                </div>

            </section>


            {/* <section id="header-background" className={`flex w-full flex-1 flex-col items-center px-20 text-center font-Comfortaa ${headerContainer}`}>
                <div className='flex flex-col space-y-4 text-white px-20 items-center justify-center'>
                    <div className='text-5xl tracking-tight font-thin leading-tight max-w-4xl'>{title} </div>
                    <div className='text-electricGreen text-3xl tracking-tight'>{description} </div>
                </div>

            </section> */}

        </div>
    )
}


export default HeaderContainer