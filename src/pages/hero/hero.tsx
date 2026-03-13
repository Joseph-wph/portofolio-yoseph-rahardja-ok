import { FaMicrophone } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 overflow-hidden">

      {/* Intro */}
      <div className="font-heading text-white flex flex-col gap-3 max-w-md">
        <div className="border border-white w-12 h-12 rounded-full flex justify-center items-center">
          <FaMicrophone className="text-2xl text-white" />
        </div>

        <h1 className="font-bold text-base">
          Hi, I'm Edwin Anderson
        </h1>

        <p className="font-medium text-sm leading-relaxed">
          a frontend developer passionate about creating seamless digital
          experiences that are fast, responsive, and user-friendly.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-6 max-w-md">

        <div className="flex items-center gap-6 h-20">
          <div className="flex-1 flex flex-col text-white pr-3">
            <h1 className="font-bold text-2xl">2+</h1>
            <p className="font-semibold text-xs">Years Experience</p>
          </div>

          <Separator
            orientation="vertical"
            className="h-14 w-px bg-primary-300"
          />

          <div className="flex-1 flex flex-col text-white pl-3">
            <h1 className="font-bold text-2xl">99%</h1>
            <p className="font-semibold text-xs">Client Satisfaction</p>
          </div>
        </div>

        <div className="flex items-center gap-6 h-20">
          <div className="flex-1 flex flex-col text-white pr-3">
            <h1 className="font-bold text-2xl">3</h1>
            <p className="font-semibold text-xs">Project Delivered</p>
          </div>

          <Separator
            orientation="vertical"
            className="h-14 w-px bg-primary-300"
          />

          <div className="flex-1 flex flex-col text-white pl-3">
            <h1 className="font-bold text-2xl">50</h1>
            <p className="font-semibold text-xs">Clients Worldwide</p>
          </div>
        </div>

        {/* Contact button */}
        <div className="bg-secondary w-full max-w-[360px] h-12 rounded-full flex justify-between items-center px-4 cursor-pointer">
          <h1 className="font-heading text-sm font-semibold">
            Contact Me
          </h1>
          <IoArrowForwardCircleSharp className="w-8 h-8" />
        </div>
      </div>

      {/* Hero Visual */}
      <div className="relative flex flex-col justify-center items-center">

        {/* Available badge */}
        <div className="w-40 h-9 flex items-center justify-center bg-primary-400 border border-primary-300 rounded-full gap-2 mb-12">
          <FaCircle className="w-2 h-2 text-primary-200" />
          <h1 className="font-semibold text-xs text-white">
            Available for Hire
          </h1>
        </div>

        {/* Image area */}
        <div className="relative w-full min-h-[420px] lg:min-h-[650px] flex justify-center text-center">

          {/* Junior text */}
          <h2 className="absolute top-0 sm:top-2 lg:-top-52 left-6 sm:left-12 text-[48px] sm:text-[64px] lg:text-[120px] text-white font-script1 italic z-30 -rotate-12">
            Junior
          </h2>

          {/* Gold title */}
          <div className="absolute bottom-28 sm:bottom-32 lg:bottom-80 flex flex-col items-center z-0">

            <h1 className="text-[56px] sm:text-[72px] lg:text-[200px] font-script2 text-[#E3B04B] leading-none">
              FRONTEND
            </h1>

            <h1 className="text-[52px] sm:text-[72px] lg:text-[200px] font-script2 text-[#E3B04B] leading-none">
              DEVELOPER
            </h1>

          </div>

          {/* Image */}
          <img
            src="/assets/image/person.svg"
            alt="profile"
            className="absolute inset-x-0 bottom-0 mx-auto z-10 h-[300px] sm:h-[360px] lg:h-[520px] object-contain"
          />

          {/* Outline text */}
          <h1 className="absolute bottom-28 sm:bottom-32 lg:bottom-80 text-[52px] sm:text-[72px] lg:text-[200px] font-script2 outline-text leading-none z-20 text-center">
            <br /> DEVELOPER
          </h1>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 text-white flex items-center gap-2 text-sm opacity-80">
          <span>Scroll Down</span>
          <div className="w-4 h-6 border border-white rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;
