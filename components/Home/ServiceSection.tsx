import React from 'react'

type MainFeaturesType = {
    text: string
}

type CardType = {
    title: string;
    description: string;
    mainFeatures: MainFeaturesType[]
}


const CardJSON = [
    {
        title: 'Cloud-Native Software',
        description: 'Build beautiful software that perfectly solves your business challenges.',
        mainFeatures: [
            {
                text: 'Beautiful cloud-native applications for mobile, web, and desktop.'
            },
            {
                text: 'Rebuild legacy applications to be cloud-native.'
            },
            {
                text: 'Enterprise-level backend software for cloud-native services. '
            },
        ]

    },
    {
        title: 'Cloud Migration',
        description: 'Move your legacy systems to the cloud and increase performance, reliability, availability, and scalability.',
        mainFeatures: [
            {
                text: 'Migrate legacy systems, as-is, to the clouds..'
            },
            {
                text: 'Rebuild existing systems using cloud-native architecture & standards.'
            },
            {
                text: 'Move stand-alone workloads to the cloud.'
            },
        ]

    },
    {
        title: 'Cloud Operations',
        description: 'Focus on your core competencies and enjoy the peace of mind of letting us manage your cloud infrastructure.',
        mainFeatures: [
            {
                text: 'Fully managed hosting service on Microsoft Azure, Heroku, AWS, or DigitalOcean.'
            },
            {
                text: 'Systems architecture design and deployment.'
            },
        ]

    }
]

const Card = ({ cardObj }: { cardObj: CardType }) => {
    const obj = cardObj
    return (
        <div className='flex flex-col items-center relative overflow-hidden  mt-4 lg:mt-0 flex-1 mx-3'>
            <div className=''>
                <div className='absolute top-0 left-2 right-0 mx-2 '>
                    <img src="img/top_horizontal_line.svg" />
                </div>
                <div className='absolute -bottom-0 left-3 right-3'>
                    <img src="img/bottom_horizontal_line.svg" />
                </div>
                <div className='absolute left-0 top-1 '>
                    <img src="img/left_vertical_line.svg" />
                </div>
                <div className='absolute right-0 top-1 left-auto'>
                    <img src="img/right_vertical_line.svg" />
                </div>
            </div>

            <div className='py-8 px-5 flex flex-col flex-1'>

                <div className='card-title'>
                    {obj.title}
                </div>
                <div className='card-description'>
                    {obj.description}
                </div>
                <div className='pb-4'>
                    {obj.mainFeatures.map((pointer, index) => {
                        return (
                            <div key={index} className="pointer-container py-2">
                                <div className='bullet-image-container-narrow'>
                                    <img className='max-w-none' src="img/bullet_point.svg" />
                                </div>
                                <div className='bullet-point-text pl-3 '>{pointer.text}</div>
                            </div>

                        )
                    })}
                </div>
                <div className='flex flex-row justify-center flex-1 items-end'>
                    <div className='p-3 px-6 pt-2 text-veryLightGray bg-electricGreen rounded-lg w-auto inline-block'>
                        <div className='flex flex-row '>
                            Learn more <img className='ml-2' src="img/right_arrow.svg" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const CardContainer = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row'>
                {
                    CardJSON.map((cardObject) => {
                        return (<Card cardObj={cardObject} />)
                    })
                }
            </div>
        </div>
    )
}


const ServiceSection = () => {
    return (
        <div className='section-container'>

            <div className='title'>Take a journey with us  </div>
            <div className='description'>We are specifically focused on launching cloud-native projects. Our high-performance team will design, build, and launch the perfect solution for your unique challenges.  </div>

            <div>
                <CardContainer />
            </div>

        </div>
    )
}

export default ServiceSection