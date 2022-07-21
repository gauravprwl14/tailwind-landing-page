import React from 'react'
import Link from 'next/link'
import { ROUTES } from '../utility/routes'

type HeaderType = {
    title: string;
    description: string;
    bgContainer: string;
    headerContainer: string;
    titleStyle?: String;
}



const Header = () => {
    return (
        <div className='relative my-6 mx-16'>
            <div className=" flex flex-1 justify-center">
                <div className="space-x-6 max-w-screen-xl -ml-4 py-4">
                    <a href={ROUTES.home} className="text-white hover:text-electricGreen">Home</a>
                    <a href={ROUTES.services} className="text-white hover:text-electricGreen">What we do</a>
                    <a href={ROUTES.aboutUs} className="text-white hover:text-electricGreen">About Us</a>
                </div>
            </div>
            <div className='absolute top-0 right-0'>
                <Link href={ROUTES.aboutUs}>
                    {/* <a href="#" className="hidden p-3 px-6 pt-2 text-veryLightGray bg-electricGreen rounded-lg baselin md:block">Contact Us</a> */}
                    <button className="hidden mt-2 footer-action-btn-container md:block min-w-9">Contact Us</button>
                    {/* hover:bg-green-300 */}
                </Link>
            </div>

        </div>
    )
}




export const HeaderContainer = ({ title, description, bgContainer, headerContainer, titleStyle = "" }: HeaderType) => {
    console.log('%c titleStyle ', 'background: aqua; color: black', { titleStyle });
    return (
        <div className={`header-wrapper ${bgContainer}`}>
            <Header />

            <section id="header-background" className={`flex w-full flex-1 flex-col items-center  px-4 text-center font-Comfortaa ${headerContainer}`}>
                <div className='flex flex-col max-w-screen-xl space-y-4 text-white  items-center justify-center'>
                    <div className={`text-3xl  lg:text-extra-large tracking-tight font-thin leading-tight max-w-4xl ${titleStyle}`}>{title} </div>
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