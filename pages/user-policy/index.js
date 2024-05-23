import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PrivacyPolicy from '../../components/user-policy/PrivacyPolicy';

export default function UserPolicy() {
    return (
        <div className='text-primary'>
            <Head>
                <title>RashIO</title>
                <link rel='icon' href='/images/RashIO-Logo.png' />
            </Head>
            <Header />
            <section className='body-font bg-gradient-to-t from-white via-white to-neutral'>
                <div className='max-w-7xl mx-auto flex px-32 py-24 flex-col items-center'>
                    <h1 className='text-primary text-2xl font-bold mb-6'>Privacy Policy</h1>
                    <div id='privacy-policy-desc'>
                        <PrivacyPolicy />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
