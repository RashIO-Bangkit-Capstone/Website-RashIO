import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Questionnaire from "../../components/skin-type/Questionnaire";
import Form from "../../components/skin-type/Form";

export default function questionnaire() {
  return (
    <div className="text-primary bg-white">
      <Head>
        <title>RashIO</title>
        <link rel="icon" href="/images/RashIO-Logo.png" />
      </Head>
      <Header />
      <section className="body-font">
        <div className="max-w-7xl mx-auto flex px-12 md:px-32 py-24 flex-col items-center">
          <h1 className="text-primary text-2xl font-bold mb-6">
            Baumann Skin Type Questionnaire
          </h1>
          <Form />
          <div id="skin-type">
            <Questionnaire />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
