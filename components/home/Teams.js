import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Teams() {
  return (
    <section className="relative" id="teams">
      <div className="grr max-w-7xl pt-15 mx-auto text-center">
        <div className="py-24 md:py-36">
          <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
            Our Teams
          </h1>
          <h1 className="mb-9 text-2xl font-semibold text-gray-600">
            Together building beneficial applications for everyone
          </h1>

          <div className="flex items-center flex-row flex-wrap justify-center mx-auto">
            <div className="flex flex-col items-center justify-center w-1/3 sm:w-1/3 md:w-1/6 lg:w-1/6 p-5">
              <img src="/images/teams/Ridwan.png" className=""></img>
              <span className="text-lg font-bold">Muhammad Ridwan</span>
              <span className="text-base">Mobile Development</span>
              <div className="flex flex-row gap-2">
                <a href="https://www.instagram.com/mhmmdridwannsyah" target="_blank" className="text-2xl">
                  <AiOutlineInstagram />
                </a>
                <a href="https://www.linkedin.com/in/mhmmdrdwnsyh" target="_blank" className="text-2xl">
                  <AiOutlineLinkedin />
                </a>
                <a href="https://github.com/mhmmdrdwnsyhx" target="_blank" className="text-2xl">
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 sm:w-1/3 md:w-1/6 lg:w-1/6 p-5">
              <img src="/images/teams/Ichlas.png" className=""></img>
              <span className="text-lg font-bold">Ichlasul Fikri</span>
              <span className="text-base">Mobile Development</span>
              <div className="flex flex-row gap-2">
                <a href="https://www.instagram.com/ichlasulfikri_" target="_blank" className="text-2xl">
                  <AiOutlineInstagram />
                </a>
                <a href="https://www.linkedin.com/in/ichlasulfikri/" target="_blank" className="text-2xl">
                  <AiOutlineLinkedin />
                </a>
                <a href="https://github.com/Boreneoux" target="_blank" className="text-2xl">
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 sm:w-1/3 md:w-1/6 lg:w-1/6 p-5">
              <img src="/images/teams/Farhan.png" className=""></img>
              <span className="text-lg font-bold">Farhan Ramadhan</span>
              <span className="text-base">Cloud Computing</span>
              <div className="flex flex-row gap-2">
                <a href="https://www.instagram.com/farhan15r" target="_blank" className="text-2xl">
                  <AiOutlineInstagram />
                </a>
                <a href="https://www.linkedin.com/in/farhan15r" target="_blank" className="text-2xl">
                  <AiOutlineLinkedin />
                </a>
                <a href="https://github.com/farhan15r" target="_blank" className="text-2xl">
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 sm:w-1/3 md:w-1/6 lg:w-1/6 p-5">
              <img src="/images/teams/Farhan.png" className=""></img>
              <span className="text-lg font-bold">Joel Pangihutan</span>
              <span className="text-base">Cloud Computing</span>
              <div className="flex flex-row gap-2">
                <a href="" target="_blank" className="text-2xl">
                  <AiOutlineInstagram />
                </a>
                <a href="https://www.linkedin.com/in/" target="_blank" className="text-2xl">
                  <AiOutlineLinkedin />
                </a>
                <a href="" target="_blank" className="text-2xl">
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 sm:w-1/3 md:w-1/6 lg:w-1/6 p-5">
              <img src="/images/teams/Dian.png" className=""></img>
              <span className="text-lg font-bold">Dian Fajar</span>
              <span className="text-base">Machine Learning</span>
              <div className="flex flex-row gap-2">
                <a href="https://www.instagram.com/dianfajars_" target="_blank" className="text-2xl">
                  <AiOutlineInstagram />
                </a>
                <a href="https://www.linkedin.com/in/dianfajars/" target="_blank" className="text-2xl">
                  <AiOutlineLinkedin />
                </a>
                <a href="https://github.com/dianfajars" target="_blank" className="text-2xl">
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 sm:w-1/3 md:w-1/6 lg:w-1/6 p-5">
              <img src="/images/teams/Lysa.png" className=""></img>
              <span className="text-lg font-bold">Lysa Apriani</span>
              <span className="text-base">Machine Learning</span>
              <div className="flex flex-row gap-2">
                <a href="https://www.instagram.com/lysaaprianii" target="_blank" className="text-2xl">
                  <AiOutlineInstagram />
                </a>
                <a href="https://www.linkedin.com/in/lysa-apriani-7a151a214/" target="_blank" className="text-2xl">
                  <AiOutlineLinkedin />
                </a>
                <a href="https://www.github.com/Lysaapriani" target="_blank" className="text-2xl">
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
