import { LuMouse } from "react-icons/lu";
import { socialLinks } from "../../Constants/data";

const Hero = () => {
  return (
    <section className="min-h-screen flex w-full flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 sm:px-10 px-5">
        {/* TITLE */}
        <h1 className="sm:text-3xl text-2xl font-medium text-white text-center">
          Hey there!, I am John
          {/* <span className="">I&apos;m John</span> */}
        </h1>
        <p className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-black !leading-normal gradient-text">
          Transforming Ideas into Scalable Solutions
        </p>
      </div>

      {/* CTA Ripple */}
      <div className="relative flex items-center space-x-3 ">
        {/* Ripple Effect Container */}
        <div className="relative flex items-center justify-center w-20 h-20 bg-gray-800 rounded-full">
          <span className="ripple"></span>

          <button className="relative z-10 flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full">
            <LuMouse className="cursor-pointer" />
          </button>
        </div>

        <span className="text-gray-300 text-lg">Hire/Contact me!</span>
      </div>

      {/* Social Icons */}
      <div className="top-1/2 right-0 transform -translate-y-1/2 flex flex-col space-y-1 fixed ">
        {socialLinks.map(({ id, url, icon }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0f2027]/90 p-2 transition-colors">
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
