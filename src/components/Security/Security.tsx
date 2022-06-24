import React from 'react'
import "./securityStyles.css"
import { MdDone } from "react-icons/md"
import { ReactComponent as ToggleIcon } from "../../assets/ToggleIcon.svg"

import { VscLock } from "react-icons/vsc"
const Security = () => {
    return (
        <div className="TopRightSection">
            <div className="SynDiv">
                <span className="SynCircle">
                    <MdDone className="SynTick" />
                </span>
                <span className="SynText">Synchronized</span>
            </div>
            <div className="LockDiv">
                <ToggleIcon className="LockIcon" />
            </div>
            <div className="LockDiv">
                <VscLock className="LockIcon" />
            </div>
        </div>
    )
}

export default Security