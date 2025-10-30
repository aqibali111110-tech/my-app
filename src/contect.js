import React from "react";
import { useTheme } from "./ThemeContext.js";

function Contect() {
  const { mod } = useTheme();

  return (
    <section
      className={`h-auto ${
        mod === "dark" ? "bg-slate-900 text-white" : "bg-[#f8fafc] text-gray-900"
      }`}
    >
      <div className="pb-20 md:pb-40 pt-20 md:pt-40">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-4xl md:text-5xl">Contect Me</h1>
        </div>

        <div
          className={`border-2 rounded-2xl mx-4 md:mx-auto mt-10 md:mt-20 p-6 md:p-10 flex flex-col gap-6 md:gap-10 ${
            mod === "dark"
              ? "bg-gray-800 border-gray-700 text-gray-400"
              : "bg-gray-100 border-gray-300 text-gray-700 shadow-lg"
          } max-w-4xl`}
        >
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className={`flex-1 h-14 rounded-xl px-4 ${
                mod === "dark"
                  ? "bg-gray-600 placeholder-gray-300 text-white"
                  : "bg-gray-100 placeholder-gray-500 border border-gray-300"
              }`}
            />
            <input
              type="email"
              placeholder="Email Address"
              className={`flex-1 h-14 rounded-xl px-4 ${
                mod === "dark"
                  ? "bg-gray-600 placeholder-gray-300 text-white"
                  : "bg-gray-100 placeholder-gray-500 border border-gray-300"
              }`}
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <input
              type="number"
              placeholder="Mobile Number"
              className={`flex-1 h-14 rounded-xl px-4 ${
                mod === "dark"
                  ? "bg-gray-600 placeholder-gray-300 text-white"
                  : "bg-gray-100 placeholder-gray-500 border border-gray-300"
              }`}
            />
            <input
              type="text"
              placeholder="Email Subject"
              className={`flex-1 h-14 rounded-xl px-4 ${
                mod === "dark"
                  ? "bg-gray-600 placeholder-gray-300 text-white"
                  : "bg-gray-100 placeholder-gray-500 border border-gray-300"
              }`}
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Your Message"
              className={`w-full h-40 rounded-xl px-4 py-2 resize-none ${
                mod === "dark"
                  ? "bg-gray-600 placeholder-gray-300 text-white"
                  : "bg-gray-100 placeholder-gray-500 border border-gray-300"
              }`}
            ></textarea>
          </div>

          {/* Send Button */}
          <div className="flex justify-center mt-6 md:mt-10">
            <button
              className={`h-12 w-40 rounded-2xl flex justify-center items-center transition duration-300 ${
                mod === "dark"
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contect;
