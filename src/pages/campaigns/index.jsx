import styles from "../../../styles/Campaigns.module.css";


export default function Campaigns() {
    return (
        <div className={styles.campaignsParent}>
            <div className={styles.campaignSelectionInstructionBox}>

                <p className={styles.selectCampaignInstruction}>
                    select a campaign from the left<br/>or<br/><br/>create a new one:
                </p>

                <div className={styles.createCampaignBox}>
                    <button className={styles.submitNewCampaignButton}>add</button>
                    <input className={styles.createCampaignInput} placeholder="enter the name campaign name here..."></input>
                </div>
            </div>

        </div>
    )
}