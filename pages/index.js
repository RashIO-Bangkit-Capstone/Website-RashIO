import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-primary">
      <NextSeo
        title="Home: RashIO"
        description="Welcome to RashIo homepage."
        canonical="https://www.rashio.software/"
        openGraph={{
          url: "https://wwwrashio.software/",
        }}
      />
      <Head>
        <title>RashIO</title>
        <link rel="icon" href="/images/RashIO-Logo.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
