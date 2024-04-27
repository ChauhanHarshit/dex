import React, { useEffect, useState } from 'react';
import SearchToken from '../../Modals/SearchToken';
import BlueGradientButton from '../../buttons/BlueGradientButton';
import { ChevronDown, ChevronUp, Trash } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { SetToken, RemoveCoin } from '../../reducer/PoolCreation';
import { showAlert, hideAlert } from '../../reducer/Alert';

const SearchTokenShowData = ({ token, index, HandleSelectCheck }) => {
    const dispatch = useDispatch();
    const [TokenData, setTokenData] = useState({});
    const [searchToken, setSearchToken] = useState(false);
    const { CoinCount } = useSelector(state => state.pool);

    useEffect(() => {
        // console.log("index of the coin",index)
    }, [])

    const HandleData = (index, TokenData) => {
        if (TokenData.Name) {
            dispatch(SetToken({
                index: index,
                TokenData: TokenData
            }));
        }
    };

    return (
        <div className='flex justify-between items-center mt-4 z-10' key={token.id}>
            <div className='flex items-center gap-4'>
                <span>{token.ShortForm}</span>
                <span className='bg-[#3E434B] p-1 rounded-lg px-3'>{token.WeightedPercentage}%</span>
                <span onClick={() => {
                    if (CoinCount > 2) {
                        dispatch(RemoveCoin({
                            index: index
                        }));
                    } else {
                        dispatch(showAlert({
                            type: 'danger',
                            text: 'Pool must have more than 1 coin'
                        }));
                        setTimeout(() => {
                            dispatch(hideAlert());
                        }, 3000);
                    }
                }} className='cursor-pointer'>
                    <Trash size={20} />
                </span>
            </div>

            <div>
                {token.Selected ? (
                    <div className='flex flex-col gap-1'>
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
                            <div className=''>
                                {searchToken && <SearchToken setSearchToken={setSearchToken} setTokenData={setTokenData} set id={3} />}
                            </div>
                            <div className='hidden'>
                                {HandleData(index, TokenData)}
                                {HandleSelectCheck()}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <BlueGradientButton customCss={'px-4 py-3 font-cabin font-extrabold'}>
                            <div className='flex items-center gap-1'>
                                Select a Token
                                <span className='cursor-pointer' onClick={() => {
                                    setSearchToken(!searchToken);
                                }}><ChevronDown /></span>
                            </div>
                        </BlueGradientButton>
                        {searchToken && <SearchToken setSearchToken={setSearchToken} setTokenData={setTokenData} set id={3} />}
                        {/* {console.log("index of the selected", index)} */}
                        {HandleData(index, TokenData)}
                        {HandleSelectCheck()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchTokenShowData;
