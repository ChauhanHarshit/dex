import React, { useEffect, useState } from 'react'
import { Bolt, ChevronDown, ChevronUp, Dot, Info } from 'lucide-react';
import BlueGradientButton from '../buttons/BlueGradientButton';
import GradientButton from '../buttons/GradientButton';
import ImpactButton from '../buttons/ImpactButton';
import BorderGradientButton from '../buttons/BorderGradientButton'
import SearchToken from './SearchToken';
import DialogBox from './Dialouge';
import { SwapModalData } from '../TextData';
import { useNavigate } from 'react-router-dom';
const Swap = () => {

    const navigate = useNavigate();
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
    const [searchToken1, setSearchToken1] = useState(false);
    const [searchToken2, setSearchToken2] = useState(false);
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
                    <span className='font-fahkwang font-light text-3xl '>{SwapModalData.Heading}</span>
                    <Bolt size={30} className='cursor-pointer' onClick={() => { console.log("settings open") }} />
                </div>

                <div className='mx-8 w-full flex justify-between items-center'>

                    {
                        PayCoin ? (
                            <div className='flex flex-col font-cabin font-normal gap-2'>
                                <span className='text-base font-medium'>{SwapModalData.PaySection.Heading}</span>
                                <span className='text-4xl'>{CoinAmount}</span>
                                <div className='flex gap-2'>
                                    <span className='text-base font-normal'
                                    >{SwapModalData.PaySection.Balance}:  {parseFloat(balance)}</span>
                                    <button className='font-cabin text-orange-400' onClick={() => {
                                        setCoinAmount(parseFloat(balance))
                                    }}>{SwapModalData.PaySection.Max}</button>
                                </div>
                            </div>
                        ) : (
                            <div className='flex flex-col font-cabin font-normal gap-2'>
                                <span className='text-base font-medium'>{SwapModalData.PaySection.Heading}</span>
                                <span className='text-4xl'>0</span>
                                <span className='text-base font-medium'>{SwapModalData.PaySection.Balance}: {SwapModalData.PaySection.NoTokenSelectBalanceMessage}</span>
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
                                            {SwapModalData.PaySection.TokenSelectButtonText}
                                            <span className='cursor-pointer'
                                                onClick={() => {
                                                    console.log(searchToken1)
                                                    setId(1);
                                                    setSearchToken1(!searchToken1);
                                                }}><ChevronDown /></span>
                                        </div>
                                    </BlueGradientButton>
                                </div>
                                {searchToken1 && <SearchToken setSearchToken={setSearchToken1} setPayToken={setPayCoin} setRecToken={setRecieveCoin} id={id} />}
                            </div>
                        ) : (
                            <div className='flex  flex-col gap-1'>
                                <div className='flex mr-12 items-center place-self-end gap-2'>
                                    <BlueGradientButton customCss={'disabled px-4 py-3 normal-cursor'}>
                                        <img src={PayCoin.Image} alt="" className='h-8 w-8 transform scale-150' />
                                    </BlueGradientButton>

                                    <div className='font-cabin font-normal text-2xl'>
                                        {PayCoin.ShortForm}
                                    </div>
                                    {!searchToken1 ? (
                                        <span className='cursor-pointer' onClick={() => {
                                            setId(1);
                                            setSearchToken1(!searchToken1);
                                        }}><ChevronDown /></span>
                                    ) : (
                                        <span className='cursor-pointer' onClick={() => {
                                            setSearchToken1(!searchToken1);
                                        }}><ChevronUp /></span>
                                    )}
                                    {searchToken1 && <SearchToken setSearchToken={setSearchToken1} setPayToken={setPayCoin} setRecToken={setRecieveCoin} id={id} />}
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
                                    <span className='text-base font-medium'>{SwapModalData.RecieveSection.Heading}</span>
                                    <span className='text-4xl'>0</span>
                                    <span className='text-base font-normal'>{SwapModalData.RecieveSection.Balance}: 0.00</span>
                                </div>
                            ) : (
                                <div className='flex flex-col font-cabin font-normal gap-2'>
                                    <span className='text-base font-medium'>{SwapModalData.RecieveSection.Heading}</span>
                                    <span className='text-4xl'>0</span>
                                    <span className='text-base font-normal'> {SwapModalData.RecieveSection.Balance}:  {SwapModalData.RecieveSection.NoTokenSelectBalanceMessage}</span>
                                </div>
                            )
                        }
                    </div>

                    <div>
                        {!RecieveCoin ? (
                            <div className='flex mr-12 items-center place-self-end gap-2'>
                                <BlueGradientButton customCss={'px-4 py-3 font-cabin font-extrabold'}>
                                    <div className='flex items-center gap-1'>
                                        {SwapModalData.RecieveSection.TokenSelectButtonText}
                                        <span className='cursor-pointer'
                                            onClick={() => {
                                                console.log(searchToken2)
                                                setId(2);
                                                setSearchToken2(!searchToken2);
                                            }}><ChevronDown /></span>
                                        {searchToken2 && <SearchToken setSearchToken={setSearchToken2} setRecToken={setRecieveCoin} setPayToken={setPayCoin} id={id} />}
                                    </div>
                                </BlueGradientButton>
                            </div>
                        ) : (
                            <div className='flex mr-12 items-center place-self-end gap-2'>
                                <BlueGradientButton customCss={'disabled px-4 py-3 normal-cursor'}>
                                    <img src={RecieveCoin.Image} alt="" className='h-8 w-8 transform scale-150' />
                                </BlueGradientButton>

                                <div className='font-cabin font-normal text-2xl'>
                                    {RecieveCoin.ShortForm}
                                </div>
                                {!searchToken2 ? (
                                    <span className='cursor-pointer' onClick={() => {
                                        setSearchToken2(!searchToken2);
                                        setId(2);
                                    }}><ChevronDown /></span>
                                ) : (
                                    <span className='cursor-pointer' onClick={() => {
                                        setSearchToken2(!searchToken2);
                                        setId(2);
                                    }}><ChevronUp /></span>
                                )}
                                {searchToken2 && <SearchToken setSearchToken={setSearchToken2} setRecToken={setRecieveCoin} setPayToken={setPayCoin} id={id} />}
                            </div>
                        )}
                    </div>
                </div>

                {bothCoins && (
                    <div>
                        <div className='w-full mx-auto flex justify-between items-center my-3'>

                            <div className='flex items-center'>
                                <Dot color='#F7931A' />
                                <span>{SwapModalData.bothCoinsPresent.Price}</span>
                            </div>

                            <div className='font-cabin font-medium'>
                                {`1 CT = 0.0025674 ETH (12.58$)`}
                            </div>
                        </div>

                        <div className='w-full mx-auto my-3 flex justify-between items-center '>

                            <div className='flex items-center'>
                                <Dot color='#F7931A' />
                                <span>{SwapModalData.bothCoinsPresent.GasFees}</span>
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
                                                <span>{SwapModalData.ClickedSwapData.MinimumRecieved}</span>
                                            </div>

                                            <div className='font-cabin font-medium text-base'>10.5580 CT</div>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center'>
                                                <Dot color='#F7931A' />
                                                <span className='relative'>{SwapModalData.ClickedSwapData.OverallSlippage}</span>
                                            </div>

                                            <div><ImpactButton customCss={`font-bold`} Impact={'Positive'}>10%</ImpactButton></div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center'>
                                                <Dot color='#F7931A' />
                                                <span>{SwapModalData.ClickedSwapData.LiquidityProviderIncentive}</span>
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
                                >{SwapModalData.MainButtonsText.InsufficientBalance}</GradientButton>
                            ) : (
                                <div>
                                    {ClickedSwap ? (
                                        <div onClick={() => {

                                            navigate('/dex-swap/transaction-successfull')
                                        }}>
                                            <GradientButton CustomCss={'w-full  font-extrabold text-3xl '}>{SwapModalData.MainButtonsText.ConfirmSwapping}</GradientButton>
                                        </div>
                                    ) : (
                                        <div onClick={() => {
                                            setClickSwap(true);
                                            console.log("swap click", ClickedSwap);
                                        }}>
                                            <GradientButton CustomCss={'w-full  font-extrabold text-3xl '}>{SwapModalData.MainButtonsText.SwapNow}</GradientButton>
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
                            <span className='relative'>{SwapModalData.ClickedSwapData.MinimumRecieved}
                                {show1 &&
                                    <div className='absolute ml-40 w-[250%]'>
                                        <DialogBox text={Message} />
                                    </div>
                                }
                            </span>
                            <span
                                onMouseEnter={() => {
                                    setShow1(true);
                                    setMessage(SwapModalData.infoMessageMinimumRecieved);
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
                            <span className='relative'>{SwapModalData.ClickedSwapData.OverallSlippage}
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
                                    setMessage(SwapModalData.infoMessageOverallSlippage);
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
                            <span className='relative'>{SwapModalData.ClickedSwapData.LiquidityProviderIncentive}
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
                                    setMessage(SwapModalData.infoMessageLiquidityProviderIncentive);
                                }}

                                onMouseLeave={() => {
                                    setShow3(false);
                                }}>
                                <Info />
                            </span>
                        </div>

                        <div className='font-cabin font-medium text-base'>0.000056 ETH</div>
                    </div>

                    <BorderGradientButton customCss={`w-full `}>{SwapModalData.MainButtonsText.AnalysePair}</BorderGradientButton>


                </div>
            )}

        </div>
    )
}
export default Swap
