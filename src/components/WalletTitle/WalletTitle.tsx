import React from 'react'
import "./walletTitleStyles.css"
const WalletTitle = () => {
    return (
        <div className="WalletTitleContainer">
            <h1 className="WalletMainTitle">Wallet 1</h1>
            <button className="AddCoinBtn">
                + Add Coin
            </button>
        </div>
    )
}

export default WalletTitle