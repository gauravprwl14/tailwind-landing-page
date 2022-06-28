import React from 'react'
import Image from 'next/image'

const NavigationLinks = () => {
    return (
        <div className='flex flex-row items-center justify-space-around'>
            <div className='px-6'>Home</div>
            <div className='px-6'>What we do</div>
            <div className='px-6'>About us</div>
        </div>
    )
}
const ActionButton = () => {
    return (
        <div className='flex justify-center items-center'>
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
        <div className='text-center justify-items-end pb-4'>© 2022 BikeCloud. All rights reserved.</div>
    )
}



const Footer = () => {
    return (
        <footer className="flex w-full items-center justify-center bg-[url('/img/footer_bg.svg')] bg-no-repeat bg-cover dotted-border-green">
            <div className=''>
                <div className='grid md:grid-cols-3 gap-8 pt-8 md:pt-12 auto-rows-fr'>
                    <div className='flex flex-col justify-around text-white md:col-span-2'>
                        <NavigationLinks />
                    </div>
                    <div className='flex flex-col justify-center text-white md:col-span-1 md:row-span-2 '>
                        <ActionButton />
                    </div>
                    <div className='flex flex-col justify-around text-white md:col-span-2'>
                        <CopyRightText />
                    </div>
                </div>







                {/* <a
                className="flex items-center justify-center gap-2"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </a> */}
            </div>
        </footer>
    )
}





// const FooterV1 = () => {
//     return (
//         <footer className="flex w-full items-center justify-center bg-[url('/img/footer_bg.svg')] bg-no-repeat bg-cover">
//             <div className='max-w-6xl mx-auto px-4 sm:px-6'>
//                 <div className='grid sm:grid-cols-2 gap-8 pt-8 md:pt-12 '>
//                     <div className='flex flex-col justify-around text-white'>
//                         <NavigationLinks />
//                     </div>
//                     <div className='flex flex-col justify-around text-white'>
//                         <ActionButton />
//                     </div>
//                     <div className='flex flex-col justify-around text-white'>
//                         <CopyRightText />
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }

export default Footer