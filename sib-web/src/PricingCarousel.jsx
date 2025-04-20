import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const packages = [
  {
    title: "Graphic Designing Packages",
    image: "../public/images/Graphic-design.jpeg",
    features: ["Logos", "Motion Graphics", "Stationery", "Brochure Design"],
    price: "$175/Month",
  },
  {
    title: "Link Building Packages",
    image: "../public/images/Link-building.jpeg",
    features: ["Guest Posting", "Local Listings", "Blog Posting", "Press Release"],
    price: "$175/Month",
  },
  {
    title: "SEO Packages",
    image: "../public/images/Seo-package.jpeg",
    features: ["On Page", "Technical", "Off Page", "Local SEO"],
    price: "$250/Month",
  },
  {
    title: "Graphic Designing Packages",
    image: "../public/images/Graphic-design.jpeg",
    features: ["Logos", "Motion Graphics", "Stationery", "Brochure Design"],
    price: "$175/Month",
  },
  {
    title: "Link Building Packages",
    image: "../public/images/Link-building.jpeg",
    features: ["Guest Posting", "Local Listings", "Blog Posting", "Press Release"],
    price: "$175/Month",
  },
  {
    title: "SEO Packages",
    image: "../public/images/Seo-package.jpeg",
    features: ["On Page", "Technical", "Off Page", "Local SEO"],
    price: "$250/Month",
  },
];

const PricingCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-gray-100 py-16 px-4 text-center relative">
      <h3 className="text-[18px] font-semibold mb-2">
        Digital Marketing Pricing Plans
      </h3>
      <h2 className="text-[55px] text-red-500   mb-1">
        360° <span className="text-red-600 font-bold">Digital Marketing</span> Solutions
      </h2>
      <p className="text-[18px] font-semibold mb-10 mt-[16px]">
        Our Digital Marketing Packages start from{" "}
        <span className=" ">$175</span> only.
      </p>

      {/* Character icon on the left */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20">
        {/* <img src="/images/character.png" alt="character" className="w-14 h-14" /> */}
      </div>

      <div className="flex items-center justify-center gap-4 max-w-6xl mx-auto relative">
        {/* Left arrow */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-black text-white p-3 rounded-full transition"
        >
                      {"<"}

        </button>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {packages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative border border-gray-300 shadow-md rounded-lg overflow-hidden bg-white">
                <div className="w-[167px] h-[47px]  absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-b">
                  {item.title}
                </div>
                <div className="pt-10 px-4 pb-6 flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[319px] h-[150px] object-contain mb-4"
                  />
                  <ul className="text-sm text-gray-700 mb-4 space-y-1 text-left">
                    {item.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                  <p className="text-red-600 font-semibold mb-4">
                    Starts from: {item.price}
                  </p>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                    Enquire Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right arrow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-black text-white p-3 rounded-full  transition"
        >
            {">"}

        </button>
      </div>
    </section>
  );
};

export default PricingCarousel;
