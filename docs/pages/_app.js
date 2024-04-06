import '../public/global.css'
import Script from "next/script";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <>
        <Script strategy="lazyOnload" src="https://eu.umami.is/script.js" data-website-id="78e59035-cbd2-4fa4-891e-3e28259fb02a" />
        <Component {...pageProps} />
    </>
}