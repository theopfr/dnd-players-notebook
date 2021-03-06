import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/CampaignNavigationBar.module.css";



export default function CampaignsPopup(props) {
    const dummyCampaigns = ["Curse Of Strahd", "Rise Of Tiamat", "Wild Beyond The Withlight", "Tomb Of Horros"];

    const [campaigns, setCampaigns] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        let currentRouteList = window.location.pathname.split("/");
        if (currentRouteList.length >= 3) {
            setSelectedOption(dummyCampaigns.indexOf(currentRouteList[2].replace(/%20/g, " ")));
        }
        else {
            setSelectedOption(null)
        }
        setCampaigns(dummyCampaigns);
    }, []);

    const unmount = () => {
        props.unmountCampaignsPopup();
    }

    return (
        <div className={styles.campaignsPopupParent}>

            <div className={styles.campaignsPopupList}>

                <button className={styles.createCampaignButton} disabled={window.location.pathname === "/campaigns"} key={"createCampaignPopupButton"} onClick={() => {
                    window.location.href = "/campaigns"
                }}>
                    <p className={styles.addCampaignText} style={{fontSize: "19px", left: "36px"}}>+</p>
                    <p className={styles.addCampaignText} style={{fontSize: "13px", right: "36px"}}>add</p>
                </button>

                <div className={styles.addCampaignSeperator}/>

                {campaigns.map((campaign, idx) => {

                    var selectedStyle  = {
                        border: "solid 2px var(--main-purple)",
                        backgroundColor: "transparent"
                    };

                    return (
                        <Link href={`/campaigns/${campaign}`}>
                            <button className={styles.campaignPopupButton} key={`campaignPopupButton${idx}`} style={selectedOption === idx ? selectedStyle : null} onClick={() => {
                                setSelectedOption(idx);
                                unmount();
                            }}>
                                <p className={styles.campaignPopupButtonTitle}>{campaign}</p>
                            </button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}