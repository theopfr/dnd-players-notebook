
import { useState } from "react";
import styles from "../../../../styles/SelectedCampaign.module.css";


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
                            type="number" min="0" ondrop="return false;" onpaste="return false;"/>
                </div>

                <div className={styles.campaignStateSubBox}>
                    <p className={styles.campaignStateTitle}>day number:</p>
                    <input className={styles.campaignStateInput} placeholder={dayNumber} 
                            type="number" min="0" ondrop="return false;" onpaste="return false;"/>
                </div>

                <div className={styles.campaignStateSubBox}>
                    <p className={styles.campaignStateTitle}>current location:</p>
                    <input className={styles.campaignStateLocationInput} placeholder={currentLocation}/>
                </div>

            </div>

            <button className={styles.campaignSettingsButton}>
                <img src="/images/settings-icon.svg" style={{height: "30px"}}/>
            </button>
            <div className={styles.playerBox}>

            </div>
        </div>
    );
}