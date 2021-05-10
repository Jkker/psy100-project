import Head from 'next/head'
import '../styles/styles.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
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
      </Head>
      <Component {...pageProps} />
    </>
  )
}
