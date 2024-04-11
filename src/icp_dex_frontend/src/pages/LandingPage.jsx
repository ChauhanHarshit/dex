import React from 'react'
import Hero from '../components/landingPageComponents/Hero'
import About from '../components/landingPageComponents/About'
import Partnership from '../components/landingPageComponents/Partnership'
import Methods from '../components/landingPageComponents/Methods'
const LandingPage = () => {
    return (
        <div className='bg-[#000711]'>
            <div className='mx-8'>
                <div className='relative'>
                    <Hero />
                </div>

                <About />
                <Partnership />
                <Methods />
            </div>
        </div>
    )
}

export default LandingPage
