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
        <button className={styles.collectionItem} style={backgroundImageStyles} onClick={() => {
            props.showItemPopupHandler(true, props.itemKey);
        }}>
            <div className={styles.itemNameBox} style={itemNameBoxBackgroundStyle}>
                <p className={styles.itemName}>{props.itemData.name || "unknown"}</p>
            </div>
        </button>
    );
}


export default function CollectionBox(props) {

    const collectionItemsResponse = {
        "id1": {
            imagePath: "/images/test-characters/image1.png",
            name: "Madame Eva",
            attributes: {
                alignment: "friendly",
                class: "wizard",
                race: "dragonborn",
                status: "alive",
            },
            notes: "cvuhdfoghfof fzds fsfsdfz dsfzdsfuisdzfu rf8hdfhfdsuf dhufusdfhsdf87hfd7sfh hfdf sdfhds fhsf 8dsfhd8fhsd8fdshf dfh8sd8f hdsf8sdhf sdhfs8f sdf8hd8fhds."
        },
        "id2": {
            imagePath: "/images/test-characters/triboulet.png",
            name: "Triboulet",
            attributes: {
                alignment: "hostile",
                class: "blood hunter",
                race: "thiefling",
                status: "dead"
            },
            notes: "8dsfhd8fhsd8fdshf fzds fsfsdfz dsfzdsfuisdzfu rf8hdfhfdsuf dhufusdfhsdf87hfd7sfh hfdf sdfhds fhsf dsfzdsfuisdzfu dfh8sd8f hdsf8sdhf sdhfs8f sdf8hd8fhds."
        },
        "id3": {
            imagePath: "/images/test-characters/romy.png",
            name: "Romy",
            attributes: {
                alignment: "friendly",
                class: "wizard",
                race: "dragonborn",
                status: "alive"
            },
            notes: "cvuhdfoghfof fzds fsfsdfz dsfzdsfuisdzfu rf8hdfhfdsuf dhufusdfhsdf87hfd7sfh hfdf sdfhds fhsf 8dsfhd8fhsd8fdshf dfh8sd8f hdsf8sdhf sdhfs8f sdf8hd8fhds."
        },
        //"12": 1,"15": 1//,"t1": 1,"z1": 1,"1z": 1,"z1j": 1,"z1d": 1,"z41": 1,"zu1": 1,"z31": 1,"zu1": 1,"zew1": 1,"zzrt1": 1,"zudfg1": 1,"z3dg1": 1,"zua1": 1,"zeafdw1": 1,"zzaft1": 1,
    }

    const collectionItemsResponse1 = {};

    const sortCriteria = ["appearence", "page", "name", "created"];
    const filterOptions = ["class", "race", "alignment - hostile", "alignment - friendly"];

    const [redirectOnAdd, setRedirectOnAdd] = useState(null);
    const [collectionItems, setCollectionItems] = useState(collectionItemsResponse);
    const [showItemPopup, setShowItemPopup] = useState(false);
    const [showItemKey, setShowItemKey] = useState(0);

    useEffect(() => {
        setRedirectOnAdd(`${window.location.pathname}/add-${props.noteBookOption}`);
    }, []);

    const setShowCollectionItemPopup = (bool, key) => {
        var bodyElement = document.getElementsByTagName("body")[0];
        if (bool) {
            var popupOverlay = document.createElement("div");
            popupOverlay.setAttribute("id", "popupOverlay");
            bodyElement.appendChild(popupOverlay);
            setShowItemKey(key);
        }
        else {
            var popupOverlay = document.getElementById("popupOverlay");
            popupOverlay.parentNode.removeChild(popupOverlay);
        }
        setShowItemPopup(bool);
    }

    return (
        <>
            <div className={styles.collectionItemQueryBox}>
                <div className={styles.collectionItemQuerySubBox}>
                    <p className={styles.collectionItemQueryTitle}>sort by:</p>
                    <select className={styles.collectionQueryButton}>
                        <option>
                            none
                        </option>
                        {sortCriteria.map((criterium) => {
                            return (
                                <option>
                                    {criterium}        
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className={styles.collectionItemQuerySubBox}>
                    <p className={styles.collectionItemQueryTitle}>filter:</p>
                    <select className={styles.collectionQueryButton}>
                        <option>
                            none
                        </option>
                        {filterOptions.map((option) => {
                            return (
                                <option>
                                    {option}        
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className={styles.collectionItemQueryLastSubBox}>
                    <input className={styles.searchCollectionItems} placeholder="search by name"/>
                </div>
            </div>

            <div className={styles.collectionBoxParent}>
                {
                    Object.keys(collectionItems).length === 0 ?
                        <h1 className={styles.noCollectionItemsText}>no {props.noteBookOption} entry yet!</h1>
                    : null
                }
                <button className={styles.addCollectionItemButton} onClick={() => {
                    window.location.href = redirectOnAdd;
                }}>
                    <p className={styles.addCollectionItemText}>add {props.noteBookOption}</p>
                </button>
                {
                    Object.keys(collectionItems).map((key) => {
                        return <CollectionItem itemKey={key} itemData={collectionItems[key]} showItemPopupHandler={setShowCollectionItemPopup}/>
                    })
                }
            </div>

            {
                showItemPopup ? 
                    <div className={styles.collectionItemPopup}>
                        <div className={styles.collectionItemPopupHeader}>
                            <button className={styles.closeCollectionItemPopup} onClick={() => {
                                setShowCollectionItemPopup(false);
                            }}>
                                <img className={styles.closeCollectionItemPopupIcon} src="/images/close-icon.svg"/>
                            </button>
                            <p className={styles.collectionItemPopupTitle}>{props.noteBookOption}:</p>
                            <p className={styles.collectionItemPopupName}>{collectionItems[showItemKey].name}</p>
                        </div>

                        <div className={styles.collectionItemAttributesBox}>
                            <p className={styles.collectionItemTitle}>attributes:</p>
                            <table className={styles.collectionItemAttributesTable} cellSpacing="0">
                                {
                                    Object.keys(collectionItems[showItemKey].attributes).map((key, idx) => {
                                        var borderStyle = {};
                                        if (idx === 0) {
                                            borderStyle = { borderTop: "solid 1px var(--main-bright-blue)" };
                                        }
                                        return (
                                            <tr>
                                                <td style={borderStyle} className={styles.collectionItemAttributesKey}>{key.replace(/([A-Z])/g, " $1")}</td>
                                                <td style={borderStyle} className={styles.collectionItemAttributesValue} contenteditable="true">{collectionItems[showItemKey].attributes[key]}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </table>
                        </div>

                        <div className={styles.collectionItemImageBox}>
                            <p className={styles.collectionItemTitle}>appearence:</p>
                        </div>

                        <div className={styles.collectionItemNotesBox}>
                            <p className={styles.collectionItemTitle}>notes:</p>
                        </div>

                    </div>
                : null
            }
        </>
    );
}