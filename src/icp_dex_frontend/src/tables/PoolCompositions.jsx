import React, { useEffect, useState } from 'react';
import { PoolCompositionsData } from '../TextData';
const PoolCompositions = ({ TableData }) => {
  const [displayCount, setDisplayCount] = useState(Math.min(5, TableData.length));
  const [buttonVisible, setButtonVisibility] = useState(true);
  useEffect(() => {
    if (TableData.length < 6) {
      setButtonVisibility(false)
    }
  }, [TableData])

  return (
    <div className='w-11/12 mx-auto my-6 text-white'>
      <div className='border border-gray-500 border-opacity-80 rounded-xl'>
        {/* PoolCompositionsData.Headings */}
        <div className='grid grid-cols-12 items-center rounded-xl p-4'>
          {PoolCompositionsData.Headings.map((heading, index) => (
            <div key={index} className='col-span-3 text-center text-2xl font-cabin'>
              {heading}
            </div>
          ))}
        </div>

        {/* Entries */}
        <div className='bg-[#000711] items-center rounded-b-xl p-4'>
          {TableData.slice(0, displayCount).map((token, index) => (
            <div key={index} className='grid grid-cols-12 items-center text-base  font-cabin my-4'>
              {/* Columns */}
              <div className='col-span-3 flex justify-center gap-4 items-center text-center'>
                <span className='bg-[#3D3F47] p-1 rounded-lg'><img src={token.ImagePath} alt="" className='w-8 h-8 transform scale-125' /></span>
                <span>{token.ShortForm}</span>
                <span>{token.WeightedPercentage} %</span>
              </div>
              <div className='col-span-3 text-center'>{token.WeightedPercentage} %</div>
              <div className='col-span-3 text-center'>$ {token.Balance.toLocaleString('en-US')}</div>
              <div className='col-span-3 text-center'>$ {token.Value.toLocaleString('en-US')}</div>
            </div>
          ))}


          {buttonVisible && (
            <div>
              {TableData.length > displayCount && (
                <div className='text-center mt-4'>
                  <button className='bg-gray-800 text-white px-4 py-2 rounded-md' onClick={() => setDisplayCount(displayCount + 5)}>
                    {PoolCompositionsData.SeeMoreButtonText}
                  </button>
                </div>
              )}

              {TableData.length <= displayCount && (
                <div className='text-center mt-4'>
                  <button className='bg-gray-800 text-white px-4 py-2 rounded-md' onClick={() => setDisplayCount(Math.min(5, TableData.length))}>
                    {PoolCompositionsData.SeeLessButtonText}
                  </button>
                </div>
              )}
            </div>
          )}




        </div>



      </div>
    </div>
  );
};

export default PoolCompositions;
