import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <div className="text-primary">
      <NextSeo
        title="404: RashIO"
        description="404 page for all our missing pages"
        canonical="https://www.rashio.software/404"
        openGraph={{
          url: "https://www.rashio.software/404",
        }}
      />
      <Head>
        <title>RashIO</title>
        <link rel="icon" href="/images/RashIO-Logo.png" />
      </Head>
      <Header />
      <div className="bg-gradient-to-t from-white via-white to-neutral h-screen flex items-center">
        <div className="flex flex-col justify-center mx-auto text-center max-w-2x1">
          <h1 className="text-3xl font-bold tracking-tight text-primary md:text-5xl">
            404 – Unavailable
          </h1>
          <br />
          <a
            className="w-64 p-1 mx-auto font-bold text-center bg-secondary text-white border border-gray-500 rounded-lg sm:p-4"
            href="/"
          >
            Return Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
