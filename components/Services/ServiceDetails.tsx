import React from 'react'
import Image from 'next/image'
import Button from '../button'






const ImageContainer = ({ obj }) => {
    return (
        <div className='flex-1 pr-4'>
            <div className={`w-full h-full relative items-center ${obj.classes}`}>
                <img src={obj.src} width={'100%'} className="h-inherit" />
            </div>
        </div>
    )
}


const BulletList = ({ lists }) => {
    return (
        <div className='flex my-4'>
            <ul className='text-left '>
                {
                    lists.map((list, index) => {
                        return (
                            <li key={index} className="list-disc mt-5">
                                <div className='text-extra-bold'>{list.title}</div>
                                <div className='mt-5 text-medium'>
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


const ServiceDetails = ({ arr }) => {
    // const obj = ServiceJSON[0]

    return (

        arr.map((serviceObj, index) => {
            return (<>
                <div className='section-container h-841'>
                    <div className='flex flex-row flex-1 h-full'>

                        {serviceObj.image.position === 'left' && <ImageContainer obj={serviceObj.image} />}
                        <div className='flex flex-col flex-1 text-left pl-4'>
                            <div className='service-title mb-5'>{serviceObj.title}</div>
                            <div className='text-medium' >{serviceObj.description}</div>
                            <BulletList lists={serviceObj.pointers} />
                            <div className='flex flex-col justify-center items-center'>
                                <div className='cta-description-title text-center my-4 pb-2'>
                                    {serviceObj.ctaDescription}

                                </div>



                                <Button text="Get in touch" />

                            </div>

                        </div>

                        {serviceObj.image.position === 'right' && <ImageContainer obj={serviceObj.image} />}

                    </div>

                </div >
            </>
            )
        })


    )
}

export default ServiceDetails