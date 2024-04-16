import React, { useState } from 'react'
import { X } from 'lucide-react';
import { SearchTokenData } from '../TextData';
import GradientButton from '../buttons/GradientButton';
import { SiBitcoinsv } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { TbCurrencyXrp } from "react-icons/tb";
import { TbCurrencySolana } from "react-icons/tb";

const SearchToken = ({ setSearchToken, setPayToken,setRecToken,id }) => {
    const [TokenOption, SetTokenOption] = useState(null);

    const HandleClickToken = (index) => {
        // console.log("wallet selected", index)
        SetTokenOption(TokenOption === index ? null : index);
    }
    return (
        <div className='z-50'>

            <div className='fixed  inset-0  h-fit  xl:w-3/12 lg:w-6/12 md:w-7/12 sm:w-8/12 w-10/12 border rounded-xl flex flex-col gap-2 bg-[#05071D] my-auto mx-auto'>

                <div className='md:w-[64%] w-[62%] flex place-self-end items-center justify-between mx-4'>
                    <span className='font-fahkwang font-medium md:text-2xl text-xl py-4'>{SearchTokenData.Heading}</span>
                    <span className='cursor-pointer' onClick={() => {
                        console.log("Closed Token search")
                        setSearchToken(false)
                    }}><X /></span>
                </div>

                <div className='border border-transparent font-bold custom-height-3 bg-gradient-to-r from-transparent via-[#00308E] to-transparent w-full mx-auto'></div>

                <div className='flex flex-col items-center gap-4 mb-10'>
                    {

                        SearchTokenData.Array.map((token, index) => (
                            <div className={`flex gap-6 items-center w-10/12  p-2 bg-[#303030] hover:opacity-80 cursor-pointer  opacity-50 rounded-xl
                            ${TokenOption === index ? 'opacity-40' : 'opacity-100'}`} key={index}
                                onClick={() => {
                                    console.log("id-->",id)
                                    if(id === 1) setPayToken(token.ShortForm)
                                    if(id === 2) setRecToken(token.ShortForm)
                                    HandleClickToken(index);
                                }}>
                                <div className='rounded-lg bg-[#3D3F47] p-4'>
                                    {<SiBitcoinsv />}
                                </div>
                                <div className='font-normal text-xl font-cabin text-start'>
                                    {token.Name}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='border border-transparent font-bold custom-height-3 bg-gradient-to-r from-transparent via-[#00308E] to-transparent w-full mx-auto'></div>

            </div>

        </div >
    )
}

export default SearchToken
