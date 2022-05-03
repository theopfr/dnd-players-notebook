import styles from "../../../styles/Campaigns.module.css";


export default function Campaigns() {
    return (
        <div className={styles.campaignsParent}>
            <div className={styles.campaignSelectionInstructionBox}>
                <p className={styles.selectCampaignInstruction}>no campaign selected.<br/>select one from the left or create a new one.</p>
            </div>

        </div>
    )
}