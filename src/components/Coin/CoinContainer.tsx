import React from 'react'
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

const CoinContainer: React.FC<Coin> = ({ CoinName, CoinAmt, CoinValue, CoinIcon }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>

                <ModalContent>


                    <ModalBody>
                        <div className="ModalWrapper">
                            <CgClose className="ModalCloseIcon" />
                            <h1 className="ModalText">
                                Receive
                            </h1>
                            <ModalNav />
                            <Instruction />
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