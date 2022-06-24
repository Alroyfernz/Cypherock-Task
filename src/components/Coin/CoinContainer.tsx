import React, { useState } from 'react'
import "./coinComponentStyles.css"
import { CgArrowTopRight, CgArrowBottomLeft } from "react-icons/cg"
import { CgClose } from "react-icons/cg"
import { Coin } from '../../Data/interfaces'
import {
    Modal,
    ModalContent,
    ModalBody,
    useDisclosure,
} from '@chakra-ui/react'
import ModalNav from '../ModalNav/ModalNav'
import Instruction from '../Instruction/Instruction'
import CodeComp from '../Code/CodeComp'
import { FirstSectionInstructionArray, SecondSectionInstructionArray } from '../../Data/data'
import CoinAddress from '../CoinAddress/CoinAddress'
const CoinContainer: React.FC<Coin> = ({ CoinName, CoinAmt, CoinValue, CoinIcon }) => {
    const [section, setSection] = useState<string>("Device") //To toggle section in receive modal

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {/* RECEVE MODAL */}
            <Modal isOpen={isOpen} onClose={onClose}>

                <ModalContent>

                    <CgClose className="ModalCloseIcon" onClick={onClose} />
                    <ModalBody>
                        <div className="ModalWrapper">

                            <h1 className="ModalText">
                                Receive
                            </h1>
                            <ModalNav section={section} setSection={setSection} />
                            <div className="SectionContainer">
                                {section === 'Device' && <>
                                    <Instruction InstructionTitle="Follow the instruction on device" InstructionArray={FirstSectionInstructionArray} />

                                </>}
                                {section === 'Verification' && <>
                                    <CodeComp />
                                    <Instruction InstructionTitle="Verify address on device" InstructionArray={SecondSectionInstructionArray} />

                                </>}
                                {section === 'Receive' &&
                                    <>
                                        <CoinAddress />
                                        <span className="VerifyText">
                                            ! Address Verfied
                                        </span>

                                        <button className="VerifyBtn">
                                            Re-verify
                                        </button>
                                    </>}
                            </div>
                        </div>

                    </ModalBody>


                </ModalContent>
            </Modal>
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
                        <div className="Receive" onClick={onOpen}>
                            <CgArrowBottomLeft className="PointerIcons" /> receive
                        </div>
                        <div className="Send">
                            <CgArrowTopRight className="PointerIcons" /> send
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinContainer