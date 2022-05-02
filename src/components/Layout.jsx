import NavigationBar from "./NavigationBar";
import NoteBookOptionBox from "./NoteBookOptionBox";
import FooterBox from "./FooterBox";


export default function Layout({ children }) {
    return (
        <>
            <NavigationBar/>
            <NoteBookOptionBox/>
            {children}
            <FooterBox/>
        </>
    )
}