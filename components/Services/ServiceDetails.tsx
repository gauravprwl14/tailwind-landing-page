import React, { useEffect } from 'react'
import Image from 'next/image'
import Button from '../button'
import { ServiceType, ServicePointersType, ServiceImageType } from '../../types/commonTypes'
type ImageContainerPropTypes = {
    src: string
}


const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


console.log('%c WOW ', 'background: lime; color: black', { WOW });


const CTASection = ({ description, style }: { description: String; style: String; }) => {
    return (
        <div className='bg-electricGreen flex w-full items-center justify-center'>
            <div className='section-container h-56 border-t relative !pt-11'>
                <div className='service-page-cta-quote-left service-page-cta-quote-right'>
                    <div className={`text-white font-GloriaHallelujah text-5xl leading-12 tracking-tightest ${style}`}> {description}</div>
                </div>
                <div><button className='mt-10 p-3 px-6 pt-2 border-4 border-black bg-veryLightGray hover:bg-gray-200 rounded-lg baseline font-Poppins font-medium'> Get in touch</button></div>
            </div>
        </div>
    )
}


const ImageContainer = ({ obj, position }: { obj: ServiceImageType, position: string }) => {
    return (
        <div className={`w-full h-full md:mr-16 mb-4 md:mb-0 wow animate__animated ${animationClass(position)}`}>
            <div className={`w-full h-full flex items-center justify-center bg-contain bg-center bg-no-repeat ${obj.classes}  ")]`} style={{ backgroundImage: `url(${obj.src})` }}>
            </div>
        </div>
    )
}





const BulletList = ({ lists }: { lists: ServicePointersType[] }) => {
    return (
        <div className='flex mt-8 mb-8'>
            <ul className='text-left '>
                {
                    lists.map((list, index) => {
                        return (
                            <li key={index} className="list-disc mt-3">
                                <div className='text-extra-bold'>{list.title}</div>
                                <p className='mt-2 text-medium'>
                                    {list.description}
                                </p>
                            </li>
                        )

                    })
                }
            </ul>
        </div>
    )
}

const WorkTogetherSection = ({ description }: { description: String }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='cta-description-title text-center my-4 pb-2'>
                {description}
            </div>
            <Button text="Get in touch" />
        </div>
    )
}




const alignSection = (position: string) => {
    if (position === 'left') {
        return 'justify-end'
    }
    if (position === 'right') {
        return 'justify-start'
    }
}

const animationClass = (position: string) => {
    if (position === 'left') {
        return 'animate__fadeInLeft'
    }
    if (position === 'right') {
        return 'animate__fadeInRight'
    }
}



const ServiceDetails = ({ arr }: { arr: ServiceType[] }) => {
    // const obj = ServiceJSON[0]

    useEffect(() => {
        new WOW.WOW({
        }).init();

    })

    return (
        <>
            {


                arr.map((serviceObj, index) => {
                    return (
                        <div className={`flex w-full items-center justify-center flex-col ${serviceObj.classes}`} id={serviceObj.id || "random_id"} key={index}>
                            <div className='section-container px-12 '>
                                <div className={`grid grid-cols-12 lg:flex-row ${index === 2 ? 'min-h-[542px]' : 'min-h-[642px]'}`}>


                                    {serviceObj.image.position === 'left' && (
                                        <div className='col-span-4'>
                                            <ImageContainer obj={serviceObj.image} position='right' />
                                        </div>
                                    )
                                    }


                                    <div className='col-span-8  ml-16'>
                                        <div className={`flex flex-col  text-left pl-4  wow animate__animated  ${animationClass(serviceObj.image.position)}`}>
                                            <div className='w-full'>
                                                <div className='service-title mb-5'>{serviceObj.title}</div>
                                                <div className='text-medium' >{serviceObj.description}</div>
                                                <BulletList lists={serviceObj.pointers} />
                                            </div>
                                        </div>
                                    </div>
                                    {serviceObj.image.position === 'right' && (
                                        <div className='col-span-4'>
                                            <ImageContainer obj={serviceObj.image} position='left' />
                                        </div>
                                    )
                                    }
                                </div>

                            </div>

                            <div className={`flex w-full  wow animate__animated animate__fadeInLeft ${alignSection(serviceObj.image.position)}`}>
                                {/* <div className="lg:basis-1/2">
                                    <WorkTogetherSection description={serviceObj.ctaDescription} />
                                </div> */}
                                <CTASection description={serviceObj.cta.description} style={serviceObj.cta.style} />
                            </div>

                        </div>

                    )
                })

            }
        </>



    )
}

export default ServiceDetails