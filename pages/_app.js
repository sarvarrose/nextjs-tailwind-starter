import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="O4qtv_pMxTclZeLUKIlUhe6iQJ5gaSTknWk8PQZr1Eg"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Example Website" />
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
