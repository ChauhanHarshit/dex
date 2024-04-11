import React from 'react'
import GradientSpan from '../../CustomSpan/GradientSpan'
import AboutImageFirst from '../../assets/images/AboutImageFirst.png'
import AboutImageSecond from '../../assets/images/AboutImageSecond.png'
import AboutImageThird from '../../assets/images/AboutImageThird.png'
import AboutGifFirst from '../../assets/images/AboutGifFirst.gif'
const About = () => {
    return (
        <div className='flex justify-between px-[107px] text-5xl'>
            <div className='h-screen flex flex-col justify-evenly text-white w-1/2'>
                <div>
                    <div className='flex items-center font-fahkwang font-[500] gap-2'>
                        <img src={AboutImageFirst} alt="" />
                        <span>Why</span> <GradientSpan>Choose</GradientSpan> <span>us?</span>

                    </div>
                    <p className='font-[400] text-base leading-2 m-2'>
                        Dedicated to providing a modern trading environment, our platform integrates Balancer-like liquidity pools for optimized financial strategies.
                    </p>
                </div>

                <div>
                    <div className='flex items-center font-fahkwang font-[500] gap-2'>
                        <img src={AboutImageSecond} alt="" />
                        <span>Our</span> <GradientSpan>vision</GradientSpan>
                    </div>
                    <p className='font-[400] text-base leading-2 m-2'>
                        Driven by innovation, we aspire to redefine the landscape of decentralized exchanges by focusing on user-centric solutions
                    </p>
                </div>

                <div>
                    <div className='flex items-center font-fahkwang font-[500] gap-2'>
                        <img src={AboutImageThird} alt="" />
                        <span>Key</span> <GradientSpan>features</GradientSpan>
                    </div>
                    <p className='font-[400] text-base leading-2 m-2'>
                        Our decentralized exchange harnesses the power of the Internet Computer Protocol to offer unprecedented trading capabilities and portfolio automation
                    </p>
                </div>


            </div>

            <div className='w-1/2'>
                    <img src={AboutGifFirst} alt="" className='bg-[#000711]'/>
            </div>

        </div>
    )
}

export default About
