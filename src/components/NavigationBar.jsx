import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/NavigationBar.module.css";


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


function CampaignsPopup(props) {
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
    );
}


export default function NavigationBar() {

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
            console.log("why")
        }
    }, [router.events]);

    return (
        <>
            <div className={styles.navigationBarParent}>
                <button className={styles.homeButton} onClick={() => {
                    window.location.href = "/";
                }}>
                    <div className={styles.logo}></div>
                    <h1 className={styles.title}>players notebook</h1>
                </button>
            </div>

            <div className={styles.navigationDisplay}>
                {
                    !showCampaignsPopup ?
                        <button className={`${styles.campaignsDisplayButton} ${styles.campaignsDisplayButtonClosed}`} onClick={() => {
                            setShowCampaignsPopup(true);
                        }}>
                            campaigns
                        </button>
                    : 
                        <button className={`${styles.campaignsDisplayButton} ${styles.campaignsDisplayButtonOpen}`} id="campaignsDisplayButtonOpen" onClick={() => {
                            setShowCampaignsPopup(false);
                        }}>
                            <img className={styles.closeCampaignsPopupIcon} src="/images/arrow-down-icon.svg"/>
                            campaigns
                        </button>
                }
                

                <div className={styles.navigationDisplayDirectory}>
                    <DirectoryTextElement currentRoute={currentRoute}/>
                </div>
            </div>

            { showCampaignsPopup ? <CampaignsPopup unmountCampaignsPopup={() => { setShowCampaignsPopup(false) }}/> : null }
        </>
    );
}

/*
<p className={styles.navigationDirectorySeperator}>/</p>
                    {campaigns.length === 0 ?
                        <p className={styles.navigationDirectoryText} style={highlightColor}>create new campaign</p>
                    :
                        <>
                            <DirectoryTextButton text={selectedCampaignName} highlight={false}/>
                            <p className={styles.navigationDirectorySeperator}>/</p>
                            <DirectoryTextButton text={notebookOptions[selectedNotebookOptionIdx]} highlight={!creationMode}/>
                        </>
                    }
                    {creationMode ?
                        <>
                            <p className={styles.navigationDirectorySeperator}>/</p>
                            <DirectoryTextButton text={`create new ${notebookOptions[selectedNotebookOptionIdx].slice(0, -1)}`} highlight={true}/>
                        </>
                        : null
                    }
                    */