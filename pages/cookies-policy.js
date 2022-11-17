import Head from "next/head";
import Script from "next/script";
import CookiesPolicy from "../components/CookiesPolicy";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function CookiesPolicyPage() {
    return (
        <div>
        <Head>
            <title>Cookies Policy</title>
            <meta name="description" content="Ondg - Cookies Policy" />
        </Head>
    
        <Navbar />
    
        <CookiesPolicy />
    
        <Footer />
        </div>
    );
}