import React from 'react'
import Image from 'next/image'
// style={{ width: '88px', height: '88px' }}

const ProfileIcon = ({ src }) => {
    return (
        <div className='mr-4 w-24 h-24' >
            <Image src={src} alt="Profile Icon" width="100%" height="100%" />
        </div>
    )
}

const ProfileDetails = ({ name, designation }) => {
    return (
        <div className='text-left'>
            <div className=' text-white h1 mb-2'>{name}</div>
            <div className='text-electricGreen designation-heading'>{designation}</div>
        </div>
    )
}


const Testimonial = ({ userDetails, userTestimonial }) => {

    return (
        <div className='bg-onyx flex w-full items-center justify-center mt-16 dotted-border'>
            <div className='section-container pb-14'>

                <div className='flex flex-row w-full'>
                    <div className='flex flex-1 items-center justify-center'>
                        <div className='flex flex-row items-center justify-center'>
                            <ProfileIcon src={userDetails.profilePic} />
                            <ProfileDetails name={userDetails.name} designation={userDetails.designation} />
                        </div>
                    </div>
                    <div className='flex-1 items-center justify-center'>
                        <div className='relative'>
                            <div className="absolute -left-20 w-12 ">
                                <Image src="/img/testimonial_quote.svg" alt="testimonial_quote" width="100%" height="30%" />
                            </div>
                            <div className='h1 text-white text-left'>{userTestimonial}</div>
                            <div className="absolute -right-10 w-12 ">
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