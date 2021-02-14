import "../css/global.scss";
import Head from "next/head";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>React Open Brewery in USA</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
