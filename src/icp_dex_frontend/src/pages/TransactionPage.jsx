import React from 'react'
import { CommonNavbarData } from '../TextData'
import TransactionComplete from '../Modals/TransactionComplete'
import Navbar from '../navbar/Navbar'
const TransactionPage = () => {
    return (
        <div>
            <Navbar NavbarData={CommonNavbarData} />
            <TransactionComplete />
        </div>
    )
}

export default TransactionPage
