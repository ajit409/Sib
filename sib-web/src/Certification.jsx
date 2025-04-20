import React from "react";

const Certification = () => {
  return (
    <section className="bg-gradient-to-r from-[#8c1f1f] to-black text-white">
      <div className="  flex flex-col md:flex-row justify-items-end px-[70px] py-[70px]">
        {/* Left content */}
        <div className="flex-1 w-[50%] pr-10">
          <p className="text-[18px] font-semibold text-white mb-2">
            Our Certifications
          </p>
          <h2 className="text-3xl font-bold mb-4">
            Certified Digital Marketing Experts, <br />
            Trusted by Industry Leaders
          </h2>
          <p className="text-[16px] font-semibold mb-6">
            Recognized by industry leaders, our certifications reflect our
            commitment to excellence. We bring expertise, innovation, and a
            proven track record of digital marketing success. As certified
            digital marketing experts, we leverage exclusive insights,
            cutting-edge tools, and proven strategies to drive results for our
            clients.
          </p>

          {/* Partner Logos */}
          <div className="bg-red-600 rounded-lg p-4 flex flex-wrap gap-10  justify-center ">
            <img
              src="/images/bing-add-microsoft.png"
              alt="Microsoft Ads"
              className="w-[180px] h-[80px] object-contain"
            />
            <img
              src="/images/meta-business-partner-logo.png"
              alt="Meta Business Partner"
              className="w-[180px] h-[80px] object-contain"
            />
            <img
              src="/images/shopify-partner-logo.png"
              alt="Shopify Partner"
              className="w-[180px] h-[80px] object-contain"
            />
          </div>
        </div>

    {/* Right content - aligned to right, text aligned left */}
<div className="flex flex-col w-[50%] ml-auto">
  <div className="bg-white text-black rounded-md p-6 shadow-md mb-6 flex items-center justify-between w-full">
    <div>
      <div className="flex items-center gap-2 text-yellow-500 text-xl mb-2">
        ★ ★ ★ ★ ★
      </div>
      <p className="font-semibold text-[18px] mb-1">
        Top 3% Google <span className="text-red-600">Premier Partner</span> Agency
      </p>
      <p className="text-[18px] text-gray-700">– Elite Google Ads Expertise</p>
    </div>
    <img
      src="/images/google-premium-partner.png"
      alt="Google Partner"
      className="w-[257px] h-[120px] object-contain ml-4"
    />
  </div>

  {/* Paragraph text aligned left */}
  <p className="text-[16px] font-semibold leading-relaxed text-left ">
    As a Google Premier Partner, SIB Infotech ranks among the top 3% of
    Google Ads agencies, recognized for delivering exceptional Google
    Ads performance. Our expert team leverages exclusive access to
    Google's latest tools, product betas, and consumer insights,
    ensuring higher ROI, lower ad costs, & maximum conversions for your
    business.
    <br />
    <br />
    With dedicated support from Google, we craft data-driven,
    high-performing campaigns tailored to your goals.
  </p>
</div>


      </div>
    </section>
  );
};

export default Certification;
