import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import JourneySection from '../components/Home/JourneySection'
import CtaSection from '../components/Home/CtaSection'
import ServiceSection from '../components/Home/ServiceSection'
import Testimonial from '../components/Home/Testimonial'

// .v7_671 {
//   width: 100%;
//   max-height: auto;
//   background-repeat: no-repeat;
//   background-position: center center;
//   background-size: cover;
//   opacity: 1;
//   position: absolute;
//   top: 0px;
//   left: 1px;
//   overflow: hidden;
//   z-index: -1;
// }


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Bike Cloud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className="flex flex-col w-full bg-no-repeat bg-center bg-cover bg-[url('/img/header_background_01.svg')] object-contain py-4">


        <Header />


        <section id="header-background" className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center font-Comfortaa'>
          <div className='flex flex-col space-y-4 text-white px-20 items-center justify-center'>
            <div className='text-5xl tracking-tight font-thin leading-tight max-w-4xl'>We help companies build & launch digital transformations </div>
            <div className='text-electricGreen text-4xl tracking-tight'>Cloud-native Software  •  Cloud Migration  •  Cloud Operations </div>
          </div>

        </section>

      </div>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <JourneySection />
        <CtaSection />
        <ServiceSection />
        <Testimonial />

        {/* <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div >
  )
}

export default Home
