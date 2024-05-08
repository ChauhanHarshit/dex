import React from 'react'

const BlueGradientButton = ({ customCss, children }) => {
    return (
        <button className={`${customCss} bg-gradient-to-r from-[#05071D] via-[#546093] to-[#05071D] border border-white rounded-lg`}>
            {children}
        </button>
    )
}

export default BlueGradientButton
