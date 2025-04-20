import React from "react";

const Digital = () => {
  return (
    <section className="bg-gradient-to-l from-black via-gray-900 to-red-900 text-white px-[70px] py-[70px]">
      <div className="  relative">
        {/* Headings */}
        <h4 className="text-[20px] font-semibold mb-2">Our Facts</h4>
        <h2 className="text-4xl font-bold mb-6">
  How We Became a Trusted Name in <br />
  <span className="text-red-500">Digital Marketing</span>
</h2>


        {/* Paragraphs */}
        <p className="text-[16px] font-semibold mb-4 w-[768px]">
          From our roots in Mumbai and New Delhi to serving companies worldwide,
          SIB Infotech’s 20+ year journey reflects our passion for
          growth-focused digital marketing. What started as a small team with
          big ambitions has grown into a full-service top digital marketing
          company delivering growth to businesses locally across India and
          around the world.
        </p>
        <p className="text-[16px] font-semibold mb-10 max-w-3xl">
          From building high-converting websites to executing data-driven SEO,
          PPC, and social media strategies, we help startups, enterprises, and
          global brands to achieve success with result-oriented strategies.
        </p>

        {/* Stats inside one rectangular box + image */}
        <div className="flex flex-col lg:flex-row items-start border-red-700 ">
          {/* Single Rectangular Stat Container */}
          <div className="bg-white/10 rounded-2xl shadow-lg  flex flex-col w-[90%] z-20 ">
            <div className="flex px-[20px] py-[20px] justify-between flex-wrap gap-4 ">
              {[
                { label: "Projects Delivered", value: "2000+" },
                { label: "Years of Experience", value: "20" },
                { label: "Team Members", value: "30+" },
                { label: "Satisfied Customers", value: "1200+" },
              ].map((item, index) => (
                <div key={index} className="text-center flex-1 min-w-[130px]">
                  <div className="text-[45px] font-semibold">{item.value}</div>
                  <div className="text-[20px] text-sm mt-1 font-semibold">{item.label}</div>
                </div>
              ))}

  
            </div>
          </div>
{/* Image to the right */}
<div className="w-full lg:w-1/3 mt-6 lg:mt-0 absolute top-[80px] left-[1000px] z-0 opacity-0.1 ">
            <img
              src="/images/party-img.webp"
              alt="SIB Infotech Office"
              className="rounded-2xl shadow-lg w-full object-cover "
            />
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Digital;
