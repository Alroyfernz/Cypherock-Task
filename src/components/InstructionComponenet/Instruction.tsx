import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi"
import { MdDone } from "react-icons/md"
import "./instructionStyles.css"

import { InstructionComponenet } from "../../Data/interfaces"

interface Props {
    InstructionTitle: string;
    InstructionArray: Array<InstructionComponenet>
}
const Instruction: React.FC<Props> = ({ InstructionTitle, InstructionArray }) => {
    return (
        <div className="InstructionContainer">
            <span className="InstructionTitle">{InstructionTitle}</span>
            {
                InstructionArray.map(({ title, isDone }: InstructionComponenet, idx) => {
                    return (<InstructionSub key={idx} title={title} isDone={isDone} />)
                })
            }


        </div>
    )
}

const InstructionSub: React.FC<InstructionComponenet> = ({ title, isDone }) => {
    return <div className="InstructionSubContainer">
        <div className="subWrapper">
            <div className="LeftWrapper">
                <HiOutlineArrowRight className="RightIcon" />
                <span className="SubInsText">{title}</span>
            </div>
            <div className="RightWrapper">
                {isDone && <MdDone className="DoneIcon" />}
            </div>
        </div>
    </div>
}

export default Instruction