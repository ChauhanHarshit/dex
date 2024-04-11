import React from 'react'
import { HeroSection } from '../../TextData'
import GradientButton from '../../buttons/GradientButton'
import BorderGradientButton from '../../buttons/BorderGradientButton'
const Hero = () => {
    return (
        <div className=' h-screen '>

            <div className='flex items-center justify-center text-center h-screen'>
                <div>
                    <div className='font-fahkwang font-[300] text-6xl pb-5'>
                        <span className='text-white'>
                            {HeroSection.HeadLineWordOne}
                        </span>
                        <div>
                            <span className='bg-gradient-to-r from-[#F2A851] via-[#8F7CFF] to-[#003EC6] text-transparent bg-clip-text'>{HeroSection.HeadLineWordTwo}</span>
                            <span className='text-white'> {HeroSection.HeadLineWordThree}</span>
                        </div>
                    </div>
                    <span className='text-white font-cabin'>
                        {HeroSection.Tagline}
                    </span>

                    <div className='flex m-10 gap-4 justify-center'>
                        <GradientButton>
                            Explore Pools
                        </GradientButton>
                        <BorderGradientButton>
                            Connect Wallet
                        </BorderGradientButton>
                    </div>
                </div>
            </div>

         
        </div>
    )
}

export default Hero
