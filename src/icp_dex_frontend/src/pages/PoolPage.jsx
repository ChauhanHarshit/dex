import React from 'react'
import PoolPageBackGround from '../assets/images/PoolPageBackGround.png'
import { Routes, Route } from 'react-router-dom'
import ShowAllPools from '../components/poolPageComponent/ShowAllPools'
import CreatePools from '../components/poolPageComponent/CreatePools'
const PoolPage = () => {
    return (
        <div className='h-screen '>
            <div className='items-center'>
                <img src={PoolPageBackGround} alt="" className='z-0 h-96 w-full absolute top-0' />
                <div className='flex justify-center'>
                    <div className='m-14 text-center border font-fahkwang  bg-gradient-to-r from-transparent to-[#FFFFFF] text-white p-8 rounded-2xl backdrop-blur-lg font-semibold text-3xl max-w-[15%]'>
                        Pool Overview
                    </div>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<ShowAllPools />} />
                <Route path='/create-pool' element={<CreatePools />} />
            </Routes>

        </div>
    )
}

export default PoolPage
