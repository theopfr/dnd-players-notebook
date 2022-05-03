import styles from "../../styles/NavigationBar.module.css";


export default function NavigationBar() {
    return (
        <div className={styles.navigationBarParent}>
            <button className={styles.homeButton} onClick={() => {
                window.location.href = "/";
            }}>
                <div className={styles.logo}></div>
                <h1 className={styles.title}>players notebook</h1>
            </button>
        </div>
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