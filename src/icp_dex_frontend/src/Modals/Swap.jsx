import React, { useState } from 'react'
import { Bolt, ChevronDown } from 'lucide-react';
import BlueGradientButton from '../buttons/BlueGradientButton';
const Swap = () => {

    const [Coin1, setCoin1] = useState(null);
    const [Coin2, setCoin2] = useState(null);
    const [changeCoin1, setChangeCoin1] = useState("M5 13.5L9 9.5M5 13.5L1 9.5M5 13.5V1");
    const [changeCoin2, setChangeCoin2] = useState("M13 1L9 5M13 1L17 5M13 1L13 13.5");

    function ClickedChange() {
        let Temp = changeCoin1;
        setChangeCoin1(changeCoin2);
        setChangeCoin2(Temp);
        Temp = Coin1;
        setCoin1(Coin2);
        setCoin2(Temp);

    }
    return (
        <div className='w-4/12 h-5/6 flex flex-col gap-4 p-4 bg-gradient-to-b from-[#3E434B] to-[#02060D] border mx-auto rounded-lg'>
            <div className='w-[58%] place-self-end  flex justify-between'>
                <span className='font-fahkwang font-light text-3xl'>SWAP</span>
                <Bolt size={30} className='cursor-pointer' onClick={() => { console.log("settings open") }} />
            </div>

            <div className='mx-8 w-full flex justify-between'>

                <div className='flex flex-col font-cabin font-normal gap-2'>
                    <span className='text-base font-medium'>Pay</span>
                    <span className='text-4xl'>0</span>
                </div>

                {!Coin1 ? (
                    <div className='flex mr-12 items-center place-self-end gap-2'>
                        <BlueGradientButton customCss={'px-4 py-3 font-cabin font-extrabold'}>
                            <div className='flex items-center gap-1'>
                                Select a Token
                                <span className='cursor-pointer'><ChevronDown /></span>
                            </div>
                        </BlueGradientButton>
                    </div>
                ) : (
                    <div className='flex mr-12 items-center place-self-end gap-2'>
                        <BlueGradientButton customCss={'disabled px-4 py-3 normal-cursor'}>
                            <svg width="18" height="22" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.90047 0L8.70605 0.660819V19.8363L8.90047 20.0303L17.8015 14.769L8.90047 0Z" fill="#9F9F9F" />
                                <path d="M8.90102 0L0 14.769L8.90102 20.0304V10.7232V0Z" fill="white" />
                                <path d="M8.90057 21.7158L8.79102 21.8493V28.68L8.90057 29.0001L17.8069 16.457L8.90057 21.7158Z" fill="#6A6A6A" />
                                <path d="M8.90102 28.9999V21.7156L0 16.4568L8.90102 28.9999Z" fill="white" />
                                <path d="M8.90137 20.0304L17.8022 14.7691L8.90137 10.7234V20.0304Z" fill="#6A6A6A" />
                                <path d="M0 14.769L8.90088 20.0303V10.7233L0 14.769Z" fill="#727272" />
                            </svg>
                        </BlueGradientButton>

                        <div className='font-cabin font-normal text-2xl'>
                            {Coin1}
                        </div>
                        <span className='cursor-pointer'><ChevronDown /></span>
                    </div>
                )}
            </div>
            <div className='flex flex-col justify-center items-center my-12'>
                <div className='border-b border-white w-11/12'></div>
                <div className='bg-[#000711] rounded-xl p-4 w-1/12 -mt-6 cursor-pointer' onClick={ClickedChange}>
                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13.5L9 9.5L5 13.5ZM5 13.5L1 9.5L5 13.5ZM5 13.5V1V13.5Z" fill="#000711" />
                        <path d={`${changeCoin2}`} stroke="#0057FF" />
                        <path d="M13 1L9 5L13 1ZM13 1L17 5L13 1ZM13 1L13 13.5L13 1Z" fill="#000711" />
                        <path d={`${changeCoin1}`} stroke="white" strokeOpacity="0.3" />
                    </svg>
                </div>
            </div>

            <div className='mx-8 w-full flex justify-between '>

                <div className='flex flex-col font-cabin font-normal gap-2'>
                    <span className='text-base font-medium'>Recieve</span>
                    <span className='text-4xl'>0</span>
                </div>

                {!Coin2 ? (
                    <div className='flex mr-12 items-center place-self-end gap-2'>
                        <BlueGradientButton customCss={'px-4 py-3 font-cabin font-extrabold'}>
                            <div className='flex items-center gap-1'>
                                Select a Token
                                <span className='cursor-pointer'><ChevronDown /></span>
                            </div>
                        </BlueGradientButton>
                    </div>
                ) : (
                    <div className='flex mr-12 items-center place-self-end gap-2'>
                        <BlueGradientButton customCss={'disabled px-4 py-3 normal-cursor'}>
                            <svg width="18" height="22" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.90047 0L8.70605 0.660819V19.8363L8.90047 20.0303L17.8015 14.769L8.90047 0Z" fill="#9F9F9F" />
                                <path d="M8.90102 0L0 14.769L8.90102 20.0304V10.7232V0Z" fill="white" />
                                <path d="M8.90057 21.7158L8.79102 21.8493V28.68L8.90057 29.0001L17.8069 16.457L8.90057 21.7158Z" fill="#6A6A6A" />
                                <path d="M8.90102 28.9999V21.7156L0 16.4568L8.90102 28.9999Z" fill="white" />
                                <path d="M8.90137 20.0304L17.8022 14.7691L8.90137 10.7234V20.0304Z" fill="#6A6A6A" />
                                <path d="M0 14.769L8.90088 20.0303V10.7233L0 14.769Z" fill="#727272" />
                            </svg>
                        </BlueGradientButton>

                        <div className='font-cabin font-normal text-2xl'>
                            {Coin2}
                        </div>
                        <span className='cursor-pointer'><ChevronDown /></span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Swap
