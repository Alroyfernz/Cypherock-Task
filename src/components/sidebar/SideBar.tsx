import React from 'react'
import "./sidebarStyles.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,

    Box,
} from '@chakra-ui/react'
const SideBar: React.FC = () => {
    return (
        <div className="SidebarContainer">
            <div className="SidebarWrapper">
                <Accordion allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                Portfolio

                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={2}>

                            <div className="WalletBox">
                                <h3 className="WalletTitle">Portfolio 1</h3>

                            </div>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Wallets
                                </Box>

                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={2}>

                            <div className="WalletBox">
                                <h3 className="WalletTitle">wallet 1</h3>
                                <button className="AddWalletBtn">
                                    <span>  + add wallet</span>
                                </button>
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Last Transactions
                                </Box>

                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={2}>

                            <div className="WalletBox">
                                <h3 className="WalletTitle"> Transaction 1</h3>

                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Tutorials
                                </Box>

                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={2}>

                            <div className="WalletBox">
                                <h3 className="WalletTitle"> Tutorial 1</h3>

                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Settings
                                </Box>

                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={2}>

                            <div className="WalletBox">
                                <h3 className="WalletTitle"> Setting 1</h3>

                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <button className="SupportBtn">
                    Support
                </button>
            </div>
        </div>
    )
}

export default SideBar