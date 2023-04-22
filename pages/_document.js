import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

function Document() {
  return (
    <Html>
      <Head>
      <link rel="icon" href="/favicon.ico" />
       {/* BOOTSTRAP */}
       <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <meta name="description" content="Ondg - ethnic delivery app delivering joy, saving you money and time."></meta>
        <meta name="keywords" content="Ethnic Food , Ethnic Delivery App, Ethnic Food Delivery Website, Ethnic Takeaway, On-Demand Delivery App, On-Demand Food Delivery App, Ethnic Food Delivery App, UK Ethnic Food App, UK number 1 Ethnic Food App, UK's number 1 Ethnic Food App, UK's number 1 Ethnic Food Delivery App, Ethnic Marketplace, Ethnic Food Market"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* BOOTSTRAP */}
        <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossOrigin="anonymous"
        ></Script>

        <Script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
            integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
            crossOrigin="anonymous"
        ></Script>

        <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
            integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
            crossOrigin="anonymous"
        ></Script>
      </body>
    </Html>
  )
}

export default Document