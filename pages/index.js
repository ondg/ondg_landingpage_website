import Head from "next/head";
import Script from "next/script";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Ondg - Home" />
      </Head>

      <Navbar />

      <Header />

      <Footer />
    </div>
  );
}
