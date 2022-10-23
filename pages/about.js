import Head from "next/head";
import Script from "next/script";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Ondg - About" />
      </Head>

      <Navbar />

      <AboutUs />

      <Footer />
    </div>
  );
}
