import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/NotebookOptionBox.module.css";
import Link from "next/link";

export default function NoteBookOptionBox() {

    const notebookOptions = ["npcs", "organizations", "locations", "creatures", "items"];

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    /*useEffect(() => {
        let currentRouteList = window.location.pathname.split("/");
        setSelectedCampaign(currentRouteList[2]);
    }, []);*/


    const router = useRouter();

    useEffect(() => {
        router.events.on("routeChangeComplete", () => {
            let currentRouteList = window.location.pathname.split("/");
            setSelectedCampaign(currentRouteList[2]);
        });
    }, [router.events]);


    return (
        <div className={styles.notebookOptionBoxParent}>
            {notebookOptions.map((option, idx) => {

                var selectedStyle  = {
                    border: "solid 2px var(--main-purple)",
                    backgroundColor: "transparent"
                };
                
                return (
                    <Link href={`/campaigns/${selectedCampaign}/${option}`}>
                        <button className={styles.notebookOptionButton} key={`notebookOptionButton${idx}`} style={selectedOption === idx ? selectedStyle : null} onClick={() => {
                            setSelectedOption(idx);
                        }}>
                            <img className={styles.notebookOptionIcon} src={`/images/arrow-down-icon.svg`}/>
                            <p className={styles.notebookOptionTitle}>{option}</p>
                        </button>
                    </Link>
                );
            })}
        </div>
    )
}