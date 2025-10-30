import React, { useState } from "react";
import myImg from "./img.jpg";
import { useTheme } from "./ThemeContext.js";
import Typewriter from "typewriter-effect";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

export default function Hero() {
  const { mod, setMod } = useTheme();

  return (
    <section
      className={`flex pt-30 flex-col ${
        mod === "dark"
          ? "bg-slate-900 text-white"
          : "bg-[#f8fafc] text-[#0f172a]"  // light mode background + text
      } md:flex-row justify-between items-center min-h-screen px-10 md:px-20 transition-colors duration-500`}
    >
      {/* ===== Left Side Text ===== */}
      <div className="max-w-xl text-center md:text-left space-y-4">
        <h1
          className={`text-lg ${
            mod === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Hi, Myself
        </h1>

        <h2 className="text-5xl md:text-6xl font-extrabold font-poppins">
          <span
            className={`${
              mod === "dark" ? "text-white" : "text-[#1e293b]"
            }`}
          >
            <Typewriter
              options={{
                strings: [
                  `<span style="color:${
                    mod === "dark" ? "white" : "#1e293b"
                  };">Aqib</span> <span style="color:#3b82f6;">Ali</span>`,
                ],
                autoStart: true,
                loop: false,
                delay: 70,
                deleteSpeed: Infinity,
              }}
            />
          </span>
        </h2>

        <h3 className="text-2xl font-semibold">
          And I'm a{" "}
          <span className="text-blue-500">
            Web Developer!
          </span>
        </h3>

        <p
          className={`leading-relaxed font-inter ${
            mod === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I’m a passionate Frontend Web Developer focused on creating
          responsive, user-friendly interfaces. Skilled in HTML, CSS,
          JavaScript, and modern frameworks to bring designs to life. Dedicated
          to crafting seamless digital experiences with clean and efficient
          code.
        </p>

        {/* ===== Social Icons ===== */}
        <div className="flex justify-center md:justify-start gap-5 mt-6">
          <a
            href="#"
            className={`hover:text-blue-600 transition duration-300 ${
              mod === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="#"
            className={`hover:text-pink-500 transition duration-300 ${
              mod === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="#"
            className={`hover:text-blue-500 transition duration-300 ${
              mod === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="#"
            className={`hover:text-gray-400 transition duration-300 ${
              mod === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaGithub size={30} />
          </a>
          <a
            href="#"
            className={`hover:text-gray-500 transition duration-300 ${
              mod === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaXTwitter size={30} />
          </a>
        </div>

        {/* ===== CV Button ===== */}
        <a
          href="#"
          className={`inline-block mt-8 px-6 py-3 font-semibold rounded-full transition duration-300 ${
            mod === "dark"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Download CV
        </a>
      </div>

      {/* ===== Right Side Image ===== */}
      <div className="mt-10 ml-30 md-ml-0 md:mt-0 flex justify-center md:justify-end">
        <div>
          <div
            className={`relative w-[460px] h-[460px] mr-30 md:w-[380px] md:h-[380px] rounded-full p-3 shadow-[0_0_40px_rgba(30,144,255,0.4)] ${
              mod === "dark"
                ? "bg-[conic-gradient(from_0deg,#3b82f6,#60a5fa,#2563eb,#3b82f6)] border-[#0b1120]"
                : "bg-[conic-gradient(from_0deg,#93c5fd,#60a5fa,#3b82f6,#93c5fd)] border-[#f8fafc]"
            }`}
          >
            <img
              src={myImg}
              alt="Aqib Ali"
              className={`w-full h-full rounded-full object-cover border-[6px] ${
                mod === "dark" ? "border-[#0b1120]" : "border-[#f8fafc]"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
