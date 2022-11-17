import Head from "next/head";
import Script from "next/script";
import TermsConditionsPolicy from "../components/TermsConditionsPolicy";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function TermsConditionsPage() {
    return (
        <div>
        <Head>
            <title>Terms Conditions Policy</title>
            <meta name="description" content="Ondg - Terms Conditions Policy" />
        </Head>
    
        <Navbar />
    
        <TermsConditionsPolicy />
    
        <Footer />
        </div>
    );
}