import React from 'react'
import { LandingPageData } from '../../TextData'
import GradientSpan from '../../CustomSpan/GradientSpan'
const Partnership = () => {
    return (
        <>
            <div className='flex flex-col items-center font-fahkwang '>
                <div className='text-3xl flex'>
                    <span className='text-white mr-2'>{LandingPageData.PaternshipPageData.HeadingWordOne}</span> <GradientSpan>{LandingPageData.PaternshipPageData.HeadingWordTwo}</GradientSpan>
                </div>

                <div className='text-xl md:leading-6 leading-7 text-white max-w-4xl text-center mt-5'>
                    {LandingPageData.PaternshipPageData.HeadingDescription}
                </div>
            </div>
            <div className='mx-auto w-[70%]'>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 '>
                    {
                        LandingPageData.PaternshipPageData.PartnershipData.map((Company, index) => (
                            <div className='bg-gradient-to-r from-[#3D3F47] via-[#000211] to-[#373942] flex justify-between text-white rounded-lg border border-[#3D3F47] p-8 w-60 mx-auto my-4 items-center' key={index}>
                                <div>
                                    <img src={Company.LogoLink} alt="PartnerShipData" />
                                </div>

                                <div className='flex flex-col font-cabin'>
                                    <span>
                                        {Company.CompanyName}
                                    </span>
                                    <span>
                                        {Company.CompanyDesc}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Partnership
