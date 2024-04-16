import React, { useState } from 'react'
import { CommonNavbarData } from '../TextData'
import Navbar from '../navbar/Navbar'
import Swap from '../Modals/Swap'
import ConnectWallet from '../Modals/ConnectWallet'
import { useEffect } from 'react'
const SwapPage = () => {
    const [clickConnectWallet, setClickConnectWallet] = useState(false);
    const [walletClicked, setWalletClicked] = useState(false);
    useEffect(() => {
        console.log("connect clicked", clickConnectWallet)
    }, [clickConnectWallet])
    return (
        <div >
            <Navbar NavbarData={CommonNavbarData} setClickConnectWallet={setClickConnectWallet} walletClicked={walletClicked} />

            {clickConnectWallet && <ConnectWallet setClickConnectWallet={setClickConnectWallet} setWalletClicked={setWalletClicked} />}
            <div >
                <Swap />
            </div>
        </div>
    )
}

export default SwapPage
