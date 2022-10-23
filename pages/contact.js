import Head from "next/head";
import Script from "next/script";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Ondg - Contact" />
      </Head>

      <Navbar />

      <ContactUs />

      <Footer />
    </div>
  );
}
