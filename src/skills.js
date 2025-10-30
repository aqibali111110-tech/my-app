import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeContext.js";
import { TrendingUp, Brush, Palette, ShoppingBag, Globe2 } from "lucide-react";


function Skills() {
  const { mod } = useTheme();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // ✅ Animation Trigger
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
      className={`${
        mod === "dark"
          ? "bg-slate-900 text-white"
          : "bg-[#f7f9fc] text-[#0b1120]"
      } h-auto pt-40 pb-20 transition-colors duration-500`}
    >
      {/* Skills Heading Section */}
      <div
        ref={sectionRef}
        className={
          isVisible ? "animate__animated animate__backInUp" : "opacity-0"
        }
      >
        <div>
          <div
            className={`text-5xl md:text-6xl justify-center font-bold text-center pt-20 md:pt-40 flex flex-row sm:flex-row`}
          >
            <h1
              className={`mr-2 ${
                mod === "dark" ? "text-white" : "text-[#0b1120]"
              }`}
            >
              My
            </h1>
            <span
              className={`ml-1 ${
                mod === "dark" ? "text-yellow-600" : "text-blue-600"
              }`}
            >
              Skills
            </span>
          </div>
        </div>

        <div
          className={`text-2xl justify-center font-semibold text-center pt-10 flex flex-row ${
            mod === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p>Technologies and Tools I can use to create amazing Projects</p>
        </div>
      </div>

      {/* Skills Boxes */}
      <div className="mt-20 md:mt-60">
        {/* First Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:mt-20 gap-6">
          {/* Front-End Development */}
          <div
            className={`w-full sm:w-80 ml-0 md:ml-12 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border-2 rounded-2xl h-auto ${
              mod === "dark"
                ? "bg-[#050b1a] border-white hover:border-blue-500"
                : "bg-white border-gray-300 hover:border-blue-400"
            }`}
          >
            <div className="mb-10">
              <h1
                className={`pl-8 text-3xl mt-8 font-bold ${
                  mod === "dark" ? "text-white" : "text-[#0b1120]"
                }`}
              >
                Front-End Development
              </h1>

              {["HTML5", "Tailwind CSS", "React.JS"].map((skill, i) => (
                <div key={i}>
                  <p
                    className={`pl-8 mt-10 ${
                      mod === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {skill}
                  </p>
                  <div
                    className={`ml-8 h-2 w-65 rounded-full ${
                      mod === "dark" ? "bg-gray-500" : "bg-gray-300"
                    }`}
                  >
                    <div className="bg-blue-600 h-2 w-50 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shopify Store Design */}
          <div
            className={`w-full sm:w-80 ml-0 md:ml-12 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border-2 rounded-2xl h-auto ${
              mod === "dark"
                ? "bg-[#050b1a] border-white hover:border-blue-500"
                : "bg-white border-gray-300 hover:border-blue-400"
            }`}
          >
            <div className="mb-10">
              <h1
                className={`pl-8 text-3xl mt-8 font-bold ${
                  mod === "dark" ? "text-white" : "text-[#0b1120]"
                }`}
              >
                Shopify Store Design
              </h1>

              {[
                "Theme Selling",
                "Theme Customization",
                "Product Page Optimization",
              ].map((item, i) => (
                <div key={i}>
                  <p
                    className={`pl-8 mt-10 ${
                      mod === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item}
                  </p>
                  <div
                    className={`ml-8 h-2 w-65 rounded-full ${
                      mod === "dark" ? "bg-gray-500" : "bg-gray-300"
                    }`}
                  >
                    <div className="bg-blue-600 h-2 w-50 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Marketing */}
          <div
            className={`w-full sm:w-80 mr-12 ml-0 md:ml-12 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border-2 rounded-2xl h-auto ${
              mod === "dark"
                ? "bg-[#050b1a] border-white hover:border-blue-500"
                : "bg-white border-gray-300 hover:border-blue-400"
            }`}
          >
            <div className="mb-10">
              <h1
                className={`pl-8 text-3xl mt-8 font-bold ${
                  mod === "dark" ? "text-white" : "text-[#0b1120]"
                }`}
              >
                Digital Marketing
              </h1>

              {[
                "Facebook & Instagram Ads",
                "Social Media Management",
                "Keyword Research",
              ].map((item, i) => (
                <div key={i}>
                  <p
                    className={`pl-8 mt-10 ${
                      mod === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item}
                  </p>
                  <div
                    className={`ml-8 h-2 w-65 rounded-full ${
                      mod === "dark" ? "bg-gray-500" : "bg-gray-300"
                    }`}
                  >
                    <div className="bg-blue-600 h-2 w-50 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:mt-20  mt-10 gap-6">

          <div
            className={`w-full sm:w-80  ml-0 md:ml-12 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border-2 rounded-2xl h-auto ${
              mod === "dark"
                ? "bg-[#050b1a] border-white hover:border-blue-500"
                : "bg-white border-gray-300 hover:border-blue-400"
            }`}
          >
            <div className="mb-10">
              <h1
                className={`pl-8 text-2xl md:text-3xl mt-8 font-bold ${
                  mod === "dark" ? "text-white" : "text-[#0b1120]"
                }`}
              >
                Digital Marketing
              </h1>

              {[
                "Facebook & Instagram Ads",
                "Social Media Management",
                "Keyword Research",
              ].map((item, i) => (
                <div key={i}>
                  <p
                    className={`pl-8 mt-10 ${
                      mod === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item}
                  </p>
                  <div
                    className={`ml-8 h-2 w-65 rounded-full ${
                      mod === "dark" ? "bg-gray-500" : "bg-gray-300"
                    }`}
                  >
                    <div className="bg-blue-600 h-2 w-50 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`w-full sm:w-80  ml-0 md:ml-12 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border-2 rounded-2xl h-auto ${
              mod === "dark"
                ? "bg-[#050b1a] border-white hover:border-blue-500"
                : "bg-white border-gray-300 hover:border-blue-400"
            }`}
          >
            <div className="mb-10">
              <h1
                className={`pl-8 text-3xl mt-8 font-bold ${
                  mod === "dark" ? "text-white" : "text-[#0b1120]"
                }`}
              >
                Digital Marketing
              </h1>

              {[
                "Facebook & Instagram Ads",
                "Social Media Management",
                "Keyword Research",
              ].map((item, i) => (
                <div key={i}>
                  <p
                    className={`pl-8 mt-10 ${
                      mod === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item}
                  </p>
                  <div
                    className={`ml-8 h-2 w-65 rounded-full ${
                      mod === "dark" ? "bg-gray-500" : "bg-gray-300"
                    }`}
                  >
                    <div className="bg-blue-600 h-2 w-50 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`w-full sm:w-80  ml-0 md:ml-12 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border-2 rounded-2xl h-auto ${
              mod === "dark"
                ? "bg-[#050b1a] border-white hover:border-blue-500"
                : "bg-white border-gray-300 hover:border-blue-400"
            }`}
          >
            <div className="mb-10">
              <h1
                className={`pl-8 text-3xl mt-8 font-bold ${
                  mod === "dark" ? "text-white" : "text-[#0b1120]"
                }`}
              >
                Digital Marketing
              </h1>

              {[
                "Facebook & Instagram Ads",
                "Social Media Management",
                "Keyword Research",
              ].map((item, i) => (
                <div key={i}>
                  <p
                    className={`pl-8 mt-10 ${
                      mod === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item}
                  </p>
                  <div
                    className={`ml-8 h-2 w-65 rounded-full ${
                      mod === "dark" ? "bg-gray-500" : "bg-gray-300"
                    }`}
                  >
                    <div className="bg-blue-600 h-2 w-50 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Icons Row */}
        <div className="flex flex-row flex-wrap mt-20 justify-center">
          <div
            className={`mr-6 w-32 flex flex-col items-center group justify-center border-2 rounded-2xl h-30 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg ${
              mod === "dark"
                ? "bg-[#050b1a] border-white hover:border-blue-500"
                : "bg-white border-gray-300 hover:border-blue-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
              className="w-10 h-8 mt-8 text-blue-500 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6"
            >
              <path
                d="M30.713,0.501L71.717,460.42l184.006,51.078l184.515-51.15L481.287,0.501H30.713z 
  M395.754,109.646l-2.567,28.596l-1.128,12.681H256h-79.796l5.155,57.761h189.72l-1.377,15.146
  l-13.255,148.506l-0.849,9.523L256,413.854l-115.806-32.006l-7.903-88.566h56.624l4.016,44.986
  l62.872,16.951l62.968-16.963l6.542-73.158H129.771L115.908,63.882h281.195L395.754,109.646z"
              />
            </svg>
            <h1
              className={`font-bold mt-2 ${
                mod === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Html
            </h1>
          </div>

          <div
            className={`mr-6 w-32 flex flex-col group items-center justify-center border-2 rounded-2xl h-30 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg ${
              mod === "dark"
                ? "bg-[#050b1a] border-white hover:border-blue-500"
                : "bg-white border-gray-300 hover:border-blue-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              role="img"
              className="w-8 h-8 mt-8  text-blue-500 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6"
            >
              <path
                d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41
  l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81
  -.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
              />
            </svg>
            <h1
              className={`font-bold mt-2 ${
                mod === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              CSS
            </h1>
          </div>

          <div
            className={`mr-6 w-32 flex flex-col items-center justify-center group border-2 rounded-2xl h-30 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg ${
              mod === "dark"
                ? "bg-[#050b1a] border-white hover:border-blue-500"
                : "bg-white border-gray-300 hover:border-blue-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
              className="w-8 h-8 mt-8 ml-3 rounded-[6px] text-blue-400 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6"
            >
              <path
                d="M1.008,0.5v510.432h510.492V0.5H1.008z M259.893,452.167
  c-11.822,11.919-30.478,18.938-53.429,18.938c-37.643,0-58.543-18.34-71.884-43.711
  c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857
  c13.183-6.699,11.661-27.01,11.661-49.054v-139.872h47.598v117.529
  C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917
  c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567
  c12.085-8.317,25.778-15.017,38.375-22.822c10.08,15.761,27.537,30.91,53.429,28.652
  c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425
  c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796
  c11.311-9.5,26.46-15.867,46.629-16.511c36.629-1.173,56.723,15.12,70.429,37.884
  c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969
  c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344
  C433.706,340.486,474.331,355.693,470.696,409.917z"
              />
            </svg>
            <h1
              className={`font-bold mt-2 ${
                mod === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              JavaScript
            </h1>
          </div>

          <div
            className={`mr-6 w-32 flex group flex-col items-center justify-center border-2 rounded-2xl h-30 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg ${
              mod === "dark"
                ? "bg-[#050b1a] border-white hover:border-blue-500"
                : "bg-white border-gray-300 hover:border-blue-400"
            }`}
          >
            <TrendingUp className="w-10 h-10 text-blue-500 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6" />
            <h1
              className={`font-bold mt-2 ${
                mod === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Marketing
            </h1>
          </div>

          <div
            className={`mr-6 group w-32 flex flex-col items-center justify-center border-2 rounded-2xl h-30 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg ${
              mod === "dark"
                ? "bg-[#050b1a] border-white hover:border-blue-500"
                : "bg-white border-gray-300 hover:border-blue-400"
            }`}
          >
            <ShoppingBag className="w-8 h-8 text-blue-500 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6" />
            <h1
              className={`font-bold mt-2 ${
                mod === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Shopify Store
            </h1>
          </div>

          <div
  className={`mr-6 w-32 flex flex-col items-center justify-center border-2 rounded-2xl h-30 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg group ${
    mod === "dark"
      ? "bg-[#050b1a] border-white hover:border-blue-500"
      : "bg-white border-gray-300 hover:border-blue-400"
  }`}
>
  {/* 🌐 Icon with hover animation */}
  <Globe2
    className="w-8 h-8 text-blue-500 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6"
  />

  {/* 📝 Title */}
  <h1
    className={`font-bold mt-2 ${
      mod === "dark" ? "text-gray-400" : "text-gray-700"
    }`}
  >
    Social Media
  </h1>
</div>


          <div
  className={`mr-6 w-32 flex flex-col items-center justify-center border-2 rounded-2xl h-30 transition-transform  duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg group ${
    mod === "dark"
      ? "bg-[#050b1a] border-white hover:border-blue-500"
      : "bg-white border-gray-300 hover:border-blue-400"
  }`}
>
  {/* Icon with hover animation */}
  <Brush
    className="w-8 h-8 text-blue-500 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6"
  />

  {/* Title */}
  <h1
    className={`font-bold mt-2 ${
      mod === "dark" ? "text-gray-400" : "text-gray-700"
    }`}
  >
    Graphic Design
  </h1>
</div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
