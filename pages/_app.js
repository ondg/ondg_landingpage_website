import { Fragment } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-HJVJK382P9`}
      />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HJVJK382P9', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
