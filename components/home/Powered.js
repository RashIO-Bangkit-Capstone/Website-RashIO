export default function Powered() {
  return (
    <section className="mx-auto">
    <div className="container px-5 mx-auto lg:px-24 ">
      <div className="flex flex-col w-full mb-4 text-left lg:text-center">
        <h1 className="mb-8 text-4xl Avenir font-semibold text-primary">
          Powered by
        </h1>
      </div>
      <div className="flex items-center flex-row flex-wrap justify-center">
        <div className="flex items-center justify-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
          <img
            src="/images/gundar.png"
            alt="Universitas Gunadarma Logo"
            className="block object-contain w-7/12 greyC"
          ></img>
        </div>

        <div className="flex items-center justify-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
          <img
            src="/images/mercu.png"
            alt="Universitas Mercu Buana Logo"
            className="block object-contain w-4/6 greyC"
          ></img>
        </div>

        <div className="flex items-center justify-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
          <img
            src="/images/esaunggul.png"
            alt="Universitas Esa Unggul Logo"
            className="block object-contain w-7/12 greyC"
          ></img>
        </div>

        <div className="flex items-center justify-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
          <img
            src="/images/bangkit.png"
            alt="Bangkit Academy Logo"
            className="block object-contain w-10/12 greyC"
          ></img>
        </div>

        <div className="flex items-center justify-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
          <img
            src="/images/km.png"
            alt="Kampus Merdeka Logo"
            className="block object-contain w-4/6 greyC"
          ></img>
        </div>
      </div>
    </div>
  </section>
  )
}