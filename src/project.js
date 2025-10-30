import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeContext.js";
import cover from "./Cover.jpg";
import "animate.css";

function Project() {
  const { mod } = useTheme();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 👇 Trigger animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${
        mod === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
      } py-20 min-h-screen`}
    >
      {/* Heading */}
      <div
        className={`text-6xl font-bold text-center pt-20 flex justify-center items-center gap-3 ${
          isVisible ? "animate__animated animate__fadeInDown" : "opacity-0"
        }`}
      >
        <h1
          className={`font-bold ${
            mod === "dark" ? "text-white" : "text-[#1e293b]"
          }`}
        >
          My
        </h1>
        <span
          className={`font-bold ${
            mod === "dark" ? "text-yellow-600" : "text-yellow-500"
          }`}
        >
          Projects
        </span>
      </div>

      {/* Projects Grid */}
      <div
        className={`mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10 md:px-20 ${
          isVisible ? "animate__animated animate__zoomIn" : "opacity-0"
        }`}
      >
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl border-2 border-white hover:border-blue-500 transition-all duration-500"
          >
            <img
              src={cover}
              alt={`Project ${index + 1}`}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">
                Project {index + 1}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
