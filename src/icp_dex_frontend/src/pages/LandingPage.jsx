import React from 'react'
import Hero from '../components/landingPageComponents/Hero'
import About from '../components/landingPageComponents/About'
import Partnership from '../components/landingPageComponents/Partnership'
import Methods from '../components/landingPageComponents/Methods'
import WhitePaper from '../components/landingPageComponents/WhitePaper'
import LiquidityInfo from '../components/landingPageComponents/LiquidityInfo'
import DialogBox from '../Modals/Dialouge'
import Navbar from '../navbar/Navbar'
import { LandingPageNavbarData } from '../TextData'
import { useState } from 'react'
const LandingPage = () => {

   
    return (
        <div className=''>
            <Navbar NavbarData={LandingPageNavbarData}/>
            <div className='md:mx-8 mx-4'>
                <div className='relative'>
                    <Hero />
                </div>

                <About />
                <LiquidityInfo />
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
