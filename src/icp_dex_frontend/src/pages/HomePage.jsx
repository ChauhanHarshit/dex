import React, { useState, useEffect } from 'react'
import { CommonNavbarData } from '../TextData'
import MobileNavbar from '../navbar/MobileNavbar'
import Navbar from '../navbar/Navbar'
import SwapPage from './SwapPage'
import TransactionPage from './TransactionPage'
import PoolPage from './PoolPage'
import {Routes,Route} from 'react-router-dom'
const HomePage = () => {
    const [clickConnectWallet, setClickConnectWallet] = useState(false);
    const [walletClicked, setWalletClicked] = useState(false);


    return (
        <div className='w-full h-screen'>
            <MobileNavbar NavbarData={CommonNavbarData} setClickConnectWallet={setClickConnectWallet} walletClicked={walletClicked} />

            <Routes>
                <Route path="/" element={<SwapPage clickConnectWallet={clickConnectWallet} setClickConnectWallet={setClickConnectWallet} setWalletClicked={setWalletClicked}/>} />
                <Route path="/transaction-successfull" element={<TransactionPage />} />
                <Route path="/pool/*" element={<PoolPage />} />
                
            </Routes>
        </div>
    )
}

export default HomePage
