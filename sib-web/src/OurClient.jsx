import React from "react";

// Sample logos (replace with your actual image paths or URLs)
const clientLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/Airtel_logo_2020.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/56/Disney_wordmark.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d8/Coca-Cola_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Levi%27s_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e9/HP_logo_2012.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Citibank.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/JSW_Group_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Samsung_wordmark.svg",
  // Add more logo URLs here...
];

const OurClient = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-sm uppercase font-semibold tracking-widest mb-2 text-gray-400">
          Our Clients
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          India’s Trusted <span className="text-blue-400">Digital Marketing Experts</span> Behind
          <br />
          Fast-Growing Brands
        </h2>
        <p className="text-gray-300 mb-10">
          Trusted by 1000+ Companies Worldwide<br />
          20 Years of Excellence Driving Growth for them
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClient;
