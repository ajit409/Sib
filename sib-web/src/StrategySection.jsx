import React, { useState } from "react";

const faqs = [
  {
    title: "Strategic Vision",
    content:
      "Every great campaign starts with a well-defined strategy. We analyze market trends, audience behavior, and competitive landscapes to create a roadmap for success.",
  },
  { title: "Creative Excellence", content: "Content for Creative Excellence..." },
  { title: "Insight-Driven Research", content: "Content for Insight-Driven Research..." },
  { title: "Brand Identity & Design", content: "Content for Brand Identity & Design..." },
  { title: "High-Impact Digital Marketing", content: "Content for High-Impact Marketing..." },
  { title: "Social & Content Strategy", content: "Content for Social & Content Strategy..." },
  { title: "Performance & Analytics", content: "Content for Performance & Analytics..." },
];

const StrategySection = () => {
  const [activeIndex, setActiveIndex] = useState(null); // No accordion open by default

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle logic
  };

  return (
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="flex flex-col items-start">
          <h2 className="text-[45px] font-bold text-red-600 mb-24 leading-tight">
            Strategy. 
            Creativity. <br />
            Performance.
          </h2>
          <div className="relative">
            <img
              src="/images/phone-seo-local-squares.png" // Fix path if needed
              alt="Mobile Example"
              className="w-[424px] h-[440px] rotate-[-5deg] drop-shadow-lg"
            />
            {/* Decorative red squares */}
            <div className="absolute top-2 left-[-20px] w-4 h-4 border-2 border-red-600" />
            <div className="absolute top-10 left-4 w-3 h-3 border-2 border-red-600" />
            <div className="absolute top-24 left-[-10px] w-3 h-3 border-2 border-red-600" />
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-[39px] font-bold mb-4">
            How to Create a Successful Digital Marketing Strategy?
          </h3>
          <p className="text-[20px] text-gray-700 mb-6">
            Success in the digital world isn’t just about being seen—it’s about
            making an impact. We blend{" "}
            <strong className="font-bold text-black">strategy, creativity,</strong> and{" "}
            <strong className="font-bold text-black">data-driven insights</strong> to craft campaigns that
            captivate audiences and drive{" "}
            <strong className="font-bold text-black">real business growth</strong>.
          </p>

          {/* Accordions */}
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <div key={index} className="border border-gray-300 rounded">
                <button
                  className="w-full text-[18px] text-left p-4 font-semibold flex justify-between items-center"
                  onClick={() => toggle(index)}
                >
                  {item.title}
                  <span className="text-lg">
                    {activeIndex === index ? "⌃" : "⌄"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 text-[18px] text-gray-600">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
