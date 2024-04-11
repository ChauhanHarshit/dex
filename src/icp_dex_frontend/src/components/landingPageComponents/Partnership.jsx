import React from 'react'
import { PartnershipData } from '../../TextData'
import GradientSpan from '../../CustomSpan/GradientSpan'
import PartnerShipLogo from '../../assets/images/PartnerShipLogo.png'
const Partnership = () => {
    return (
        <div>
            <div className='flex flex-col items-center font-fahkwang '>
                <div className='text-3xl flex'>
                    <span className='text-white mr-2'>Strategic</span> <GradientSpan>Partnerships</GradientSpan>
                </div>

                <div className='text-base leading-4 text-white max-w-4xl text-center mt-5'>
                    Partnering with leading technology and financial companies, we ensure our platform stands at the forefront of decentralized trading solutions.
                </div>
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16'>
                {
                    PartnershipData.map((Company, index) => (
                        <div className='bg-gradient-to-r from-[#3D3F47] via-[#000211] to-[#373942] flex justify-between text-white rounded-lg border border-[#3D3F47] p-8 w-[268px] mx-auto my-4 items-center' key={index}>
                            <div>
                                <img src={Company.LogoLink} alt="Yaman" />
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
    )
}

export default Partnership
