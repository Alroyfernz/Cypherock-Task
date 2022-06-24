import React from 'react'
import "./modalnavStyles.css"
import { MdDone } from "react-icons/md"

const ModalNav: React.FC = () => {
    return (
        <div className="NavContainer">
            <div className="Box">
                <div className="BoxWrapper">
                    <div className="OuterCicle">
                        <div className="InnerCircle processDone"><MdDone className="ProcessIcon" /></div>
                    </div>
                    <h4 className="BoxTitle processDoneText">
                        Device
                    </h4>
                </div>
            </div>
            <div className="Box">
                <div className="BoxWrapper">
                    <div className="OuterCicle CircleSelected">
                        <div className="InnerCircle InnerSelected">2</div>
                    </div>
                    <h4 className="BoxTitle TextSelected">
                        Verification
                    </h4>
                </div>
            </div>
            <div className="Box">
                <div className="BoxWrapper">
                    <div className="OuterCicle">
                        <div className="InnerCircle">3</div>
                    </div>
                    <h4 className="BoxTitle">
                        Receive
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default ModalNav