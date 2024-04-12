import React from 'react'
import Hero from '../components/landingPageComponents/Hero'
import About from '../components/landingPageComponents/About'
import Partnership from '../components/landingPageComponents/Partnership'
import Methods from '../components/landingPageComponents/Methods'
import WhitePaper from '../components/landingPageComponents/WhitePaper'
const LandingPage = () => {
    return (
        <div className='bg-[#0B0B0B]'>
            <div className='mx-8'>
                <div className='relative'>
                    <Hero />
                </div>

                <About />
                <Partnership />
                <Methods />
                <WhitePaper />
            </div>
        </div>
    )
}

export default LandingPage
