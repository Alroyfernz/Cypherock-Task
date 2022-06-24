import React from 'react'
import "./coinAddressStyles.css"
const CoinAddress: React.FC = () => {
    return (
        <div className="CoinAddressContainer">
            <h4 className="ContainerTitle">
                Coin Address
            </h4>
            <div className="AddressContainer">
                <div className="AddressWrapper">
                    <h3 className="CoinAddressText">
                        25BKJNKNLJL58fjkdhfk26dnfds15
                    </h3>
                    <button className="CopyBtn">Copy</button>
                </div>
            </div>
        </div>
    )
}

export default CoinAddress