import Head from "next/head";
import Script from "next/script";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function FrequentlyAskedQuestionsPage() {
    return (
        <div>
        <Head>
            <title>Frequently Asked Questions - FAQs</title>
            <meta name="description" content="Ondg - requently Asked Questions (FAQs)" />
        </Head>
    
        <Navbar />
    
        <FrequentlyAskedQuestions />
    
        <Footer />
        </div>
    );
}