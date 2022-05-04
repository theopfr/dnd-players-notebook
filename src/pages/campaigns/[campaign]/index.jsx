
import styles from "../../../../styles/SelectedCampaign.module.css";


export default function SelectedCampaign() {
    return (
        <div className={styles.selectedCampaignParent}>
            <div className={styles.campaignStateBox}>
                
            </div>
            <button className={styles.campaignSettingsButton}>
                <img src="/images/settings-icon.svg" style={{height: "30px"}}/>
            </button>
            <div className={styles.playerBox}>

            </div>
        </div>
    );
}