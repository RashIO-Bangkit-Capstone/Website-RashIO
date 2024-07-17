import { AiFillAndroid, AiFillGithub, AiOutlineApi } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className='pb-4 bg-gradient-to-b from-white to-neutral'>
            <div className='max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8'>
                <div className='footer p-10 justify-between'>
                    <div>
                        <img src='/images/RashIO-Logo.png' className='max-h-32 mr-4  p-1 rounded-md' />
                        <p>
                            Initiated for
                            <br />
                            Capstone Project @ Bangkit 2023
                        </p>
                    </div>

                    <div>
                        <span className='uppercase font-bold text-lg text-primary'>Resources</span>
                        <a
                            className='link link-hover flex items-center text-base'
                            href='https://github.com/RashIO-Bangkit-Capstone/android/releases/download/v0.1.0/rashio-release.apk'
                            target='_blank'>
                            <AiFillAndroid className='mr-2' />
                            Application
                        </a>
                        <a
                            className='link link-hover flex items-center text-base'
                            href='https://github.com/RashIO-Bangkit-Capstone'
                            target='_blank'>
                            <AiFillGithub className='mr-2' />
                            Github
                        </a>
                        <a
                            className='link link-hover flex items-center text-base'
                            href='https://api.rashio.software/v1/documentation'
                            target='_blank'>
                            <AiOutlineApi className='mr-2' />
                            API Documentation
                        </a>
                    </div>

                    <div>
                        <span className='uppercase text-lg font-bold'>Support</span>
                        <a className='link link-hover' href='/terms-condition'>
                            Terms and Conditions
                        </a>
                        <a className='link link-hover' href='/user-policy'>
                            Privacy Policy
                        </a>
                    </div>
                </div>
                <div className='flex flex-col-reverse justify-center pt-5 pb-4 border-t lg:flex-row bg-top border-primary'>
                    <a
                        href='/'
                        className='text-md text-primary transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight'>
                        © 2024 RashIO.
                    </a>
                </div>
            </div>
        </footer>
    );
}
