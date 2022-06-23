import React from 'react'
import "./sidebarStyles.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
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
                        <AccordionPanel pb={4}>


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
                        <AccordionPanel pb={4}>

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
                        <AccordionPanel pb={4}>


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
                        <AccordionPanel pb={4}>

                            wallet 1
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
                        <AccordionPanel pb={4}>

                            wallet 1
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <button className="SupportBtn">
                    Supports
                </button>
            </div>
        </div>
    )
}

export default SideBar