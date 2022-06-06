import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="flex h-56 w-full items-center justify-center bg-[url('/img/footer_bg.svg')] bg-no-repeat bg-cover">
            <div className='grid grid-cols-3 h-full'>
                <div className='col-start-2'>
                    <div className='flex flex-col justify-around h-full text-white'>
                        <div className='flex flex-row items-center justify-space-around'>
                            <div className='px-8'>Home</div>
                            <div className='px-8'>What we do</div>
                            <div className='px-8'>About us</div>

                        </div>
                        <div className='text-center'>© 2022 BikeCloud. All rights reserved.</div>
                    </div>
                </div>

            </div>

            <div className='flex justify-center items-center'>
                <button
                    className='mt-10 p-3 px-6 border-4 text-white border-white bg-electricGreen rounded-lg baseline font-Poppins font-medium'
                >
                    Get in touch
                </button>
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
        </footer >
    )
}

export default Footer