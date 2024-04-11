import React from 'react'

const BorderGradientButton = ({ children }) => {
    return (
        // <div className=" h-[60px] w-[150px] rounded-lg p-px bg-gradient-to-r from-[#8D4C00] via-[#3E0200] to-[#00308E]">
        //     <button className="rounded-[calc(0.6rem-1px)] w-full h-full       text-white font-cabin font-[700] text-base">
        //         {children}
        //     </button>
        // </div>
        <button className=" h-[60px] w-[150px] button-gradient-wrapper text-white font-[700] text-base font-cabin rounded-lg py-4 px-[1.875rem] ">
            <span className="button-border-gradient-content p-4 ">
                {children}
            </span>
        </button>
    )
}

export default BorderGradientButton
