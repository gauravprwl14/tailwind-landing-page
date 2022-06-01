import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <div className='bg-onyx flex w-full items-center justify-center mt-16'>
            <div className='section-container pb-14 border-t'>

                <div className='flex flex-row w-full'>
                    <div className='flex-1 items-center justify-center'>


                    </div>
                    <div className='flex-1 items-center justify-center'>
                        <div className='relative'>
                            <div className="absolute -left-20 w-12 ">
                                <Image src="/img/testimonial_quote.svg" alt="testimonial_quote" width="100%" height="30%" />
                            </div>
                            <div className='text-white text-left font-Comfortaa font-bold text-l'>We were running our multi-million dollar company, with remote employees spread across multiple time zones, using manual paperwork. BikeCloud transformed our operations with a beautiful mobile and web solution that integrates with our accounting system. </div>
                            <div className="absolute -right-20 w-12 ">
                                <Image src="/img/testimonial_quote.svg" alt="testimonial_quote" width="100%" height="30%" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='relative'>
                    <div className="absolute -left-32 ">
                        <Image src="/img/quotes.svg" alt="Quotes" width="100%" height="30%" />
                    </div>
                    <div className='text-white font-GloriaHallelujah text-4xl'>Let’s chat about your next project </div>
                    <div className="absolute -right-32 ">
                        <Image src="/img/quotes.svg" alt="Quotes" width="100%" height="30%" />
                    </div>
                </div>
                <div><button className='mt-10 p-3 px-6 pt-2 border border-4 border-black bg-veryLightGray rounded-lg baseline font-Poppins font-medium'> Get in touch</button></div> */}
            </div>
        </div>
    )
}

export default Testimonial