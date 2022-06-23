import { ReactComponent as BTC } from "../assets/BTC.svg"
import { ReactComponent as BNC } from "../assets/BNC.svg"
import { ReactComponent as ETH } from "../assets/ETH.svg"

import { Coin } from "./interfaces"


export const coinData: Array<Coin> = [
    {
        CoinIcon: <BTC />, CoinName: "bitcoin", CoinAmt: "BTC 0.0025600", CoinValue: "USD 0.5268"
    },
    {
        CoinIcon: <ETH />, CoinName: "ethereum", CoinAmt: "ETH 0.0025600", CoinValue: "USD 0.5268"
    },
    {
        CoinIcon: <BNC />, CoinName: "binanace coin", CoinAmt: "BNB 0.0025600", CoinValue: "USD 0.5268"
    }, {
        CoinIcon: <BTC />, CoinName: "bitcoin", CoinAmt: "BTC 0.0025600", CoinValue: "USD 0.5268"
    },
    {
        CoinIcon: <ETH />, CoinName: "ethereum", CoinAmt: "ETH 0.0025600", CoinValue: "USD 0.5268"
    },
    {
        CoinIcon: <BNC />, CoinName: "binanace coin", CoinAmt: "BNB 0.0025600", CoinValue: "USD 0.5268"
    }
]