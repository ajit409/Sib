import React from "react";
import { ArrowUpRight } from "lucide-react";

const HomeBanner = () => {
  return (
    <>
<section className="bg-gradient-to-r from-black via-black to-red-900 text-white py-16 px-4 text-center pt-[140px]">
<div className="max-w-5xl mx-auto ">
          {/* Top Badge */}
          <div className="inline-block border w-[520px] h-[55px] border-white rounded-full px-6 py-2 text-[22px] font-semibold">
            India’s Premier{" "}
            <span className="font-bold">Digital Marketing Agency</span>
          </div>

          {/* Headings */}
          <h2 className="text-[60px] mt-[33px] font-extrabold">
            Get More Traffic, Leads & Sales
          </h2>
          <h1 className="text-[60px]  mt-[10px] font-bold text-red-600">
            with Strategic, AI-Powered
          </h1>
          <h4 className="text-[60px] mt-[10px] italic font-semibold">
            Digital Marketing Solutions
          </h4>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <button className="flex text-[20px] items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold">
              Start Growing Now <ArrowUpRight size={18} />
            </button>
            <button className="flex w-[230px] items-center gap-2 border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-full font-semibold">
              Explore Services <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
            <div>
              <h3 className="text-[55px] font-bold">
                617<span className="text-3xl">%</span>
              </h3>
              <p className="text-[23px] mt-2 text-gray-300">
                increased in{" "}
                <span className="font-semibold text-white">
                  Organic Traffic
                </span>
              </p>
            </div>
            <div>
              <h3 className="text-[55px] font-bold">
                315<span className="text-3xl">%</span>
              </h3>
              <p className="text-[23px] mt-2 text-gray-300">
                increased in{" "}
                <span className="font-semibold text-white">
                  Qualified Leads
                </span>
              </p>
            </div>
            <div>
              <h3 className="text-[55px] font-bold">
                344<span className="text-3xl">%</span>
              </h3>
              <p className="text-[23px] mt-2 text-gray-300">
                increased in{" "}
                <span className="font-semibold text-white">
                  Sales Growth YOY
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
