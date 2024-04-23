import React, { useEffect, useState } from 'react'


const BorderGradientTransparentButton = ({ customCss, children }) => {
    const [customGradient, setcustomGradient] = useState(null);

    useEffect(() => {
        setcustomGradient(customCss);
    }, [customCss])
    
    return (
        <button className={`  h-[60px] w-[120px] button-gradient-wrapper text-white font-[700] text-base font-cabin rounded-lg py-4 px-[1.875rem] hover:opacity-50`}>
            <span className={`${customGradient} font-normal`}>
                {children}
            </span>
        </button>
    )
}

export default BorderGradientTransparentButton
