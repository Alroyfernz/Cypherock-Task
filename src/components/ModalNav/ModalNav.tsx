import React from 'react'
import "./modalnavStyles.css"
import { MdDone } from "react-icons/md"
import { processMap } from "../../Data/data"
interface Props {
    section: string;
    setSection: React.Dispatch<React.SetStateAction<string>>;

}
const ModalNav: React.FC<Props> = ({ section, setSection }) => {
    console.log(processMap.get('Receive'));

    const CheckDone = (inputSection: any): boolean | null => {
        var idx = Number(processMap.get(section));
        console.log(idx, 'which idx ');

        var itr = 1;
        var flag: boolean | null = null;
        processMap.forEach((value, key) => {


            if (itr >= idx) { if (flag == null) flag = false; }
            if (key === inputSection && flag !== false) {

                flag = true;
            }
            itr++;
        })

        return flag;

    }



    const changeSection = (section: string) => {
        setSection(section);
    }
    const presentProcess = (process: string) => {
        return section === process;
    }
    const CurrentStyleComp = (section: string): string => {
        return presentProcess(section) ? "InnerCircle InnerSelected" : CheckDone(section) ? "InnerCircle processDone" : "InnerCircle"
    }
    const CurrentStyleComp2 = (section: string): string => {
        return presentProcess(section) ? "BoxTitle TextSelected" : CheckDone(section) ? "BoxTitle processDoneText" : 'BoxTitle'
    }

    const CurrentStyleComp3 = (section: string): any | number => {
        return CheckDone(section) ? <MdDone className="ProcessIcon" /> : processMap.get(section)
    }


    return (
        <div className="NavContainer">
            <div className="Box">
                <div className="BoxWrapper" onClick={() => changeSection('Device')}>
                    <div className="OuterCicle" >
                        <div className={CurrentStyleComp('Device')}>{CurrentStyleComp3('Device')}</div>
                    </div>
                    <h4 className={CurrentStyleComp2('Device')}>
                        Device
                    </h4>
                </div>
            </div>
            <div className="Box">
                <div className="BoxWrapper">
                    <div className="OuterCicle" onClick={() => changeSection('Verification')}>
                        <div className={CurrentStyleComp('Verification')}>{CurrentStyleComp3('Verification')}</div>
                    </div>
                    <h4 className={CurrentStyleComp2('Verification')}>
                        Verification
                    </h4>
                </div>
            </div>
            <div className="Box">
                <div className="BoxWrapper">
                    <div className="OuterCicle" onClick={() => changeSection('Receive')}>
                        <div className={CurrentStyleComp('Receive')}>{CurrentStyleComp3('Receive')}</div>
                    </div>
                    <h4 className={CurrentStyleComp2('Receive')}>
                        Receive
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default ModalNav