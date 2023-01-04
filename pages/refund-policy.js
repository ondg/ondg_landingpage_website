import Head from "next/head";
import Script from "next/script";
import RefundPolicy from "../components/RefundPolicy";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function RefundPolicyPage() {
    return (
        <div>
        <Head>
            <title>Refund Policy</title>
            <meta name="description" content="Ondg - Refund Policy" />
        </Head>
    
        <Navbar />
    
        <RefundPolicy />
    
        <Footer />
        </div>
    );
}