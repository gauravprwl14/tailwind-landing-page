

import React from 'react'
import Image from 'next/image'



export const CtaSection = () => {
    return (
        <div className='bg-electricGreen flex w-full items-center justify-center'>
            <div className='section-container h-64 border-t'>
                <div className='relative'>
                    {/* <div className="absolute -left-32 ">
                        <Image src="/img/quotes.svg" alt="Quotes" width="100%" height="30%" />
                    </div> */}
                    <div className='cta-quote-left text-white font-GloriaHallelujah text-4xl cta-quote-right'>Let’s chat about your next project </div>
                    {/* <div className="absolute -right-32 ">
                        <Image src="/img/quotes.svg" alt="Quotes" width="100%" height="30%" />
                    </div> */}
                </div>
                <div><button className='mt-10 p-3 px-6 pt-2 border-4 border-black bg-veryLightGray hover:bg-gray-200 rounded-lg baseline font-Poppins font-medium'> Get in touch</button></div>
            </div>
        </div>
    )
}

export default CtaSection