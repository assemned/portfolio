import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero">
      <div className="w-full relative h-screen max-sm:hidden">
        <div className="h-full w-2/3 bg-black top-0 left-[50%] absolute -skew-x-6"></div>
        <img
          src="me.png"
          alt="me"
          className=" absolute bottom-10 left-[60%] h-[70%] scale-x-[-1] fade-animation"
        />
        <div className="flex justify-center items-start flex-col h-full max-cp">
          <h6 className="h3 font-bold mb-10">Hi, I am</h6>
          <h1 className="h1">Assem Ned</h1>
          <p className="p1 font-bold text-primary-gray3">
            Full Stack Developer / UI Designer
          </p>
          <div className="flexCenter gap-3 mt-20">
            <a href="https://www.instagram.com/assemned/" target="_blank">
              <FaInstagramSquare className="text-5xl max-xl:text-4xl p-[7px] max-xl:p-[5px] bg-primary-gray2 rounded shadow-xl duration-300 hover:p-1" />
            </a>
            <a href="https://github.com/assemned" target="_blank">
              <FaGithubSquare className="text-5xl max-xl:text-4xl p-[7px] max-xl:p-[5px] bg-primary-gray2 rounded shadow-xl duration-300 hover:p-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/assem-ned-b77494297/"
              target="_blank">
              <FaLinkedin className="text-5xl max-xl:text-4xl p-[7px] max-xl:p-[5px] bg-primary-gray2 rounded shadow-xl duration-300 hover:p-1" />
            </a>
          </div>
        </div>
      </div>

      <div className=" sm:hidden w-full h-screen relative bg-black flexCenter overflow-hidden">
        <img
          src="me.png"
          alt="me"
          className="h-[80%] scale-x-[-1] -right-20 bottom-10 fade-animation-phone absolute "
        />
        <div className="flexStartCol z-10 w-full p-x">
          <h6 className="h3 font-bold mb-10 text-white">Hi, I am</h6>
          <h1 className="h1 text-white">Assem Ned</h1>
          <p className="p1 font-bold text-primary-gray3">
            Full Stack Developer / UI Designer
          </p>
          <div className="flexCenter gap-3 mt-20">
            <a href="https://www.instagram.com/assemned/" target="_blank">
              <FaInstagramSquare className="text-5xl text-white max-xl:p-[5px] duration-300" />
            </a>
            <a href="https://github.com/assemned" target="_blank">
              <FaGithubSquare className="text-5xl text-white max-xl:p-[5px] duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/assem-ned-b77494297/"
              target="_blank">
              <FaLinkedin className="text-5xl text-white max-xl:p-[5px] duration-300" />
            </a>
          </div>
        </div>
      </div>

      <div className=" sm:bg-subHero bg-subHeroPhone w-full max-sm:bg-contain max-sm:bg-center max-sm:bg-primary-gray4 pt-10 pb-12 bg-no-repeat bg-cover bg-right text-white p4">
        <div className=" m-auto max-w-[1350px] px-8 flexStartCol gap-3 w-full max-lg:pr-40 max-md:pr-8 pr-96">
          <h6 className="h4 font-semibold tracking-wider">
            Crafting digital experiences that resonate.
          </h6>
          <p className=" font-light text-justify ">
            In the ever-evolving digital landscape, I merge creativity with
            functionality to build immersive online experiences. Let's embark on
            a journey where your vision meets innovation, and every click tells
            a story.
          </p>
          <a href="/" className="p3 side-border">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
