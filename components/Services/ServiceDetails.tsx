import React from 'react'
import Image from 'next/image'
import Button from '../button'
import { ServiceType, ServicePointersType, ServiceImageType } from '../../types/commonTypes'
type ImageContainerPropTypes = {
    src: string
}





const ImageContainer = ({ obj }: { obj: ServiceImageType }) => {
    return (
        <div className='flex flex-1 md:pr-4 mb-4 md:mb-0'>
            <div className={`w-full h-full flex items-center justify-center ${obj.classes} bg-contain bg-center bg-no-repeat ")]`} style={{ backgroundImage: `url(${obj.src})` }}>
                {/* <img src={obj.src} width={'80%'} className="h-inherit" /> */}
                {/* <img src={obj.src} className="lg:w-456 w-320" /> */}
                {/* <img src={obj.src} className="w-2/3" /> */}
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
        return 'slide-left'
    }
    if (position === 'right') {
        return 'slide-right'
    }
}

const ServiceDetails = ({ arr }: { arr: ServiceType[] }) => {
    // const obj = ServiceJSON[0]

    return (
        <>
            {


                arr.map((serviceObj, index) => {
                    return (
                        <div className={`section-container ${animationClass(serviceObj.image.position)} ${serviceObj.classes}`} id={serviceObj.id || "random_id"}>
                            <div className='flex flex-col lg:flex-row flex-1 h-full'>

                                {serviceObj.image.position === 'left' && <ImageContainer obj={serviceObj.image} />}
                                <div className='flex flex-col flex-1 text-left pl-4'>
                                    <div className='service-title mb-5'>{serviceObj.title}</div>
                                    <div className='text-medium' >{serviceObj.description}</div>
                                    <BulletList lists={serviceObj.pointers} />
                                </div>
                                {serviceObj.image.position === 'right' && <ImageContainer obj={serviceObj.image} />}

                            </div>

                            <div className={`flex w-full  ${alignSection(serviceObj.image.position)}`}>
                                <div className="lg:basis-1/2">
                                    <WorkTogetherSection description={serviceObj.ctaDescription} />
                                </div>
                            </div>

                        </div>
                    )
                })

            }
        </>



    )
}

export default ServiceDetails