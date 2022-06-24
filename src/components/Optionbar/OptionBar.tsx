import React from 'react'
import "./optionbarStyles.css"
import { ReactComponent as FilterOne } from "../../assets/FilterOne.svg"
import { ReactComponent as FilterTwo } from "../../assets/FilterTwo.svg"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

    Button,
} from '@chakra-ui/react'
import { BsChevronDown } from "react-icons/bs"
import { coinData } from '../../Data/data'
const OptionBar: React.FC = () => {
    return (
        <div className="OptionBarContainer">
            <div className="OptionBarWrapper">
                <div className="LeftContainer">
                    {coinData.length > 1 ? `Total Coins - ${coinData.length}` : `1 Total Coin - ${coinData.length}`}
                </div>
                <div className="RightContainer">
                    <div className="YearDiv">
                        <FilterOne /> <span className="FilterTerm">Year</span> <BsChevronDown className="BottomIcon" />
                    </div>

                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <div className="SortDiv">
                                    <FilterTwo />

                                    <MenuButton isActive={isOpen} as={Button}>
                                        <span className="FilterTerm">A-Z</span>
                                    </MenuButton>
                                    <BsChevronDown className="BottomIcon" />
                                </div>

                                <MenuList>
                                    <MenuItem>Amount High - Low</MenuItem>
                                    <MenuItem>Amount Low - High</MenuItem>
                                    <MenuItem>Arrange A-Z</MenuItem>
                                    <MenuItem>Arrange Z-A</MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default OptionBar