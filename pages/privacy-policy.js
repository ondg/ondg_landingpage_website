import Head from "next/head";
import Script from "next/script";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function PrivacyPolicyPage() {
    return (
        <div>
        <Head>
            <title>Privacy Policy</title>
            <meta name="description" content="Ondg - Privacy Policy" />
        </Head>
    
        <Navbar />
    
        <PrivacyPolicy />
    
        <Footer />
        </div>
    );
}