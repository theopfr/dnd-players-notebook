import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/CampaignNavigationBar.module.css";
import CampaignsPopup from "./CampaignsPopupBox";


function DirectoryTextElement(props) {
    const currentRouteList = props.currentRoute.split("/");

    const highlightColor = { color: "var(--main-white)", fontWeight: "bold" };

    var directoryTextElement = [];
    // start from index 2 in order to skip "''" and "campaigns"
    for (let i=2; i<currentRouteList.length; i++) {
        let currentSubRoute = currentRouteList.slice(0, i+1).join("/");

        directoryTextElement.push(
            <>
                <p className={styles.navigationDirectorySeperator}>/</p>

                <button className={styles.directoryTextButton} onClick={() => {
                    window.location.href = currentSubRoute;
                }}>
                    <p className={styles.navigationDirectoryText} style={(i === currentRouteList.length - 1) ? highlightColor : null}>{currentRouteList[i].replace(/%20/g, " ")}</p>
                </button>
            </>
        );
    }

    return directoryTextElement;
}


export default function CampaignNavigationBar() {
    const [currentRoute, setCurrentRoute] = useState("/");
    const [showCampaignsPopup, setShowCampaignsPopup] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setCurrentRoute(window.location.pathname);
        router.events.on("routeChangeComplete", () => {
            setCurrentRoute(window.location.pathname);
        });

        if (window.location.pathname === "/campaigns") {
            setShowCampaignsPopup(true);
            document.getElementsByClassName(styles.campaignsDisplayButton)[0].disabled = true;
        }
    }, [router.events]);

    return (

        <div className={styles.navigationDisplay}>
            {
                !showCampaignsPopup ?
                    <button className={`${styles.campaignsDisplayButton} ${styles.campaignsDisplayButtonClosed}`} onClick={() => {
                        setShowCampaignsPopup(true);
                    }}>
                        campaigns
                    </button>
                : 
                    <button className={`${styles.campaignsDisplayButton} ${styles.campaignsDisplayButtonOpen}`} onClick={(e) => {
                        setShowCampaignsPopup(false);
                    }}>
                        <img className={styles.closeCampaignsPopupIcon} src="/images/arrow-down-icon.svg" onClick={(e) => { e.stopPropagation(); }}/>
                        campaigns
                    </button>
            }
            
            <div className={styles.navigationDisplayDirectory}>
                <DirectoryTextElement currentRoute={currentRoute}/>
            </div>

            { showCampaignsPopup ? 
                <CampaignsPopup unmountCampaignsPopup={() => {
                    setShowCampaignsPopup(false);
                    document.getElementsByClassName(styles.campaignsDisplayButton)[0].disabled = false;
                }}/>        
            : null }

        </div>
    );
}