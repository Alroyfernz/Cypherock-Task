import React from 'react'
import "./modalnavStyles.css"
const ModalNav: React.FC = () => {
    return (
        <div className="NavContainer">
            <div className="Box">
                <div className="BoxWrapper">
                    <div className="OuterCicle CircleSelected">
                        <div className="InnerCircle InnerSelected">1</div>
                    </div>
                    <h4 className="BoxTitle TextSelected">
                        Device
                    </h4>
                </div>
            </div>
            <div className="Box">
                <div className="BoxWrapper">
                    <div className="OuterCicle">
                        <div className="InnerCircle">2</div>
                    </div>
                    <h4 className="BoxTitle">
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