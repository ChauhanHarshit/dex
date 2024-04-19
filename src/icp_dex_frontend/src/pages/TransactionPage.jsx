import React from 'react'
import { CommonNavbarData } from '../TextData'
import TransactionComplete from '../Modals/TransactionComplete'
import MobileNavbar from '../navbar/MobileNavbar'

const TransactionPage = () => {
    return (
        <div>
            <MobileNavbar NavbarData={CommonNavbarData} />
            <TransactionComplete />
        </div>
    )
}

export default TransactionPage
