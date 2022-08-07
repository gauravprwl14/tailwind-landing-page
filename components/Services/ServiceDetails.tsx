import React, { useEffect } from 'react'
import CTASection from '../Home/CtaSection'
import { isMobile } from '../../utility/helper'
import Button from '../button'
import { ServiceType, ServicePointersType, ServiceImageType } from '../../types/commonTypes'
type ImageContainerPropTypes = {
    src: string
}


const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null




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
        <div className='flex ml-4 mt-1'>
            <ul className='text-left'>
                {
                    lists.map((list, index) => {
                        return (
                            <li key={index} className="list-disc mt-3">
                                <div className='card-description !mb-2'>{list.title}</div>
                                <p className='bullet-point-text !font-normal'>
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




const alignSection = (position: string) => {
    if (position === 'left') {
        return 'justify-end'
    }
    if (position === 'right') {
        return 'justify-start'
    }
}

const animationClass = (position: string) => {
    if (isMobile(null)) {
        return ""
    }
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
                                <div className={`grid grid-cols-12 lg:flex-row ${index === 2 ? 'min-h-[382px]' : 'min-h-[420px]'}`}>


                                    {serviceObj.image.position === 'left' && (
                                        <div className='md:col-span-5 col-span-12 min-h-[266px]'>
                                            <ImageContainer obj={serviceObj.image} position='right' />
                                        </div>
                                    )
                                    }


                                    <div className='md:col-span-7  md:ml-16 col-span-12'>
                                        <div className={`flex flex-col  text-left pl-4  wow animate__animated  ${animationClass(serviceObj.image.position)}`}>
                                            {/* only in case of 1st section give some margin top */}
                                            <div className={`w-full ${index === 0 ? 'mt-4' : ''}`}>
                                                <div className='card-title'>{serviceObj.title}</div>
                                                <div className='card-description !-mb-0' >{serviceObj.description}</div>
                                                <div className='mx-2'>
                                                    <BulletList lists={serviceObj.pointers} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {serviceObj.image.position === 'right' && (
                                        <div className='md:col-span-5 col-span-12 min-h-[266px]'>
                                            <ImageContainer obj={serviceObj.image} position='left' />
                                        </div>
                                    )
                                    }
                                </div>

                            </div>

                            <div className={`flex w-full  ${alignSection(serviceObj.image.position)}`}>
                                <CTASection text={serviceObj.cta.description} />
                            </div>

                        </div>

                    )
                })

            }
        </>



    )
}

export default ServiceDetails