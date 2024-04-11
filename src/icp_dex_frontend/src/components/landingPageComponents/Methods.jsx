import React from 'react'
import MethodsImageOne from '../../assets/images/MethodsImageOne.png'
import MethodsImageTwo from '../../assets/images/MethodsImageTwo.png'
import { MethodsText } from '../../TextData'
import GradientSpan from '../../CustomSpan/GradientSpan'


const Methods = () => {
    return (
        <div className='mt-16 h-screen mx-20'>
            <div className='flex justify-evenly'>

                <div className='w-1/2 border border-[#FFFFFF] items-center'>
                    <img src={MethodsImageOne} alt="" />
                </div>

                <div className='w-1/2 border border-[#FFFFFF] flex space-y-8 font-fahkwang items-center text-4xl'>
                    <div>
                        <div className='flex gap-2'>
                            <span className='text-white'>{MethodsText.UpperSection.HeadingWordOne}</span>
                            <GradientSpan>{MethodsText.UpperSection.HeadingWordTwo}</GradientSpan>
                        </div>
                        <span className='text-white'>{MethodsText.UpperSection.HeadingWordTwo}</span>
                    </div>
                </div>

            </div>

            <div>

            </div>
        </div>
    )
}

export default Methods
