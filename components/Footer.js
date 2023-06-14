import { AiFillAndroid, AiFillGithub, AiOutlineApi } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="pb-4 bg-gradient-to-b from-white to-neutral">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <div className="footer p-10 justify-between">
          <div>
            <img
              src="/images/RashIO-Logo.png"
              className="max-h-32 mr-4  p-1 rounded-md"
            />
            <p>
              RashIO
              <br />
              Capstone Project @ Bangkit 2023
            </p>
          </div>

          <div>
            <span className="uppercase font-bold text-lg text-primary">
              Resources
            </span>
            <a
              className="link link-hover flex items-center text-base"
              href="https://github.com/RashIO-Bangkit-Capstone"
              target="_blank"
            >
              <AiFillAndroid className="mr-2" />
              Application
            </a>
            <a
              className="link link-hover flex items-center text-base"
              href="https://github.com/RashIO-Bangkit-Capstone"
              target="_blank"
            >
              <AiFillGithub className="mr-2" />
              Github
            </a>
            <a
              className="link link-hover flex items-center text-base"
              href="https://www.rashio.software/api/documentation"
              target="_blank"
            >
              <AiOutlineApi className="mr-2" />
              API Documentation
            </a>
          </div>

          <div>
            <span className="uppercase text-lg font-bold">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16 bg-transparent border-primary"
                />
                <button className="btn bg-primary border-primary absolute top-0 right-0 rounded-l-none text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center pt-5 pb-4 border-t lg:flex-row bg-top border-primary">
          <a
            href="/"
            className="text-md text-primary transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
          >
            © 2023 RashIO.
          </a>
        </div>
      </div>
    </footer>
  );
}
