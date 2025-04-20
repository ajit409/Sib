import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const About = () => {
    useEffect(() => {
      AOS.init({
        duration: 800, // Animation duration
        once: true, // Only animate once
      });
    }, []);
  return (
    <section className="px-0 py-[70px]">
      <div className="bg-white  px-[70px] py-0 text-gray-800">
        <div className="">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Left: Images */}
            <div className="relative flex flex-col  ">
              <img
                src="../public/images/aboout-3.webp"
                alt="Team Photo"
                className="rounded-xl shadow-xl  w-[370px] h-[270px] z-10 relative" data-aos="fade-left"
          data-aos-delay="400"
              />
              <img
                src="../public/images/about-4.webp"
                alt="Office Photo"
                className="rounded-xl shadow-xl   absolute top-[160px] left-[40px] md:top-[180px] md:left-[60px]"data-aos="fade-left"
          data-aos-delay="400"
              />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col gap-4 md:pl-16 md:flex-1">
              <h2 className="text-[22px] font-bold">Welcome to SIB Infotech</h2>
              <h4 className="text-[60px]  font-bold leading-tight">
                Guaranteed Visibility Through{" "}
                <span className="text-red-600 text-[60px]">
                  Our Digital Marketing Services
                </span>
              </h4>

              <div className="pl-[100px] ">
                <p className="text-[20px] leading-relaxed mt-2">
                  <span className="font-bold">SIB Infotech</span> is a{" "}
                  <span className="font-bold">
                    leading digital marketing agency in India
                  </span>
                  , with offices in Mumbai and New Delhi. As a Google Premier
                  Partner, we specialize in{" "}
                  <span className="font-bold">
                    SEO services, PPC management, social media marketing,
                    website design, graphic design, and branding
                  </span>
                  . Our expertise helps businesses in India, the US, the UK,
                  Canada, Australia, and beyond boost online visibility,
                  engagement, and conversions while delivering measurable ROI.
                </p>

                <p
                  className="text-[20px] text-gray
 mt-2 leading-relaxed"
                >
                  <span className="font-bold">
                    With 20+ years of experience
                  </span>
                  , we leverage AI-driven marketing strategies, data analytics,
                  and result-oriented campaigns to maximize growth. Whether
                  you're a startup or an enterprise, our customized digital
                  marketing solutions ensure higher rankings, increased traffic,
                  and improved lead generation.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition flex items-center gap-2">
                    Let’s Grow Your Business
                    <span className="text-xl">↗</span>
                  </button>
                  <div className="flex items-center gap-3 border p-3 rounded-full shadow-md">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-6 h-6"
                    />
                    <div>
                      <div className="text-sm text-gray-500">Need Help</div>
                      <div className="font-semibold">+91 92222-60000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
