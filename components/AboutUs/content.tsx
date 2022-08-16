import React from 'react'


const headerContent = "An elite team of senior digital transformation leaders"
const description = "We are a boutique firm laser-focused on providing a personalized digital transformation experience. We take on a very limited number of clients, ensuring that we are not overloaded and allowing us to focus on quickly delivering value and results."

const isFunc = (val: any) => {
    return typeof val === 'function'
}

const ExpertiseJSON = [
    {
        title: 'Product Management',
        description: `A cross-functional team with exceptional communication skills that dominates each stage of the product development lifecycle.`,
        pointers: [
            {
                point: 'UX and UI design for mobile and web applications',
                pointers: []
            },
            {
                point: 'Story mapping, iteration planning, sprint planning, and sprint retrospective',
                pointers: []
            },
            {
                point: 'Agile and MVP methodologies and best practices',
                pointers: []
            }
        ]
    },
    {
        title: 'Architecture & Infrastructure',
        description: () => {
            return (
                <div className=''>
                    <div className='mb-3'>
                    Design and lead cloud solution implementations that solve strategic challenges and increase performance, reliability, availability, and scalability.
                    </div>
                    <div className='mb-3'>Enterprise-level solutions architect building mission-critical, high-availability, high-performance, high-scalability cloud solutions.</div>
                    <div className='mb-3'>
                    Experts in implementing Microsoft Azure cloud solutions, including compute, networking, storage, data platforms, monitoring, identity management, and security.
                    </div>
                    {/* <div className='mb-3'>
                        Real-world experience successfully delivering:
                    </div> */}
                </div>
            )
        },
        pointers: [
            {
                point: "API-first architecture"
            },
            {
                point: "Infrastructure-as-Code"
            },
            {
                point: "Microservices and distributed systems"
            },
            {
                point: "Kubernetes deployments"
            },
            {
                point: "Database architecture & implementations"
            },
            {
                point: "Serverless functions for event-driven solutions"
            },
            {
                point: "Monitoring & alerting"
            },
        ]
    },
    {
        title: 'Software & Platforms',
        description: "Experienced in a broad cross-section of languages, platforms and frameworks though always focused on implementing solutions that best solve given problems.",


        pointers: [
            {
                point: 'Specialized in Azure and Azure Government cloud solutions',
                pointers: []
            },
            {
                point: 'Design and build cloud-native software for web, iOS, Android, iPad, desktop, and backend services.',
                pointers: []
            },
            {
                point: 'Senior database architects implementing solutions using PostgreSQL, Redis, MongoDB, MySQL, SQLite, and Firestore.',
                pointers: []
            },
            {
                point: 'Python, Pandas, Django, NodeJS, React, NextJS, Flutter, Dart, PHP, Go, Beego, JavaScript, Typescript, HTML, CSS, Tailwind, Bootstrap.',
                pointers: []
            }
        ]
    },
    {
        title: 'Processes & Systems',
        description: `Experts in every stage of the product development lifecycle including UX and UI design, user story mapping and release planning, sprint planning and delivery, and sprint review and retrospectives.`,
        pointers: [
            {
                point: 'Agile best practices and MVP mindset providing continuously-improving processes that efficiently deliver high-quality solutions while maintaining team health.',
                pointers: []
            },
            {
                point: 'Test driven development and automated testing for both software and infrastructure.',
                pointers: []
            },
            {
                point: 'Continuous integration/continuous deployment, and feature flag progressive delivery pipelines.',
                pointers: []
            },
        ]
    },
]

const BulletList = ({ arr }: { arr: [] }) => {
    return (
        <ul className='ml-4 mt-1'>

            {arr.map((list: any, index) => {
                return (
                    <>
                        <li key={index} className="list-disc">{list.point}</li>
                        {list && list.pointers && list.pointers.length ? <BulletList arr={list.pointers} /> : null}
                    </>
                )
            })}



        </ul>
    )

}


const ExpertiseSection = ({ obj }: { obj: any }) => {
    return (
        <div className='flex flex-row my-10'>
            <div className='about-bullet-pointer-container'>
                <img className='w-full' src="img/bullet_point.svg" />
            </div>

            <div className='w-full'>
                <div className='about-title '> {obj.title}</div>
                <div className='my-2 font-Poppins font-normal text-base leading-6 text-black'> {isFunc(obj.description) ? obj.description() : obj.description}</div>
                <div className='mx-4'>
                    <BulletList arr={obj.pointers} />
                </div>
            </div>
        </div>
    )
}



const Content = () => {

    return (
        <div className='section-container'>
            <div>
                <div className='about-us-title'>
                    {headerContent}
                </div>
                <div className='about-us-description'>
                    {description}
                    {/* {typeof description === 'function' ? description() : description} */}
                </div>
            </div>

            {/* <div className='flex px-4 lg:px-none py-7 flex-col align-baseline text-left'>

                <div className='about-title !text-xl'>
                    Quality Over Quantity
                </div>

                <div className='about-description'>
                    We are not a power-by-the-hour outsourcing shop. We are a boutique firm laser-focused on providing a personalized digital transformation experience. To provide the best service possible, we take on a very limited number of clients, ensuring that we are not overloaded, allowing us to focus on delivering value and results quickly.
                </div>

            </div> */}


            <div className='flex flex-1 flex-col align-middle w-full'>

                {/* <div className='about-title'> Our Expertise </div> */}

                <div className='text-left px-3 '>
                    {ExpertiseJSON.map((obj, index) => {
                        const alignLeft = index % 2 === 0

                        return (
                            <div className={`flex md:mb-16 mb-2 ${alignLeft ? 'justify-start' : 'justify-end'}`}>
                                <div className='md:w-1/2 w-full'>
                                    <ExpertiseSection obj={obj} key={index} />
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

export default Content
