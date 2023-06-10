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
            detect skin diseases. It is a web app that can be used by anyone and anywhere.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-secondary border rounded-lg bg-gray-900"
              href="https://github.com/r1/nine4-2/"
            >
              <span className="justify-center">Find out more</span>
            </a>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="iPhone-12"
            src="/images/mockup-1.png"
          ></img>
        </div>
      </div>
      
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
          Less code, less effort.
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
          Minify your CSS with Tailwind's built in PostCSS support.
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <img
            className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src="./images/placeholder.png"
          ></img>
        </div>
      </div>

      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-4xl Avenir font-semibold text-primary">
              Powered by
            </h1>
          </div>
          <div className="flex items-center flex-row flex-wrap justify-center">
            <div className="flex items-center justify-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img
                src="/images/Gundar-Logo.png"
                alt="Universitas Gunadarma Logo"
                className="block object-contain w-7/12 greyC"
              ></img>
            </div>
            
            <div className="flex items-center justify-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img
                src="/images/Mercu-Buana-Logo.png"
                alt="Universitas Mercu Buana Logo"
                className="block object-contain w-4/6 greyC"
              ></img>
            </div>
            
            <div className="flex items-center justify-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img
                src="/images/Esa-Unggul-Logo.png"
                alt="Universitas Esa Unggul Logo"
                className="block object-contain w-7/12 greyC"
              ></img>
            </div>

            <div className="flex items-center justify-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img
                src="/images/Bangkit-Logo.png"
                alt="Bangkit Academy Logo"
                className="block object-contain w-10/12 greyC"
              ></img>
            </div>

            <div className="flex items-center justify-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img
                src="/images/Kampus-Merdeka-Logo.png"
                alt="Kampus Merdeka Logo"
                className="block object-contain w-4/6 greyC"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-600">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
