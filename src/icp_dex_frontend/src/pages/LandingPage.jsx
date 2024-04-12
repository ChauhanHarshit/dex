import React from 'react'
import Hero from '../components/landingPageComponents/Hero'
import About from '../components/landingPageComponents/About'
import Partnership from '../components/landingPageComponents/Partnership'
import Methods from '../components/landingPageComponents/Methods'
import WhitePaper from '../components/landingPageComponents/WhitePaper'
const LandingPage = () => {
    return (
        <div className='bg-[#0B0B0B]'>
            <div className='md:mx-8 mx-4'>
                <div className='relative'>
                    <Hero />
                </div>

                <About />
                <Partnership />
                <Methods />

                <div className='mt-4'>
                    <WhitePaper />
                </div>
            </div>
        </div>
    )
}

export default LandingPage
