import React, { useEffect } from 'react'
import Image from 'next/image'
import CtaSection from '../Home/CtaSection'
import Button from '../button'
import { ServiceType, ServicePointersType, ServiceImageType } from '../../types/commonTypes'
type ImageContainerPropTypes = {
    src: string
}


const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


console.log('%c WOW ', 'background: lime; color: black', { WOW });


const ImageContainer = ({ obj, position }: { obj: ServiceImageType, position: string }) => {
    return (
        <div className={`flex flex-1 md:pr-4 mb-4 md:mb-0 wow animate__animated ${animationClass(position)}`}>
            <div className={`w-full h-full flex items-center justify-center ${obj.classes} bg-contain bg-center bg-no-repeat ")]`} style={{ backgroundImage: `url(${obj.src})` }}>
            </div>
        </div>
    )
}


const BulletList = ({ lists }: { lists: ServicePointersType[] }) => {
    return (
        <div className='flex my-4'>
            <ul className='text-left '>
                {
                    lists.map((list, index) => {
                        return (
                            <li key={index} className="list-disc mt-5">
                                <div className='text-extra-bold'>{list.title}</div>
                                <div className='mt-2 text-medium'>
                                    {list.description}
                                </div>
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
                        <div className={`w-full ${serviceObj.classes}`} id={serviceObj.id || "random_id"}>
                            <div className='section-container'>
                                <div className='flex flex-col lg:flex-row'>

                                    {serviceObj.image.position === 'left' && <ImageContainer obj={serviceObj.image} position='right' />}
                                    <div className={`flex flex-col flex-1 text-left pl-4 wow animate__animated  ${animationClass(serviceObj.image.position)}`}>
                                        <div className='service-title mb-5'>{serviceObj.title}</div>
                                        <div className='text-medium' >{serviceObj.description}</div>
                                        <BulletList lists={serviceObj.pointers} />
                                    </div>
                                    {serviceObj.image.position === 'right' && <ImageContainer obj={serviceObj.image} position='left' />}

                                </div>
                            </div>

                            <div className={`flex w-full  wow animate__animated animate__fadeInLeft ${alignSection(serviceObj.image.position)}`}>
                                {/* <div className="lg:basis-1/2">
                                    <WorkTogetherSection description={serviceObj.ctaDescription} />
                                </div> */}
                                <CtaSection />
                            </div>

                        </div>
                    )
                })

            }
        </>



    )
}

export default ServiceDetails