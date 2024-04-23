import React, { useState } from 'react'
import SearchToken from '../../Modals/SearchToken';
import BlueGradientButton from '../../buttons/BlueGradientButton';
import { Bolt, ChevronDown, ChevronUp, Dot, Trash } from 'lucide-react';

const SearchTokenShowData = ({ token, index, HandleSelectCheck, Tokens }) => {
    const [TokenData, setTokenData] = useState({});
    const [searchToken, setSearchToken] = useState(false);
    return (
        <div className='flex justify-between items-center mt-4  z-10' key={index}>
            <div className='flex items-center gap-4'>
                <span>{token.ShortForm}</span>
                <span className='bg-[#3E434B] p-1 rounded-lg px-3'>{token.WeightedPercentage}%</span>
                <span onClick={() => {
                    Tokens.splice(index, 1);
                }} className='cursor-pointer'>
                    <Trash size={20} />
                </span>
            </div>

            <div>
                {token.Selected ? (
                    <div className='flex  flex-col gap-1'>
                        <div className='flex mr-12 items-center place-self-end gap-2'>
                            <BlueGradientButton customCss={'disabled px-4 py-3 normal-cursor'}>
                                <img src={token.ImagePath} alt="" className='h-8 w-8 transform scale-150' />
                            </BlueGradientButton>

                            <div className='font-cabin font-normal text-2xl'>
                                {token.ShortForm}
                            </div>
                            {!searchToken ? (
                                <span className='cursor-pointer' onClick={() => {
                                    setSearchToken(!searchToken);
                                }}><ChevronDown /></span>
                            ) : (
                                <span className='cursor-pointer' onClick={() => {
                                    setSearchToken(!searchToken);
                                }}><ChevronUp /></span>
                            )}
                            <div className='z-50'>
                                {searchToken && <SearchToken setSearchToken={setSearchToken} setTokenData={setTokenData} set id={3} />}
                            </div>
                            <div className='hidden'>
                                {TokenData.Name && (token.Name = TokenData.Name)}
                                {TokenData.ImagePath && (token.ImagePath = TokenData.ImagePath)}
                                {TokenData.Name && (token.Selected = true)}
                                {TokenData.ShortForm && (token.ShortForm = TokenData.ShortForm)}
                                {HandleSelectCheck()}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <BlueGradientButton customCss={'px-4 py-3 font-cabin font-extrabold'}>
                            <div className='flex items-center gap-1'>
                                Select a Token
                                <span className='cursor-pointer'
                                    onClick={() => {
                                        setSearchToken(!searchToken);
                                    }}><ChevronDown /></span>
                            </div>
                        </BlueGradientButton>
                        {searchToken && <SearchToken setSearchToken={setSearchToken} setTokenData={setTokenData} set id={3} />}
                        {TokenData.Name && (token.Name = TokenData.Name)}
                        {TokenData.ImagePath && (token.ImagePath = TokenData.ImagePath)}
                        {TokenData.Name && (token.Selected = true)}
                        {TokenData.ShortForm && (token.ShortForm = TokenData.ShortForm)}
                        {HandleSelectCheck()}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchTokenShowData
