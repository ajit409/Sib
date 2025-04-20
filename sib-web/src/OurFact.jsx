import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurFact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Only animate once
    });
  }, []);
  const stats = [
    { value: "200K", label: "Keywords ranked on\nfirst page of Google" },
    {
      value: "10M+",
      label: "Cumulative website\nvisits for clients per month",
    },
    { value: "7X", label: "More Website Traffic\nThan Before" },
    { value: "300%", label: "Average increase in\nInbound Leads" },
    { value: "340%", label: "Average More\nImpressions in\nSearch engines" },
    { value: "35%", label: "Improved Conversion\nRates" },
  ];

  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-red-900 py-20 text-white relative overflow-hidden">
      <div className="text-center mb-12">
        <h4 className=" text-[20px] font-semibold">Our Facts</h4>
        <h2 className="text-[55px]  font-bold mt-2">
          Turning Clicks into <span className="text-white">Conversions.</span>
        </h2>
        <p className="mt-2 text-[20px] text-white-500">
          Optimized for <span className="text-red-500">Success.</span>{" "}
          Engineered for <span className="text-red-500">Growth.</span>
        </p>
      </div>

      {/* Main Content Container */}
      <div className="relative flex justify-center items-center flex-wrap gap-6 max-w-7xl mx-auto px-4">
        {/* Stat Cards - Positioned Around Image */}
        <div className="absolute top-0 left-10 w-[180px] h-[180px] cursor-pointer transition-transform duration-500 hover:rotate-[45deg] hover:scale-110 " data-aos="fade-right"
          data-aos-delay="200">
          <StatCard value={stats[0].value} label={stats[0].label} />
        </div>
        <div className="absolute top-36 left-32 w-[180px] h-[180px] ml-[80px] cursor-pointer transition-transform duration-500 hover:rotate-[45deg] hover:scale-110"
         data-aos="fade-right"
          data-aos-delay="200"
        >
          <StatCard value={stats[1].value} label={stats[1].label} />
        </div>
        <div className="absolute bottom-12 left-16 w-[180px] h-[180px] cursor-pointer transition-transform duration-500 hover:rotate-[45deg] hover:scale-110"data-aos="fade-right"
          data-aos-delay="200">
          <StatCard value={stats[2].value} label={stats[2].label} />
        </div>

        <div
          className="absolute top-0 right-10 w-[180px] h-[180px]"
          data-aos="fade-left"
        >
          <StatCard value={stats[4].value} label={stats[4].label} />
        </div>

        <div
          className="absolute top-36 right-32 w-[180px] h-[180px] mr-[80px]"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <StatCard value={stats[3].value} label={stats[3].label} />
        </div>

        <div
          className="absolute bottom-12 right-16 w-[180px] h-[180px]"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <StatCard value={stats[5].value} label={stats[5].label} />
        </div>

        {/* Phone Image in the Center */}
        <div className="relative z-10">
          <div className="rounded-3xl border-[6px] border-white/20 shadow-xl overflow-hidden w-[250px] h-[500px]">
            <img
              src="../public/images/center-mobile-conversion.webp" // Replace with your image path
              alt="Meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Stat card component
const StatCard = ({ value, label }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md text-center p-4 rounded-xl shadow-md">
      <div className="text-3xl font-bold text-red-500">{value}</div>
      <div className="text-xs text-white whitespace-pre-line mt-1">{label}</div>
    </div>
  );
};

export default OurFact;
