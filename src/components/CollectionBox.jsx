import { useState, useEffect } from "react";
import styles from "../../styles/CollectionBox.module.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


function CollectionItem(props) {
    var collectionImageProvided = props.itemData.imagePath !== undefined;

    var backgroundImageStyles = {};
    var itemNameBoxBackgroundStyle = {};
    if (collectionImageProvided) {
        backgroundImageStyles = {
            backgroundImage: `url(${props.itemData.imagePath})`,
            backgroundSize: "cover",
        };
    }


    return (
        <button className={styles.collectionItem} style={backgroundImageStyles}>
            <div className={styles.itemNameBox} style={itemNameBoxBackgroundStyle}>
                <p className={styles.itemName}>{props.itemData.name || "unknown"}</p>
            </div>
        </button>
    );
}


export default function CollectionBox(props) {

    const stats = {
        "1": 1,
        "id1": {
            imagePath: "/images/test-characters/image1.png",
            alignment: "friendly",
            name: "Madame Eva",
            class: "wizard",
            race: "dragonborn",
            status: "alive",
            notes: "cvuhdfoghfof fzds fsfsdfz dsfzdsfuisdzfu rf8hdfhfdsuf dhufusdfhsdf87hfd7sfh hfdf sdfhds fhsf 8dsfhd8fhsd8fdshf dfh8sd8f hdsf8sdhf sdhfs8f sdf8hd8fhds."
        },
        "12": 1,"15": 1,"t1": 1,"z1": 1,"1z": 1,"z1j": 1,"z1d": 1,"z41": 1,"zu1": 1,"z31": 1,"zu1": 1,"zew1": 1,"zzrt1": 1,"zudfg1": 1,"z3dg1": 1,"zua1": 1,"zeafdw1": 1,"zzaft1": 1,
    }

    const [redirectOnAdd, setRedirectOnAdd] = useState(null);

    useEffect(() =>  {
        setRedirectOnAdd(`${window.location.pathname}/add-${props.noteBookOption}`);
    }, []);

    return (
        <>
            <div className={styles.collectionItemQueryBox}>
                <div className={styles.collectionItemQuerySubBox}>
                    <p className={styles.collectionItemQueryTitle}>sort by:</p>
                    <select className={styles.collectionQueryButton}>
                        <option>
                            none
                        </option>
                        <option>
                            appearence
                        </option>
                        <option>
                            page
                        </option>
                        <option>
                            name
                        </option>
                        <option>
                            created
                        </option>
                    </select>
                </div>

                <div className={styles.collectionItemQuerySubBox}>
                    <p className={styles.collectionItemQueryTitle}>filter:</p>
                    <select className={styles.collectionQueryButton}>
                        <option>
                            none
                        </option>
                        <option>
                            class
                        </option>
                        <option>
                            race
                        </option>
                        <option>
                            alignment - hostile
                        </option>
                        <option>
                            alignment - friendly
                        </option>
                        <option>
                            alignment - friendly
                        </option>
                    </select>
                </div>

                <div className={styles.collectionItemQueryLastSubBox}>
                    <input className={styles.searchCollectionItems} placeholder="search by name"/>
                </div>
            </div>
            <div className={styles.collectionBoxParent}>
                {Object.keys(stats).map((key, idx) => {
                    if (idx === 0) {
                        return (
                            <button className={styles.addCollectionItemButton} onClick={() => {
                                window.location.href = redirectOnAdd;
                            }}>
                                <p className={styles.addCollectionItemText}>add {props.noteBookOption}</p>
                            </button>
                        );
                    }
                    return <CollectionItem itemData={stats[key]}/>
                    
                })}
            </div>
        </>
    );
}