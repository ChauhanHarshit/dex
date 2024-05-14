import React, { useState, useEffect } from 'react'
import { CommonNavbarData } from '../TextData'
import MobileNavbar from '../navbar/MobileNavbar'
import Navbar from '../navbar/Navbar'
import SwapPage from './SwapPage'
import TransactionPage from './TransactionPage'
import PoolPage from './PoolPage'
import PortfolioPage from './PortfolioPage'
import { Routes, Route } from 'react-router-dom'
import ConnectWallet from '../Modals/ConnectWallet'
const HomePage = () => {
    const [clickConnectWallet, setClickConnectWallet] = useState(false);
    const [walletClicked, setWalletClicked] = useState(false);

    useEffect(() => {
        console.log("wallet connect click", walletClicked)
    }, [walletClicked])
    return (
        <div className='w-full h-screen'>

            {clickConnectWallet && <ConnectWallet setClickConnectWallet={setClickConnectWallet} setWalletClicked={setWalletClicked} />}
            <MobileNavbar NavbarData={CommonNavbarData} setClickConnectWallet={setClickConnectWallet} />
            <Routes>
                <Route path="/" element={<SwapPage clickConnectWallet={clickConnectWallet} setClickConnectWallet={setClickConnectWallet} setWalletClicked={setWalletClicked} />} />
                <Route path="/transaction-successfull" element={<TransactionPage />} />
                <Route path="/portfolio/*" element={<PortfolioPage />} />
                <Route path="/pool/*" element={<PoolPage />} />

            </Routes>
        </div>
    )
}

export default HomePage
