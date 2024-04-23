import React, { useEffect, useState } from 'react'
import { Bolt } from 'lucide-react';
import BorderGradientButton from '../../buttons/BorderGradientButton'
import SearchTokenShowData from '../../components/searchTokenForPoolComponents/SearchTokenShowData';
import GradientButton from '../../buttons/GradientButton';
import { showAlert, hideAlert } from '../../reducer/Alert';
import { useDispatch } from 'react-redux';

const SelectTokensForPools = () => {

    const dispatch = useDispatch();
    const [PercentShare, SetPercentShare] = useState(50);
    const [ButtonActive, SetButtonActive] = useState(false);

    const [Tokens, SetTokens] = useState([
        {
            Name: 'Token1',
            ShortForm: 'Token1',
            Selected: false,
            WeightedPercentage: PercentShare,
            ImagePath: null,
        },
        {
            Name: "Token2",
            ShortForm: 'Token2',
            Selected: false,
            WeightedPercentage: PercentShare,
            ImagePath: null,
        }
    ]);

    useEffect(() => {
        let ReCalculatedShare = parseFloat(100 / Tokens.length);

        SetPercentShare(ReCalculatedShare);
    }, [Tokens])


    const HandleSelectCheck = () => {
        const allTokensSelected = Tokens.every((token) => token.Selected);
        console.log("Selected or not->", allTokensSelected)
        SetButtonActive(allTokensSelected);
    }


    return (
        <div className='z-50 w-10/12 lg:w-4/12 md:w-6/12 h-5/6 flex flex-col gap-4 p-6 bg-gradient-to-b from-[#3E434B] to-[#02060D] border mx-auto rounded-lg'>
            <div className='w-[70%] place-self-end  flex justify-between'>
                <span className='font-fahkwang font-light text-3xl '>Select Tokens</span>
                <Bolt size={30} className='cursor-pointer' onClick={() => { console.log("settings open") }} />
            </div>



            <div>
                {Tokens.map((token, index) => {


                    const weightedPercentage = parseFloat(100 / Tokens.length);
                    token.WeightedPercentage = weightedPercentage;
                    return (
                        <SearchTokenShowData token={token} key={index} HandleSelectCheck={HandleSelectCheck} />
                    );
                })}
            </div>


            <div className='place-self-end mx-10'
                onClick={() => {
                    SetTokens([...Tokens,
                    {
                        Name: 'Token1',
                        ShortForm: 'Token1',
                        Selected: false,
                        WeightedPercentage: PercentShare,
                        ImagePath: null,
                    }])
                }}
            >
                <BorderGradientButton>
                    Add Token
                </BorderGradientButton>
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
                    Next
                </GradientButton>
            </div>
        </div>
    )
}

export default SelectTokensForPools

