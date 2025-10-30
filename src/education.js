import React, { useEffect, useRef, useState } from "react";
import {
  FaGraduationCap,
  FaBook,
  FaChalkboardTeacher,
  FaSchool,
  FaLaptopCode,
  FaCheck,
  FaStar,
  FaClock,
} from "react-icons/fa6";
import { useTheme } from "./ThemeContext.js";

function Education() {
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
    <section ref={sectionRef}>
      <div
        className={`min-h-screen ${
          mod === "dark"
            ? "bg-slate-900 text-white"
            : "bg-[#f8fafc] text-[#0f172a]"
        }`}
      >
        {/* ===== Heading ===== */}
        <div className="text-center pt-32 md:pt-40">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold ${
              mod === "dark" ? "text-amber-300" : "text-amber-500"
            }`}
          >
            My Education
          </h1>
        </div>

        {/* ===== Education Cards ===== */}
        <div className="flex flex-col gap-20 md:gap-32 items-center mt-20 px-4 sm:px-6">
          {/* ===== Matric Card ===== */}
          <EducationCard
            mod={mod}
            title="Matriculation (Computer Science)"
            school="High School Kot Nakka"
            description="Successfully completed matriculation with good grades. Built strong foundation in Mathematics, Science, English, and Computer Studies."
            duration="2 Year"
            grade="A+"
            year="2022-2024"
            color="blue"
          />

          {/* ===== Intermediate Card ===== */}
          <EducationCard
            mod={mod}
            title="Intermediate (FA IT)"
            school="High School Kot Nakka"
            description="Successfully completed Intermediate with a focus on Information Technology and Computer Studies."
            duration="2 Year"
            grade="A"
            year="2022-2024"
            color="green"
          />

          {/* ===== Bachelor Card ===== */}
          <EducationCard
            mod={mod}
            title="Bachelor of Arts (BA)"
            school="University of Punjab"
            description="Currently pursuing Bachelor of Arts with focus on literature, communication, and digital skills development."
            duration="2 Year"
            grade="A"
            year="2024-2026"
            color="blue"
          />
        </div>
      </div>
    </section>
  );
}

/* ===== Reusable EducationCard Component ===== */
function EducationCard({ mod, title, school, description, duration, grade, year, color }) {
  const colorMap = {
    blue: {
      border: "border-blue-400 md:border-blue-700",
      bgHeader: mod === "dark" ? "bg-blue-700" : "bg-gradient-to-r from-blue-300 to-blue-500",
      badge: mod === "dark" ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-400 hover:bg-blue-500",
      text: mod === "dark" ? "text-blue-800" : "text-blue-700",
    },
    green: {
      border: "border-green-400 md:border-green-700",
      bgHeader: mod === "dark" ? "bg-green-700" : "bg-gradient-to-r from-green-300 to-green-500",
      badge: mod === "dark" ? "bg-green-500 hover:bg-green-600" : "bg-green-400 hover:bg-green-500",
      text: mod === "dark" ? "text-green-800" : "text-green-700",
    },
  }[color];

  return (
    <div
      className={`w-full md:w-[90%] lg:w-[1280px] shadow-md rounded-3xl border-4 ${colorMap.border}`}
    >
      {/* Header */}
      <div
        className={`flex flex-col sm:flex-row justify-between items-center p-4 rounded-t-3xl ${colorMap.bgHeader}`}
      >
        <div
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-white transition ${colorMap.badge}`}
        >
          <h3>Completed</h3>
        </div>
        <div
          className={`flex items-center gap-2 px-5 py-2 mt-2 sm:mt-0 rounded-full text-white transition ${colorMap.badge}`}
        >
          <p>{year}</p>
        </div>
      </div>

      {/* Body */}
      <div
        className={`flex flex-col items-center text-center p-6 md:p-10 ${
          mod === "dark" ? "bg-[#0b1120]" : "bg-[#e2e8f0]"
        }`}
      >
        <div className="mt-6 w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] rounded-full flex justify-center items-center p-3 shadow-[0_0_30px_rgba(30,144,255,0.4)] bg-gradient-to-tr from-blue-700 to-blue-400">
          <FaBook size={24} color="white" />
        </div>

        <h1 className={`text-2xl sm:text-3xl mt-6 font-bold ${colorMap.text}`}>
          {title}
        </h1>

        <h2
          className={`text-xl mt-3 font-semibold ${
            mod === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          {school}
        </h2>

        <p
          className={`text-base sm:text-lg mt-4 px-4 sm:px-12 ${
            mod === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="flex items-center">
            <FaClock
              size={18}
              className={mod === "dark" ? "text-blue-500" : "text-blue-600"}
            />
            <p className="ml-2">Duration: {duration}</p>
          </div>
          <div className="flex items-center">
            <FaStar
              size={18}
              className={mod === "dark" ? "text-blue-500" : "text-blue-600"}
            />
            <p className="ml-2">Grade: {grade}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
