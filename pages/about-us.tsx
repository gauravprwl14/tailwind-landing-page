import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/Footer'
import Content from '../components/AboutUs/content'

const title = 'BikeCloud'
const description = 'A boutique firm focused on delivering quality'



const AboutUs: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
                <title>Bike Cloud</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full h-80  lg:h-96" >
                <Header
                    title={title}
                    description={description}
                    bgContainer="bg-bottom"
                    headerContainer="mt-3 leading-5"
                />
            </div>

            <main className="page-container" >
                <Content />
            </main>

            <Footer />

            {/* <footer className="mt-10 flex h-24 w-full items-center justify-center bg-[url('/img/footer_bg.svg')]"> */}

        </div >
    )
}

export default AboutUs