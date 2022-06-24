import React, { useState } from 'react'
import "./coincomponentStyles.css"
import { CgArrowTopRight, CgArrowBottomLeft } from "react-icons/cg"
import { CgClose } from "react-icons/cg"
import { Coin } from '../../Data/interfaces'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import ModalNav from '../ModalNav/ModalNav'
import Instruction from '../InstructionComponenet/Instruction'
import CodeComp from '../CodeComponent/CodeComp'
import { FirstSectionInstructionArray, SecondSectionInstructionArray } from '../../Data/data'
import CoinAddress from '../CoinAddress/CoinAddress'
const CoinContainer: React.FC<Coin> = ({ CoinName, CoinAmt, CoinValue, CoinIcon }) => {
    const [section, setSection] = useState<string>("Device")
    const [doneProcess, setDoneProcess] = useState<string | null>(null)

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>

                <ModalContent>


                    <ModalBody>
                        <div className="ModalWrapper">
                            <CgClose className="ModalCloseIcon" onClick={onClose} />
                            <h1 className="ModalText">
                                Receive
                            </h1>
                            <ModalNav section={section} setSection={setSection} />
                            <div style={{ minHeight: '50vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                {section == 'Device' && <>
                                    <Instruction InstructionTitle="Follow the instruction on device" InstructionArray={FirstSectionInstructionArray} />

                                </>}
                                {section == 'Verification' && <>
                                    <CodeComp />
                                    <Instruction InstructionTitle="Verify address on device" InstructionArray={SecondSectionInstructionArray} />

                                </>}
                                {section == 'Receive' &&
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