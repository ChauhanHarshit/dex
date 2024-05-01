import React from 'react'
import GradientButton from '../../buttons/GradientButton';
import NoPortfolioImage from '../../assets/images/NoPortfolioImage.png'
const PortfolioDataComponent = () => {
    return (
        <div className='w-full h-screen  text-white  md:max-w-[80%] mt-28 z-50 px-8 mx-auto'>

            <div className='flex justify-between bg-[#010427] p-2  py-6  rounded-lg mx-auto'>
                <div className='flex justify-between items-center  mx-2  md:mx-16'>
                    <span className='font-cabin text-xl md:text-3xl font-medium'>My Liquidity Pools</span>
                </div>

                <div className='mr-4'
                    onClick={() => {
                        navigate('/dex-swap/pool/create-pool');
                    }}>
                    <GradientButton>
                        Create Pool
                    </GradientButton>
                </div>
            </div>

            <div className='bg-[#05071D] w-full h-fit rounded-lg text-white p-4'>

                <div>
                    <div className='grid grid-cols-2 md:grid-cols-5  p-4 font-cabin text-lg font-medium'>
                        <div className='col-span-1 text-center'>Tokens Composition</div>

                        <div className='flex justify-end  items-center'>
                            Balance
                        </div>

                        <div className='hidden md:flex justify-end  items-center'>
                            Pool Value
                        </div>

                        <div className='hidden md:flex justify-end items-center '>
                            APR
                        </div>

                        <div className='hidden md:flex justify-end items-center '>
                            Time
                        </div>

                    </div>

                    <div className='border-t-[1px] my-2 border-[#00308E]'></div>


                    <div className='flex justify-center items-center text-center    '>

                        <div>
                            <img src={NoPortfolioImage} alt="" />
                            <span className='font-cabin font-medium leading-5 text-[#F7931A]'>
                                You have not added liquidity yet
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PortfolioDataComponent
