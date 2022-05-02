import "../../styles/globals.css"
import FooterBox from "../components/FooterBox";
import NavigationBar from "../components/NavigationBar";
import NoteBookOptionBox from "../components/NoteBookOptionBox";
import Layout from "../components/Layout";


function App({ Component, pageProps }) {

    return (
        <div className="appParent">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}

export default App
