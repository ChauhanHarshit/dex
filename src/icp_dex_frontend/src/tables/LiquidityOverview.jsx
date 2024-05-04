import React, { useEffect, useState } from 'react'
import { LiquidityOverviewText, LiquidityOverviewData } from '../TextData'
import { Dropdown } from "flowbite-react";
import { Plus, Minus } from 'lucide-react';
import WalletID from '../assets/images/WalletID.png'
const LiquidityOverview = ({ id }) => {

  let LiquidityTableData = LiquidityOverviewData[id].Entries
  useEffect(() => {
    console.log("Liuquidity Data:->", LiquidityTableData)
  }, [])
  const [LiquidityType, setLiquidityType] = useState('All Liquidity')
  const [displayCount, setDisplayCount] = useState(5);
  const [buttonVisible, setButtonVisibility] = useState(true);
  useEffect(() => {
    if (LiquidityTableData.length < 6) {
      setButtonVisibility(false)
    }
  }, [LiquidityTableData])
  return (
    <div>
      <div className='w-11/12 mx-auto my-6 text-white'>
        <div className='border border-gray-500 border-opacity-80 rounded-xl'>
          {/* LiquidityOverview Headings */}
          <div className='grid grid-cols-12 items-center rounded-xl p-4'>

            <div className='col-span-3 text-center text-xl font-cabin'>
              <Dropdown label={`${LiquidityOverviewText.Headings[0]} (${LiquidityType})`} dismissOnClick={true}
                className='rounded-lg bg-[#00308E]'>
                <div onClick={() => setLiquidityType('All Liquidity')}

                  className={`${LiquidityType === "All Liquidity" ? 'bg-[#010427] rounded-lg m-2' : ''}`}>
                  <Dropdown.Item>All Liquidity</Dropdown.Item>
                </div>
                <div onClick={() => setLiquidityType('My Liquidity')}
                  className={`${LiquidityType === "My Liquidity" ? 'bg-[#010427] rounded-lg m-2' : ''}`}>
                  <Dropdown.Item>My Liquidity</Dropdown.Item>
                </div>
              </Dropdown>
            </div>

            {LiquidityOverviewText.Headings.slice(1).map((heading, index) => (
              <div key={index} className='col-span-3 text-center text-xl font-cabin'>
                {heading}
              </div>
            ))}
          </div>

          {/* Entries */}
          <div className='bg-[#000711] items-center rounded-b-xl p-4'>
            {LiquidityTableData.slice(0, displayCount).map((liquidity, index) => (
              <div key={index} className='grid grid-cols-12 items-center text-base font-normal font-cabin my-4'>
                {/* Columns */}
                <div className='col-span-3 flex justify-start gap-3 items-center text-center mx-4'>
                  {liquidity.Tokens.map((token, index) => (
                    <div key={index}>
                      <span className='bg-[#3D3F47] p-1 rounded-lg flex justify-between gap-1  items-center'>
                        <img src={token.ImagePath} alt="" className='w-6 h-6 transform scale-125' />
                        <span>{token.Value}</span>
                      </span>
                    </div>
                  ))}

                  <span>
                    {
                      liquidity.Impact === "Positive" ? (
                        <span><Plus color={"green"} /></span>
                      ) : (
                        <span>
                          <Minus color={"red"} />
                        </span>
                      )
                    }
                  </span>
                </div>
                <div className='col-span-3 text-center'>$ {liquidity.Value.toLocaleString('en-US')}</div>
                <div className='col-span-3 flex justify-center gap-4 items-center'>
                  <span>
                    <img src={WalletID} alt="" className='w-4 h-4 rounded-full' />
                  </span>
                  <span>
                    {liquidity.WalletId}
                  </span>
                </div>
                <div className='col-span-3 text-center'>{liquidity.Time.toLocaleString()}</div>
              </div>
            ))}


            {
              buttonVisible && (
                <div>
                  {LiquidityTableData.length > displayCount && (
                    <div className='text-center mt-4'>
                      <button className='bg-gray-800 text-white px-4 py-2 rounded-md' onClick={() => setDisplayCount(displayCount + 10)}>
                        See More
                      </button>
                    </div>
                  )}
                  {
                    ((LiquidityTableData.length <= displayCount)) && (
                      <div className='text-center mt-4'>
                        <button className='bg-gray-800 text-white px-4 py-2 rounded-md' onClick={() => setDisplayCount(10)}>
                          See Less
                        </button>
                      </div>
                    )
                  }
                </div>
              )
            }


          </div>

          {/* See More Button */}

        </div>
      </div>

    </div>
  )
}

export default LiquidityOverview
