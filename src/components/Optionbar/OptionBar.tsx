import React from 'react'
import "./optionbarStyles.css"
import { ReactComponent as FilterOne } from "../../assets/FilterOne.svg"
import { ReactComponent as FilterTwo } from "../../assets/FilterTwo.svg"

import { BsChevronDown } from "react-icons/bs"
const OptionBar: React.FC = () => {
    return (
        <div className="OptionBarContainer">
            <div className="OptionBarWrapper">
                <div className="LeftContainer">
                    Total Coin-3
                </div>
                <div className="RightContainer">
                    <div className="YearDiv">
                        <FilterOne /> <span className="FilterTerm">Year</span> <BsChevronDown className="BottomIcon" />
                    </div>
                    <div className="SortDiv">
                        <FilterTwo />
                        <span className="FilterTerm">A-Z</span>
                        <BsChevronDown className="BottomIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OptionBar