import styles from "../../../styles/Campaigns.module.css";


export default function Campaigns() {
    return (
        <div className={styles.campaignsParent}>
            <div className={styles.campaignSelectionInstructionBox}>

                <p className={styles.selectCampaignInstruction}>
                    select a campaign from the left<br/>or<br/><br/>create a new one:
                </p>

                <div className={styles.createCampaignBox}>
                    <input className={styles.createCampaignInput} placeholder="enter the campaign name here..."></input>
                    <button className={styles.submitNewCampaignButton}>add</button>
                </div>
            </div>

        </div>
    )
}