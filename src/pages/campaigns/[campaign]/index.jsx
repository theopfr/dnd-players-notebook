
import { useState, useEffect } from "react";
import styles from "../../../../styles/SelectedCampaign.module.css";
import CollectionBox from "../../../components/CollectionBox";
import { NotebookOptionsEnum } from "../../../components/utils";

export default function SelectedCampaign() {

    const [sessionNumber, setSessionNumber] = useState(0);
    const [dayNumber, setDayNumber] = useState(0);
    const [currentLocation, setCurrentLocation] = useState("Probably Faêrun, right?");

    return (
        <div className={styles.selectedCampaignParent}>
            <div className={styles.campaignStateBox}>

                <div className={styles.campaignStateSubBox}>
                    <p className={styles.campaignStateTitle}>session number:</p>
                    <input className={styles.campaignStateInput} placeholder={sessionNumber} 
                        type="number" min="0" ondrop="return false;" onpaste="return false;" onBlur={(e) => {
                            if (e.target.value.length > 0) {
                                setSessionNumber(e.target.value)
                            }
                            else {
                                ;
                            }
                        }}
                    />
                </div>

                <div className={styles.campaignStateSubBox}>
                    <p className={styles.campaignStateTitle}>day number:</p>
                    <input className={styles.campaignStateInput} placeholder={dayNumber} 
                        type="number" min="0" ondrop="return false;" onpaste="return false;" onBlur={(e) => {
                            if (e.target.value.length > 0) {
                                setDayNumber(e.target.value)
                            }
                            else {
                                ;
                            }
                        }}
                    />
                </div>

                <div className={styles.campaignStateSubBox} style={{borderRight: "none"}}>
                    <p className={styles.campaignStateTitle}>current location:</p>
                    <input className={styles.campaignStateLocationInput} placeholder={currentLocation} onBlur={(e) => {
                            if (e.target.value.length > 0) {
                                setCurrentLocation(e.target.value)
                            }
                            else {
                                ;
                            }
                        }}
                    />
                </div>

                <button className={styles.campaignSettingsButton}>
                    <img src="/images/settings-icon.svg" style={{height: "28px"}}/>
                </button>

            </div>
            
            <div className={styles.playersBox}>
                <h1 className={styles.playersTitle}>players:</h1>
                <div className={styles.playersBoxCollectionWrapper}>
                    <CollectionBox noteBookOption={"player"}/>
                </div>
            </div>
        </div>
    );
}