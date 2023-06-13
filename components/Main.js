import Features from "./home/Features";
import Powered from "./home/Powered";
import Teams from "./home/Teams";

export default function Main() {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-t from-white via-white to-neutral">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            We are aware about your skin
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            RashIO is a skin disease detection app that uses machine learning to
            detect skin diseases. It is a mobile app that can be used by anyone
            and anywhere.
          </p>
          {/* <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-secondary border rounded-lg bg-gray-900"
              href="https://github.com/r1/nine4-2/"
            >
              <span className="justify-center">Find out more</span>
            </a>
          </div> */}
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="iPhone-12"
            src="/images/mockup-1.png"
          ></img>
        </div>
      </div>

      <Features />
      <Powered />
      <Teams />

    </section>
  );
}
