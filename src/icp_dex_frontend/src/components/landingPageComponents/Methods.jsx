import React from 'react'
import MethodsImageOne from '../../assets/images/MethodsImageOne.png'
import MethodsImageTwo from '../../assets/images/MethodsImageTwo.png'
import { LandingPageData } from '../../TextData'
import GradientSpan from '../../CustomSpan/GradientSpan'
import GradientButton from '../../buttons/GradientButton'

const Methods = () => {
    return (
        <div className='mt-16 h-screen mx-20'>
            <div className='flex justify-evenly'>

                <div className='w-1/2 ml-6 items-center'>
                    <img src={MethodsImageOne} alt="" />
                </div>

                <div className='w-1/2 flex flex-col justify-evenly font-fahkwang text-4xl p-4'>
                    <div>
                        <div className='flex gap-2'>
                            <span className='text-white'>{LandingPageData.MethodsText.UpperSection.HeadingWordOne}</span>
                            <GradientSpan>{LandingPageData.MethodsText.UpperSection.HeadingWordTwo}</GradientSpan>
                        </div>
                        <span className='text-white'>{LandingPageData.MethodsText.UpperSection.HeadingWordTwo}</span>
                    </div>

                    <div className='font-cabin font-[400] text-xl leading-6 text-white'>
                        {LandingPageData.MethodsText.UpperSection.Description}
                    </div>
                    <div>
                        <GradientButton>{LandingPageData.MethodsText.UpperSection.ButtonText}</GradientButton>
                    </div>
                </div>

            </div>

            <div className='flex justify-between'>

                <div className='w-1/2  flex flex-col justify-evenly font-fahkwang text-4xl p-4 '>
                    <div>
                        <div className='flex gap-2'>
                            <span className='text-white'>{LandingPageData.MethodsText.LowerSection.HeadingWordOne}</span>
                            <GradientSpan>{LandingPageData.MethodsText.LowerSection.HeadingWordTwo}</GradientSpan>
                        </div>
                    </div>

                    <div className='font-cabin font-[400] text-xl leading-6 text-white'>
                        {LandingPageData.MethodsText.LowerSection.Description}
                    </div>
                    <div>
                        <GradientButton>{LandingPageData.MethodsText.LowerSection.ButtonText}</GradientButton>
                    </div>
                </div>

                <div className='w-1/2 ml-16 items-end'>
                    <img src={MethodsImageTwo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Methods
