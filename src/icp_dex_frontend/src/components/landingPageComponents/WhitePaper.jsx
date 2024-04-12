import React from 'react'
import GradientButton from '../../buttons/GradientButton'
import { NavbarData } from '../../TextData'
import { LandingPageData } from '../../TextData'
const whitePaper = () => {
    return (
        <div className='md:mx-20 h-screen' id={`${NavbarData.Links[3].LinkId}`}>

            <div className='w-full bg-gradient-to-r from-[#05071D] via-[#546093] to-[#05071D] border border-1 rounded-lg h-1/2 flex flex-col justify-evenly text-center text-white '>



                <div className='font-fahkwang font-[500] md:text-6xl text-4xl'>
                    {LandingPageData.WhitePaperText.Heading}
                </div>

                <div className='text-xl font-[400] font-cabin leading-6'>
                    {LandingPageData.WhitePaperText.Description}
                </div>

                <div>
                    <GradientButton>{LandingPageData.WhitePaperText.ButtonText}</GradientButton>
                </div>

            </div>
        </div>
    )
}

export default whitePaper
