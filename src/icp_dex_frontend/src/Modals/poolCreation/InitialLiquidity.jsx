import React, { useEffect, useState } from 'react'
import { Bolt } from 'lucide-react';
import BlueGradientButton from '../../buttons/BlueGradientButton';
import SearchTokenShowData from '../../components/searchTokenForPoolComponents/SearchTokenShowData';
import GradientButton from '../../buttons/GradientButton';
import { showAlert, hideAlert } from '../../reducer/Alert';
import { useDispatch, useSelector } from 'react-redux';

const InitialLiquidity = () => {

    const dispatch = useDispatch();
    const { Tokens } = useSelector((state) => state.pool);
    const [ButtonActive, SetButtonActive] = useState(false);

    let InitialToken = Tokens[0];
    let RestTokens = Tokens.slice(1);
    const HandleSelectCheck = () => {
        const allTokensSelected = Tokens.every((token) => token.AmountPay > 0);
        // console.log("Selected or not->", allTokensSelected)
        SetButtonActive(allTokensSelected);
    }


    return (
        <div className='z-50 w-10/12 lg:w-4/12 md:w-6/12 h-5/6 flex flex-col gap-4 p-6 bg-gradient-to-b from-[#3E434B] to-[#02060D] border mx-auto rounded-lg'>
            <div className='w-[74%] place-self-end  flex justify-between'>
                <span className='font-fahkwang font-light text-3xl '>Set Initial Liquidity</span>
                <Bolt size={30} className='cursor-pointer' onClick={() => { console.log("settings open") }} />
            </div>


            <div className='flex justify-between items-center font-cabin'>

                <div className='flex flex-col'>
                    <span className='font-normal text-3xl'>
                        0.02
                    </span>
                    <span className='text-base font-normal'>
                        Balance: 2.2501
                    </span>
                </div>

                <div className='flex flex-col justify-center'>
                    <div className='flex gap-3 items-center'>
                        <BlueGradientButton customCss={'disabled px-4 py-3 normal-cursor'}>
                            <img src={InitialToken.ImagePath} alt="" className='h-8 w-8 transform scale-150' />
                        </BlueGradientButton>

                        <span className='text-2xl font-normal'>
                            {InitialToken.ShortForm}
                        </span>

                        <span className='bg-[#3E434B] p-1 rounded-lg px-3'>
                            {InitialToken.WeightedPercentage}   %
                        </span>

                    </div>

                    <span className='text-center font-normal leading-5 text-base'>
                        $66.12
                    </span>
                </div>
            </div>
            <div>
                {RestTokens.map((token, index) => {

                    return (
                        <div key={index}>
                            <div className='border-t-[1px] opacity-50 item-center my-6'></div>
                            <div className='flex justify-between items-center font-cabin' >

                                <div className='flex flex-col'>
                                    <span className='font-normal text-3xl'>
                                        0.02
                                    </span>
                                    <span className='text-base font-normal'>
                                        Balance: 2.2501
                                    </span>
                                </div>

                                <div className='flex flex-col justify-center'>
                                    <div className='flex gap-3 items-center'>
                                        <BlueGradientButton customCss={'disabled px-4 py-3 normal-cursor'}>
                                            <img src={token.ImagePath} alt="" className='h-8 w-8 transform scale-150' />
                                        </BlueGradientButton>

                                        <span className='text-2xl font-normal'>
                                            {token.ShortForm}
                                        </span>

                                        <span className='bg-[#3E434B] p-1 rounded-lg px-3'>
                                            {token.WeightedPercentage}   %
                                        </span>

                                    </div>

                                    <span className='text-center font-normal leading-5 text-base'>
                                        $66.12
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>




            <div
                className={`font-cabin text-base font-medium `}
                onClick={() => {

                    if (!ButtonActive) {
                        dispatch(showAlert({
                            type: 'danger',
                            text: 'Please select all the coins'
                        }))

                        setTimeout(() => {
                            dispatch(hideAlert());
                        }, [3000])
                    }
                }}
            >
                <GradientButton CustomCss={`my-4 w-full ${ButtonActive ? ' opacity-100 cursor-pointer' : 'opacity-50 cursor-default'}`}>
                    Analyse Pair
                </GradientButton>
            </div>
        </div>
    )
}

export default InitialLiquidity


