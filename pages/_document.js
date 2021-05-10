import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#ffffff' />
          <script
            dangerouslySetInnerHTML={{
              __html: `var _hmt = _hmt || [];
					(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?64f5d58408d0054999987955b5f13fb4";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`
            }}
          />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700;800&display=swap'
            rel='stylesheet'
          />
          <noscript>
            <link
              rel='stylesheet'
              href='https://fonts.googleapis.com/css2?family=Lexend&display=swap'
            />
          </noscript>
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
