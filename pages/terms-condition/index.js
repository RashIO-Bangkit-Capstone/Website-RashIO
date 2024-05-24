import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TermsConditions from '../../components/terms-condition/TermsCondition';

export default function TermsAndCondition() {
    return (
        <div className='text-primary'>
            <Head>
                <title>RashIO</title>
                <link rel='icon' href='/images/RashIO-Logo.png' />
            </Head>
            <Header />
            <section className='body-font bg-gradient-to-t from-white via-white to-neutral'>
                <div className='max-w-7xl mx-auto flex px-32 py-24 flex-col items-center'>
                    <h1 className='text-primary text-2xl font-bold mb-6'>Terms and Conditions</h1>
                    <div id='terms-and-conditions-desc'>
                        <TermsConditions />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
