import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/sidebar/SideBar';

import OptionBar from './components/Optionbar/OptionBar';
import CoinContainer from './components/Coin/CoinContainer';
import { coinData } from "./Data/data"
import { Coin } from './Data/interfaces';
import { ReactComponent as Logo } from "./assets/logo.svg"
import { Progress } from '@chakra-ui/react';
import WalletTitle from './components/WalletTitle/WalletTitle';
import Security from './components/Security/Security';
function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  useEffect(() => {

    const interval = setInterval(() => {

      setProgress((prev) => prev + 1)


    }, 100)
    setTimeout(() => {
      setLoading(false)
      clearInterval(interval)
    }, 1000)



  }, [progress])
  return (
    <div className="App">
      {loading ? <div>
        <Logo className="LoaderLogo" />
        <Progress colorScheme="blackAlpha" size='sm' value={progress} /></div> :
        <>
          <Header />
          <div className="AppWrapper">
            <SideBar />
            <div className="AppRightPart">

              <Security />

              <WalletTitle />
              <OptionBar />
              <div className="CoinItemsWrapper">
                {
                  coinData.map(({ CoinIcon, CoinName, CoinValue, CoinAmt }: Coin, idx) => {
                    return (<CoinContainer key={idx} CoinIcon={CoinIcon} CoinName={CoinName} CoinValue={CoinValue} CoinAmt={CoinAmt} />)
                  })
                }
              </div>
            </div>
          </div>
        </>}
    </div>
  );
}

export default App;
