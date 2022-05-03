import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import NavigationBar from "./NavigationBar";
import NoteBookOptionBox from "./NoteBookOptionBox";
import FooterBox from "./FooterBox";
import CampaignNavigationBar from "./CampaignNavigationBar";


export default function Layout({ children }) {
    const [showCampaignNavigationBar, setShowCampaignNavigationBar] = useState(false);
    const [showNoteBookOptions, setShowNoteBookOptions] = useState(false);

    const router = useRouter();

    useEffect(() => {
        router.events.on("routeChangeComplete", () => {
            const currentRoute = window.location.pathname;

            let isCampaignRoute = currentRoute.startsWith("/campaigns")
            if (isCampaignRoute) {
                setShowCampaignNavigationBar(true);
            }
            if (isCampaignRoute && currentRoute.split("/").length >= 3) {
                setShowNoteBookOptions(true);
            }
        });
    }, [router.events]);

    useEffect(() => {
        const currentRoute = window.location.pathname;

        let isCampaignRoute = currentRoute.startsWith("/campaigns")
        if (isCampaignRoute) {
            setShowCampaignNavigationBar(true);
        }
    }, []);

    return (
        <>
            <NavigationBar/>
            {
                showCampaignNavigationBar ?
                    <CampaignNavigationBar/>
                : null
            }
            {
                showNoteBookOptions ?
                    <NoteBookOptionBox/>
                : null
            }
            {children}
            {/*<FooterBox/>*/}
        </>
    )
}