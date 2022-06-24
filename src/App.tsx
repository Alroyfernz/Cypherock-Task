import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/sidebar/SideBar';
import { MdDone } from "react-icons/md"
import { VscLock } from "react-icons/vsc"
import OptionBar from './components/Optionbar/OptionBar';
import CoinContainer from './components/Coin/CoinContainer';
import { coinData } from "./Data/data"
import { Coin } from './Data/interfaces';
import { ReactComponent as ToggleIcon } from "./assets/ToggleIcon.svg"
function App() {
  return (
    <div className="App">
      <Header />
      <div className="AppWrapper">
        <SideBar />
        <div className="AppRightPart">

          <div className="TopRightSection">
            <div className="SynDiv">
              <span className="SynCircle">
                <MdDone className="SynTick" />
              </span>
              <span className="SynText">Synchronized</span>
            </div>
            <div className="LockDiv">
              <ToggleIcon className="LockIcon" />
            </div>
            <div className="LockDiv">
              <VscLock className="LockIcon" />
            </div>
          </div>

          <div className="WalletTitleContainer">
            <h1 className="WalletMainTitle">Wallet 1</h1>
            <button className="AddCoinBtn">
              + Add Coin
            </button>
          </div>
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

    </div>
  );
}

export default App;
