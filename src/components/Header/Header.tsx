import React from 'react'
import { ReactComponent as Logo } from "../../assets/logo.svg"
import "./headerStyles.css"


import { AiOutlineMinus } from "react-icons/ai"
import { RiCheckboxBlankLine } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"
const Header: React.FC = () => {
    return (
        <div className="HeaderContainer">
            <div className="LogoContainer">
                <Logo />
            </div>

            <div className="RightIconContainer">
                <AiOutlineMinus className="RightIcons" />
                <RiCheckboxBlankLine className="RightMidIcons" />
                <IoMdClose className="RightIcons" />
            </div>
        </div>
    )
}

export default Header