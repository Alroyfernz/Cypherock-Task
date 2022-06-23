import React from 'react'
import "./coincomponentStyles.css"
import { CgArrowTopRight, CgArrowBottomLeft } from "react-icons/cg"
import { Coin } from '../../Data/interfaces'


const CoinContainer: React.FC<Coin> = ({ CoinName, CoinAmt, CoinValue, CoinIcon }) => {
    return (
        <div className="CoinContainer">
            <div className="CoinWrapper">

                <div className="CoinMainDiv">
                    <span className="CoinCircle">
                        {CoinIcon}
                    </span>
                    <h2 className="CoinName">{CoinName}</h2>
                </div>
                <div className="CoinAmt">
                    {CoinAmt}
                </div>
                <div className="Coin">
                    {CoinValue}
                </div>
                <div className="TransactionDiv">
                    <div className="Receive">
                        <CgArrowBottomLeft className="PointerIcons" /> receive
                    </div>
                    <div className="Send">
                        <CgArrowTopRight className="PointerIcons" /> send
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinContainer