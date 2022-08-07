import React, { useEffect } from 'react'
import Header from '../components/header'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import ServiceDetails from '../components/Services/ServiceDetails'
import Testimonial from '../components/Home/Testimonial'
import KeyValues from '../components/Services/KeyValues'
import CtaSection from '../components/Home/CtaSection'
import Footer from '../components/Footer'
import { isMobile } from '../utility/helper'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

const title = 'Personalized digital transformations'
const description = 'We take your project from idea to launch'


const ServiceJSON = [
    {
        image: {
            src: '/img/cloud_native_service.svg',
            position: 'left',
            classes: 'items-center'
        },
        id: 'Cloud-Native-Software',
        title: 'Cloud-Native Software',
        description: 'Build beautiful software that perfectly solves your business challenges.',
        cta: {
            description: 'Let’s work together on your next software project',
            style: ""
        },
        pointers: [
            {
                title: 'Beautiful cloud-native applications for mobile, web, and desktop',
                description: 'Whether you need an iPhone, Android or iPad app, or you need a  web or desktop app, we build beautiful, functional apps that your users will love.'
            },
            {
                title: 'Rebuild legacy applications to be cloud-native',
                description: 'Rebuild an existing system using the latest cloud-native architecture and standards.'
            },
            {
                title: 'Enterprise-level backend software for cloud-native services',
                description: 'As senior solution architects, we design and build backend architecture, infrastructure, and software that matches perfectly with your unique challenges.'
            }
        ]
    },

    {
        image: {
            src: '/img/cloud_migration.svg',
            position: 'right',
            classes: 'items-center'
        },
        id: 'Cloud-Migration',
        title: 'Cloud Migration',
        description: 'Move your legacy systems to the cloud and increase performance, reliability, availability, and scalability.',
        cta: {
            description: 'Let’s work together on your cloud migration',
            style: ""
        },
        pointers: [
            {
                title: 'Move existing on-premise systems to the cloud (lift & shift)',
                description: 'Keep your existing systems while taking advantage of the benefits of being in the cloud, often the quickest way to start a cloud migration.'
            },
            {
                title: 'Rebuild existing systems using the latest cloud-native architecture and standards',
                description: 'Instead of keeping old technology, leverage all the power and benefits of the cloud by rebuilding your legacy systems using cloud-native architecture.'
            },
            {
                title: 'Shift stand-alone workloads and functions to the cloud ',
                description: 'Move workloads, event-drive functions, automation, and processes, both scheduled and non-scheduled, to the cloud.'
            }
        ]
    },

    {
        image: {
            src: '/img/cloud_operation.svg',
            position: 'left',
            classes: 'items-baseline cloud-operation-img-container md:!bg-auto'
        },
        id: 'Cloud-Operations',
        title: 'Cloud Operations',
        classes: "",
        description: 'Focus on core competencies and enjoy the peace of mind of letting us manage your cloud infrastructure.',
        cta: {
            description: 'Let us manage your cloud infrastructure',
            style: ""
        },
        pointers: [
            {
                title: 'Fully managed hosting service on Microsoft Azure',
                description: 'We handle the day-to-day management of your cloud infrastructure including capacity management, security & compliance, cost optimization, data management & backups, and software updates.'
            },
            {
                title: 'Systems architecture design and deployment',
                description: 'We design your cloud architecture and infrastructure, handle the implementation, and deliver a production-ready deployment for you to manage, or that we can manage for you.'
            }
        ]
    }
]


const TestimonialJSON = {
    userDetails: {
        name: 'Charles Mon',
        designation: 'Product Manager - RocketGate',
        profilePic: '/img/profile_icon.svg'
    },
    testimonial: "I have worked with the BikeCloud team on a few projects in the past and their JUMP system and approach...is the best in the business."
}



const Services = ({ mobileDevice }: any) => {
    useEffect(() => {
        new WOW.WOW({
        }).init();

    })

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
                <title>Bike Cloud</title>
                <link rel="icon" href="/favicon.ico" />
                <script src="//code.tidio.co/o15ez6py54cdrz9m7thr2o7g77amftv0.js" async></script>
            </Head>
            <div className="w-full h-80 lg:h-96" >

                <Header
                    title={title}
                    description={description}
                    bgContainer="bg-bottom"
                    headerContainer="mt-3"
                    titleStyle="mb-2"
                />
            </div>

            <main className='page-container'>


                <ServiceDetails
                    arr={ServiceJSON}
                />
                {/* <CtaSection /> */}
                <KeyValues />

            </main>
            <Footer />
        </div>
    )
}


Services.getInitialProps = ({ req }: any) => {
    const mobileDevice = isMobile({ ua: req })


    return {

        mobileDevice
    }
}


export default Services