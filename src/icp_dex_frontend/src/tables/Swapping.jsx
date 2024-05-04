import React, { useState, useEffect } from 'react'
import { SwappingTableData, SwappingTextData } from '../TextData';
import { MoveRight } from 'lucide-react';
import WalletID from '../assets/images/WalletID.png'
const Swapping = ({ id }) => {

  const [displayCount, setDisplayCount] = useState(10);
  const SwappingData = SwappingTableData[id].Enteries

  useEffect(() => {
    console.log("Swappppp DSatatatatatat", SwappingData)
    console.log("DisplayCount length", displayCount)
    console.log("array length", SwappingData.length)
  }, [displayCount])


  return (
    <div>
      <div className='w-11/12 mx-auto my-6 text-white'>
        <div className='border border-gray-500 border-opacity-80 rounded-xl'>
          {/* SwappingTextData.Headings */}
          <div className='grid grid-cols-12 items-center rounded-xl p-4'>
            {SwappingTextData.Headings.map((heading, index) => (
              <div key={index} className='col-span-3 text-center text-2xl font-cabin'>
                {heading}
              </div>
            ))}
          </div>

          {/* Entries */}
          <div className='bg-[#000711] items-center rounded-b-xl p-4'>
            {SwappingData.slice(0, displayCount).map((swap, index) => (
              <div key={index} className='grid grid-cols-12 items-center text-base font-normal font-cabin my-4'>
                {/* Columns */}
                <div className='col-span-3 flex justify-center gap-4 items-center text-center'>
                  <span className='bg-[#3D3F47] p-1 rounded-lg flex justify-between gap-1  items-center'>
                    <img src={swap.FromToken.ImagePath} alt="" className='w-6 h-6 transform scale-125' />
                    <span>{swap.FromToken.Value}</span>
                  </span>
                  <span><MoveRight /></span>
                  <span className='bg-[#3D3F47] p-1 rounded-lg flex justify-between gap-1  items-center'>
                    <img src={swap.ToTokenn.ImagePath} alt="" className='w-6 h-6 transform scale-125' />
                    <span>{swap.ToTokenn.Value}</span>
                  </span>
                </div>
                <div className='col-span-3 text-center'>$ {swap.Value.toLocaleString('en-US')}</div>
                <div className='col-span-3 flex justify-center gap-4 items-center'>
                  <span>
                    <img src={WalletID} alt="" className='w-4 h-4 rounded-full' />
                  </span>
                  <span>
                    {swap.WalletId}
                  </span>
                </div>
                <div className='col-span-3 text-center'>{swap.Time.toLocaleString()}</div>
              </div>
            ))}



            {SwappingData.length > displayCount && (
              <div className='text-center mt-4'>
                <button className='bg-gray-800 text-white px-4 py-2 rounded-md' onClick={() => setDisplayCount(displayCount + 10)}>
                  See More
                </button>
              </div>
            )}
            {
              ((SwappingData.length <= displayCount)) && (
                <div className='text-center mt-4'>
                  <button className='bg-gray-800 text-white px-4 py-2 rounded-md' onClick={() => setDisplayCount(10)}>
                    See Less
                  </button>
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

export default Swapping
