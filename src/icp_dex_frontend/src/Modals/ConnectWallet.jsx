import React, { useState } from 'react'
import { X } from 'lucide-react';
import { ConnectWalletData } from '../TextData';
import GradientButton from '../buttons/GradientButton';

const ConnectWallet = ({ setClickConnectWallet, setWalletClicked }) => {
    const [TermsAndConditionsChecked, SetTermsAndConditionsChecked] = useState(false);
    const [WalletOption, SetWalletOption] = useState(null);

    const HandleClickWallet = (index) => {
        // console.log("wallet selected", index)
        SetWalletOption(WalletOption === index ? null : index);
    }
    return (
        <div className=''>

            <div className='z-50 fixed  inset-0  h-fit  xl:w-3/12 lg:w-6/12 md:w-7/12 sm:w-8/12 w-10/12 border rounded-xl flex flex-col gap-2 bg-[#05071D] my-auto mx-auto'>

                <div className='md:w-[64%] w-[62%] flex place-self-end items-center justify-between mx-4'>
                    <span className='font-fahkwang font-medium md:text-2xl text-xl py-4'>{ConnectWalletData.Heading}</span>
                    <span className='cursor-pointer' onClick={() => {
                        setClickConnectWallet(false)
                    }}><X /></span>
                </div>

                <div className='border border-transparent font-bold custom-height-3 bg-gradient-to-r from-transparent via-[#00308E] to-transparent w-full mx-auto'></div>

                <div className='flex flex-col items-center gap-4 mb-10'>
                    {

                        ConnectWalletData.Array.map((wallet, index) => (
                            <div className={`flex gap-6 items-center w-10/12  p-2 bg-[#303030] hover:opacity-80 cursor-pointer  opacity-50 rounded-xl
                            ${WalletOption === index ? 'opacity-40' : 'opacity-100'}`} key={index}
                                onClick={() => {
                                    setWalletClicked(true);
                                    HandleClickWallet(index);
                                }}>
                                <div className='rounded-lg bg-[#3D3F47] p-4'>
                                    <img src={wallet.Image} alt="" className='transform scale-150' />
                                </div>
                                <div className='font-normal text-xl font-cabin text-start'>
                                    {wallet.Name}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='border border-transparent font-bold custom-height-3 bg-gradient-to-r from-transparent via-[#00308E] to-transparent w-full mx-auto'></div>

                <div className='p-4 w-10/12 mx-auto space-x-4 flex  '>

                    <input
                        type="checkbox"
                        id="consent-checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 mt-2"
                        onChange={() => {
                            SetTermsAndConditionsChecked(!TermsAndConditionsChecked);
                        }}
                    />

                    <label htmlFor="consent-checkbox" className="text-lg">
                        {ConnectWalletData.TermsAndConditions} <a href="" className='text-blue-500 underline'>{ConnectWalletData.LearnMore}</a>
                    </label>

                </div>


                <div className={`flex justify-center`}>
                    <GradientButton CustomCss={`mb-6 w-[80%] ${!TermsAndConditionsChecked ? 'diabled opacity-40 cursor-auto' : 'enabled'} `}>
                        {ConnectWalletData.ButtonText}
                    </GradientButton>
                </div>
            </div>

        </div >
    )
}

export default ConnectWallet
