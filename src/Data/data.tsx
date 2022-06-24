import { ReactComponent as BTC } from "../assets/BTC.svg"
import { ReactComponent as BNC } from "../assets/BNC.svg"
import { ReactComponent as ETH } from "../assets/ETH.svg"

import { Coin } from "./interfaces"
import { InstructionComponenet } from "./interfaces"


export const coinData: Array<Coin> = [
    {
        CoinIcon: <BTC />, CoinName: "bitcoin", CoinAmt: "BTC 0.0025600", CoinValue: "USD 0.5268"
    },
    {
        CoinIcon: <ETH />, CoinName: "ethereum", CoinAmt: "ETH 0.0025600", CoinValue: "USD 0.5268"
    },
    {
        CoinIcon: <BNC />, CoinName: "binanace coin", CoinAmt: "BNB 0.0025600", CoinValue: "USD 0.5268"
    },
    {
        CoinIcon: <BTC />, CoinName: "bitcoin", CoinAmt: "BTC 0.0025600", CoinValue: "USD 0.5268"
    },
    {
        CoinIcon: <ETH />, CoinName: "ethereum", CoinAmt: "ETH 0.0025600", CoinValue: "USD 0.5268"
    },
    {
        CoinIcon: <BNC />, CoinName: "binanace coin", CoinAmt: "BNB 0.0025600", CoinValue: "USD 0.5268"
    },
    {
        CoinIcon: <BTC />, CoinName: "bitcoin", CoinAmt: "BTC 0.0025600", CoinValue: "USD 0.5268"
    },
    {
        CoinIcon: <ETH />, CoinName: "ethereum", CoinAmt: "ETH 0.0025600", CoinValue: "USD 0.5268"
    },
    {
        CoinIcon: <BNC />, CoinName: "binanace coin", CoinAmt: "BNB 0.0025600", CoinValue: "USD 0.5268"
    },
]

export const FirstSectionInstructionArray: Array<InstructionComponenet> = [{
    title: "Select the Wallet On device", isDone: true,

}, { title: "Select the Coin on device", isDone: true }, { title: "Tap 1 card of any 4 Cards", isDone: true }]


export const SecondSectionInstructionArray: Array<InstructionComponenet> = [{
    title: "Select the Wallet On device", isDone: false,

}]


export const processMap = new Map(Object.entries({
    "Device": 1,
    "Verification": 2,
    "Receive": 3
}))