import React, { useEffect, useState } from 'react'
import { Bolt, ChevronDown, ChevronUp, Dot, Info } from 'lucide-react';
import BlueGradientButton from '../buttons/BlueGradientButton';
import GradientButton from '../buttons/GradientButton';
import ImpactButton from '../buttons/ImpactButton';
import BorderGradientButton from '../buttons/BorderGradientButton'
import SearchToken from './SearchToken';
import DialogBox from './Dialouge';
import { SwapModalData } from '../TextData';
const Swap = () => {

    const [Message, setMessage] = useState('');
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [PayCoin, setPayCoin] = useState(null);
    const [RecieveCoin, setRecieveCoin] = useState(null);
    const [changePayCoin, setChangePayCoin] = useState("M5 13.5L9 9.5M5 13.5L1 9.5M5 13.5V1");
    const [balance, setBalance] = useState(10);
    const [CoinAmount, setCoinAmount] = useState(0.02);
    const [AmountToPay, setAmountToPay] = useState(66.12);
    const [settings, setSettings] = useState(false);
    const [changeRecieveCoin, setChangeRecieveCoin] = useState("M13 1L9 5M13 1L17 5M13 1L13 13.5");
    const [bothCoins, setBothCoins] = useState(false);
    const [searchToken, setSearchToken] = useState(false);
    const [id, setId] = useState(0);
    const [ClickedSwap, setClickSwap] = useState(false);

    useEffect(() => {
        if (PayCoin && RecieveCoin) {
            setBothCoins(true);
        } else {
            setBothCoins(false);
        }
    }, [PayCoin, RecieveCoin])
    function ClickedChange() {
        let Temp = changePayCoin;
        setChangePayCoin(changeRecieveCoin);
        setChangeRecieveCoin(Temp);
        Temp = PayCoin;
        setPayCoin(RecieveCoin);
        setRecieveCoin(Temp);

    }
    return (
        <div className=''>
            <div className='lg:w-4/12 md:w-6/12 h-5/6 flex flex-col gap-4 p-6 bg-gradient-to-b from-[#3E434B] to-[#02060D] border mx-auto rounded-lg'>
                <div className='w-[58%] place-self-end  flex justify-between'>
                    <span className='font-fahkwang font-light text-3xl '>SWAP</span>
                    <Bolt size={30} className='cursor-pointer' onClick={() => { console.log("settings open") }} />
                </div>

                <div className='mx-8 w-full flex justify-between items-center'>

                    {
                        PayCoin ? (
                            <div className='flex flex-col font-cabin font-normal gap-2'>
                                <span className='text-base font-medium'>Pay</span>
                                <span className='text-4xl'>{CoinAmount}</span>
                                <div className='flex gap-2'>
                                    <span className='text-base font-normal'
                                    >Balance:  {parseFloat(balance)}</span>
                                    <button className='font-cabin text-orange-400' onClick={() => {
                                        setCoinAmount(parseFloat(balance))
                                    }}>Max</button>
                                </div>
                            </div>
                        ) : (
                            <div className='flex flex-col font-cabin font-normal gap-2'>
                                <span className='text-base font-medium'>Pay</span>
                                <span className='text-4xl'>0</span>
                                <span className='text-base font-normal'>Balance: Select a Coin to Fetch Balance</span>
                            </div>
                        )
                    }

                    <div>
                        {!PayCoin ? (
                            <div>
                                <div className='flex mr-12 items-center  gap-2'
                                >
                                    <BlueGradientButton customCss={'px-4 py-3 font-cabin font-extrabold'}
                                    >
                                        <div className='flex items-center gap-1'>
                                            Select a Token
                                            <span className='cursor-pointer'
                                                onClick={() => {
                                                    console.log(searchToken)
                                                    setId(1);
                                                    setSearchToken(!searchToken);
                                                }}><ChevronDown /></span>
                                        </div>
                                    </BlueGradientButton>
                                </div>
                                {searchToken && <SearchToken setSearchToken={setSearchToken} setPayToken={setPayCoin} setRecToken={setRecieveCoin} id={id} />}
                            </div>
                        ) : (
                            <div className='flex  flex-col gap-1'>
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
                                        {PayCoin}
                                    </div>
                                    {!searchToken ? (
                                        <span className='cursor-pointer' onClick={() => {
                                            setId(1);
                                            setSearchToken(!searchToken);
                                        }}><ChevronDown /></span>
                                    ) : (
                                        <span className='cursor-pointer' onClick={() => {
                                            setId(1);
                                            setSearchToken(!searchToken);
                                        }}><ChevronUp /></span>
                                    )}
                                    {searchToken && <SearchToken setSearchToken={setSearchToken} setPayToken={setPayCoin} setRecToken={setRecieveCoin} id={id} />}
                                </div>
                                <span className='font-cabin font-normal'>
                                    ${AmountToPay}
                                </span>
                            </div>

                        )}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center my-12'>
                    <div className='border-b border-white w-11/12'></div>
                    <div className='bg-[#000711] rounded-xl p-4 xl:w-1/12 lg:w-1/6 -mt-6 cursor-pointer' onClick={ClickedChange}>
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 13.5L9 9.5L5 13.5ZM5 13.5L1 9.5L5 13.5ZM5 13.5V1V13.5Z" fill="#000711" />
                            <path d={`${changeRecieveCoin}`} stroke="#0057FF" />
                            <path d="M13 1L9 5L13 1ZM13 1L17 5L13 1ZM13 1L13 13.5L13 1Z" fill="#000711" />
                            <path d={`${changePayCoin}`} stroke="white" strokeOpacity="0.3" />
                        </svg>
                    </div>
                </div>

                <div className='mx-8 w-full flex justify-between items-center'>

                    <div>
                        {
                            RecieveCoin ? (
                                <div className='flex flex-col font-cabin font-normal gap-2'>
                                    <span className='text-base font-medium'>Recieve</span>
                                    <span className='text-4xl'>0</span>
                                    <span className='text-base font-normal'>Balance: 0.00</span>
                                </div>
                            ) : (
                                <div className='flex flex-col font-cabin font-normal gap-2'>
                                    <span className='text-base font-medium'>Recieve</span>
                                    <span className='text-4xl'>0</span>
                                    <span className='text-base font-normal'>Balance: Select a Token to fetch balance</span>
                                </div>
                            )
                        }
                    </div>

                    <div>
                        {!RecieveCoin ? (
                            <div className='flex mr-12 items-center place-self-end gap-2'>
                                <BlueGradientButton customCss={'px-4 py-3 font-cabin font-extrabold'}>
                                    <div className='flex items-center gap-1'>
                                        Select a Token
                                        <span className='cursor-pointer'
                                            onClick={() => {
                                                console.log(searchToken)
                                                setId(2);
                                                setSearchToken(!searchToken);
                                            }}><ChevronDown /></span>
                                        {searchToken && <SearchToken setSearchToken={setSearchToken} setRecToken={setRecieveCoin} setPayToken={setPayCoin} id={id} />}
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
                                    {RecieveCoin}
                                </div>
                                {!searchToken ? (
                                    <span className='cursor-pointer' onClick={() => {
                                        setSearchToken(!searchToken);
                                        setId(2);
                                    }}><ChevronDown /></span>
                                ) : (
                                    <span className='cursor-pointer' onClick={() => {
                                        setSearchToken(!searchToken);
                                        setId(2);
                                    }}><ChevronUp /></span>
                                )}
                                {searchToken && <SearchToken setSearchToken={setSearchToken} setRecToken={setRecieveCoin} setPayToken={setPayCoin} id={id} />}
                            </div>
                        )}
                    </div>
                </div>

                {bothCoins && (
                    <div>
                        <div className='w-full mx-auto flex justify-between items-center my-3'>

                            <div className='flex items-center'>
                                <Dot color='#F7931A' />
                                <span>Price</span>
                            </div>

                            <div className='font-cabin font-medium'>
                                {`1 CT = 0.0025674 ETH (12.58$)`}
                            </div>
                        </div>

                        <div className='w-full mx-auto my-3 flex justify-between items-center '>

                            <div className='flex items-center'>
                                <Dot color='#F7931A' />
                                <span>Gas Fees</span>
                            </div>

                            <div className='font-cabin font-medium'>
                                {`0.000052 ETH  ($0.1656)`}
                            </div>
                        </div>






                        <div>
                            {
                                ClickedSwap && (
                                    <div className='flex flex-col gap-4   my-4  rounded-lg'>

                                        <div className='flex justify-between'>
                                            <div className='flex items-center'>
                                                <Dot color='#F7931A' />
                                                <span>Minimum Recieved </span>
                                            </div>

                                            <div className='font-cabin font-medium text-base'>10.5580 CT</div>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center'>
                                                <Dot color='#F7931A' />
                                                <span className='relative'>Overall Slippage</span>
                                            </div>

                                            <div><ImpactButton customCss={`font-bold`} Impact={'Positive'}>10%</ImpactButton></div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center'>
                                                <Dot color='#F7931A' />
                                                <span>Liquidity Provider Incentive</span>
                                            </div>
                                            <div className='font-cabin font-medium text-base'>0.000056 ETH</div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <div>
                            {CoinAmount > balance ? (

                                <GradientButton CustomCss={'w-full cursor-auto disabled opacity-75 font-extrabold text-3xl '}
                                >Insufficient Balance</GradientButton>
                            ) : (
                                <div>
                                    {ClickedSwap ? (
                                        <div onClick={() => {
                                            setClickSwap(true);
                                            console.log("swap click", ClickedSwap);
                                        }}>
                                            <GradientButton CustomCss={'w-full  font-extrabold text-3xl '}>Confirm Swapping</GradientButton>
                                        </div>
                                    ) : (
                                        <div onClick={() => {
                                            setClickSwap(true);
                                            console.log("swap click", ClickedSwap);
                                        }}>
                                            <GradientButton CustomCss={'w-full  font-extrabold text-3xl '}>Swap Now</GradientButton>
                                        </div>
                                    )}
                                </div>

                            )}
                        </div>




                    </div>
                )}


            </div>

            {bothCoins && !ClickedSwap && (
                <div className='lg:w-4/12 md:w-6/12 flex flex-col gap-4 p-4  mx-auto my-4  rounded-lg'>

                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <span className='relative'>Minimum Recieved
                                {show1 &&
                                    <div className='absolute ml-40 w-[250%]'>
                                        <DialogBox text={Message} />
                                    </div>
                                }
                            </span>
                            <span
                                onMouseEnter={() => {
                                    setShow1(true);
                                    setMessage(SwapModalData.infoMessageOne);
                                }}

                                onMouseLeave={() => {
                                    setShow1(false);
                                }}
                            >
                                <Info />

                            </span>
                        </div>

                        <div className='font-cabin font-medium text-base'>10.5580 CT</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <span className='relative'>Overall Slippage
                                {show2 &&
                                    <div className='absolute ml-40 w-[250%]'>
                                        <DialogBox text={Message} />
                                    </div>
                                }
                            </span>

                            <span
                                className='z-50'
                                onMouseEnter={() => {
                                    setShow2(true);
                                    setMessage(SwapModalData.infoMessageTwo);
                                }}
                                onMouseLeave={() => {
                                    setShow2(false);
                                }}>
                                <Info />
                            </span>
                        </div>

                        <div><ImpactButton customCss={`font-bold`} Impact={'Positive'}>10%</ImpactButton></div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <span className='relative'>Liquidity Provider Incentive
                                {show3 &&
                                    <div className='absolute ml-40 w-[250%]'>
                                        <DialogBox text={Message} />
                                    </div>
                                }
                            </span>
                            <span
                                className='z-50'
                                onMouseEnter={() => {
                                    setShow3(true);
                                    setMessage(SwapModalData.infoMessageThree);
                                }}

                                onMouseLeave={() => {
                                    setShow3(false);
                                }}>
                                <Info />
                            </span>
                        </div>

                        <div className='font-cabin font-medium text-base'>0.000056 ETH</div>
                    </div>

                    <BorderGradientButton customCss={`w-full `}>Analyse Pair</BorderGradientButton>
                </div>
            )}
        </div>
    )
}

export default Swap
