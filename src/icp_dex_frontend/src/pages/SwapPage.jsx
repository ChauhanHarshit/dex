import React from 'react'
import Swap from '../Modals/Swap'
import ConnectWallet from '../Modals/ConnectWallet'
const SwapPage = ({clickConnectWallet,setClickConnectWallet,setWalletClicked}) => {

    return (
        <div>
            {clickConnectWallet && <ConnectWallet setClickConnectWallet={setClickConnectWallet} setWalletClicked={setWalletClicked} />}
            <div >
                <Swap />
            </div>
        </div>
    )
}

export default SwapPage
