import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi"
import { MdDone } from "react-icons/md"
import "./instructionStyles.css"
const Instruction: React.FC = () => {
    return (
        <div className="InstructionContainer">
            <span className="InstructionTitle">Follow the instruction on device</span>
            <InstructionSub />
            <InstructionSub />
            <InstructionSub />
        </div>
    )
}

const InstructionSub: React.FC = () => {
    return <div className="InstructionSubContainer">
        <div className="subWrapper">
            <div className="LeftWrapper">
                <HiOutlineArrowRight className="RightIcon" />
                <span className="SubInsText">Select the Wallet On device</span>
            </div>
            <div className="RightWrapper">
                <MdDone className="DoneIcon" />
            </div>
        </div>
    </div>
}

export default Instruction