import React, { useState } from 'react'
import { poolsSvg } from './PoolPageComponentsSvg'
import GradientButton from '../../buttons/GradientButton'
import ArrowPool from '../../assets/images/ArrowPool.png'
import { AllPoolsData } from '../../TextData'
import { useNavigate } from 'react-router-dom'
const ShowAllPools = () => {

  const navigate = useNavigate();
  return (
    <div className='w-full h-screen  text-white max-w-[80%] mt-4 z-50 px-8 mx-auto'>

      <div className='flex justify-between bg-[#010427] p-2 py-6 rounded-lg mx-auto'>
        <div className='flex justify-between items-center gap-16 mx-16'>
          <span className='font-cabin  text-3xl font-medium'>Ethereum Pools</span>
          <div className='cursor-pointer'>
            {poolsSvg}
          </div>
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

      <div className='bg-[#05071D] w-full min-h-96 h-fit rounded-lg text-white p-4'>

        <div>
          <div className='grid grid-cols-4  p-4 font-cabin text-lg font-medium'>
            <div className='col-span-1 text-center'>Tokens Composition</div>

            <div className='flex justify-end gap-3 items-center'>
              Pool Value <img src={ArrowPool} alt="" className='h-5 w-5' />
            </div>

            <div className='flex  justify-end gap-3 items-center'>
              Total Volume <img src={ArrowPool} alt="" className='h-5 w-5' />
            </div>

            <div className='flex justify-end gap-3 items-center '>
              APR <img src={ArrowPool} alt="" className='h-5 w-5' />
            </div>

          </div>
        </div>


        {AllPoolsData.map((Token, index) => (
          <div key={index} className=':bg-[#546093] rounded-lg cursor-pmy-5 hoverointer'>
            <div className='grid grid-cols-4  p-4 font-cabin text-lg font-medium'>
              <div className='text-center'>
                <div className='flex items-center justify-evenly'>
                  <div className='flex gap-5'>
                    <img src={Token.TokenImageOne} alt="" />
                    <img src={Token.TokenImageTwo} alt="" />
                  </div>
                  <span>{Token.TokensComposition}</span>
                </div>
              </div>

              <div className='text-end'>
                {Token.PoolValue}
              </div>

              <div className='text-end'>
                {Token.TotalVolume}
              </div>
              <div className='text-end'>
                {Token.APR}
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>  
  )
}

export default ShowAllPools
