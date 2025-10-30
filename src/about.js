import React, { useEffect, useRef, useState } from "react";
import img from "./img1.jpg";
import { useTheme } from "./ThemeContext.js";
import "animate.css";

function About() {
  const { mod } = useTheme();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex flex-col justify-between items-center 
      pt-24 sm:pt-28 md:pt-32 min-h-auto px-4 sm:px-10 md:px-20 
      ${
        mod === "dark"
          ? "bg-slate-900 text-white"
          : "bg-[#f8fafc] text-[#0f172a]"
      } 
      transition-colors duration-500`}
    >
      {/* ===== About Heading ===== */}
      <div className="text-center">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold ${
            mod === "dark" ? "text-white" : "text-[#1e293b]"
          } ${isVisible ? "animate__animated animate__backInUp" : "opacity-0"}`}
        >
          About{" "}
          <span
            className={`${
              mod === "dark" ? "text-yellow-600" : "text-yellow-500"
            }`}
          >
            Me
          </span>
        </h1>
      </div>

      {/* ===== Short Intro ===== */}
      <div
        className={`max-w-3xl flex mt-6 sm:mt-8 ${
          isVisible ? "animate__animated animate__backInUp" : "opacity-0"
        } mb-8 px-2`}
      >
        <p
          className={`text-lg sm:text-xl text-center ${
            mod === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I'm a passionate web designer and developer with expertise in creating
          beautiful, functional websites that deliver exceptional user
          experiences.
        </p>
      </div>

      {/* ===== Image + Text Section ===== */}
      <div
        className={`flex flex-col md:flex-row justify-between items-center w-full 
        gap-10 sm:gap-16 md:gap-20 py-10 md:py-16 transition-colors duration-500 ${
          mod === "dark" ? "text-white" : "text-[#0f172a]"
        }`}
      >
        {/* ===== Image Box ===== */}
        <div
          className={`relative w-[300px] sm:w-[380px] md:w-[460px] lg:w-[500px] 
          h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl p-3 
          shadow-[0_0_40px_rgba(30,144,255,0.4)] ${
            mod === "dark"
              ? "bg-gradient-to-tr from-blue-700 to-blue-400"
              : "bg-gradient-to-tr from-blue-300 to-blue-100"
          }`}
        >
          <div className="w-full h-full rounded-2xl">
            <img
              src={img}
              alt="Aqib Ali"
              className={`w-full h-full rounded-2xl object-cover border-[6px] ${
                mod === "dark"
                  ? "border-[rgba(30,144,255,0.4)]"
                  : "border-[rgba(59,130,246,0.3)]"
              }`}
            />
          </div>
        </div>

        {/* ===== Text ===== */}
        <div className="text-center md:text-left mt-6 md:mt-0 px-2 sm:px-4">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-poppins ${
              mod === "dark" ? "text-white" : "text-[#1e293b]"
            }`}
          >
            I'm Aqib Ali
          </h1>
          <p
            className={`mt-5 sm:mt-6 max-w-md sm:max-w-lg text-base sm:text-lg ${
              mod === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I'm a detail-oriented developer who enjoys turning ideas into
            visually appealing, interactive web experiences. My work focuses on
            building responsive and accessible applications that adapt perfectly
            to any device or screen size. I love solving problems, exploring new
            technologies, and creating designs that blend functionality with
            great user experience. My aim is to deliver digital solutions that
            are both beautiful and impactful.
          </p>

          <a
            href="#"
            className={`inline-block mt-8 px-6 py-3 text-sm sm:text-base font-semibold rounded-full transition duration-300 ${
              mod === "dark"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
