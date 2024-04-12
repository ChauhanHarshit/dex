import React, { useState, useEffect } from 'react'
import { LandingPageData } from '../../TextData'
import GradientButton from '../../buttons/GradientButton'
import BorderGradientButton from '../../buttons/BorderGradientButton'
import Flow from '../../assets/images/Flow.json'
const Hero = () => {
    return (
        <div className=' h-screen '>

            <div className='flex items-center justify-center text-center h-screen'>
                <div>
                    <div className='font-fahkwang font-[300] md:text-6xl text-4xl pb-5 m-2 md:m-0'>
                        <span className='text-white'>
                            {LandingPageData.HeroSection.HeadLineWordOne}
                        </span>
                        <div>
                            <span className='bg-gradient-to-r from-[#F2A851] via-[#8F7CFF] to-[#003EC6] text-transparent bg-clip-text'>{LandingPageData.HeroSection.HeadLineWordTwo}</span>
                            <span className='text-white'> {LandingPageData.HeroSection.HeadLineWordThree}</span>
                        </div>
                    </div>
                    <span className='text-white font-cabin text-lg'>
                        {LandingPageData.HeroSection.Tagline}
                    </span>

                    <div className='flex mt-5 gap-4 justify-center'>
                        <GradientButton>
                            {LandingPageData.HeroSection.ExploreButton}
                        </GradientButton>
                        <BorderGradientButton>
                            {LandingPageData.HeroSection.ConnectButton}
                        </BorderGradientButton>
                    </div>
                </div>
            </div>


            <div className='text-center'>
                <div className='font-cabin font-[400] leading-5 text-lg text-white'>
                    {LandingPageData.HeroSection.BottomLine}
                </div>
            </div>
        </div>
    )
}

export default Hero
