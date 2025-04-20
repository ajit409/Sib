import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Top Navbar */}
      <header className='fixed top-0 left-0 flex justify-between items-center w-full shadow-lg border-b border-gray-300 bg-gradient-to-b from-white to-[#f4f4f4] px-4 md:px-10 z-50'>
      {/* Logo */}
        <div>
          <img
            className='w-[220px] h-[70px] object-contain py-2'
            src='../public/images/sib-logoo.webp'
            alt='logo'
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className='hidden lg:flex'>
          <ul className="flex gap-6 text-gray-700 font-medium">
            {[
              "Digital Marketing",
              "PPC",
              "SEO",
              "SMO",
              "Graphic Design",
              "Website Designing",
              "Web Development",
              "Software Development",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-blue-500 cursor-pointer text-black text-[16px] px-2 py-4 font-bold font-[Bricolage Grotesque]"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Icon - Always visible for testing */}
        <div className="block">
          <button onClick={toggleMenu} className="flex flex-col justify-center items-center space-y-1">
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </header>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-md transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <img
            src="../public/images/sib-logoo.webp"
            alt="logo"
            className="w-[100px]"
          />
          <button onClick={toggleMenu} className="text-3xl text-gray-700">&times;</button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col gap-4 p-6 font-semibold">
          <li className="hover:text-blue-500 cursor-pointer">ABOUT US</li>
          <li className="hover:text-blue-500 cursor-pointer">OUR PORTFOLIO</li>
          <li className="hover:text-blue-500 cursor-pointer">LATEST BLOGS</li>
          <li className="hover:text-blue-500 cursor-pointer">CAREERS</li>
          <li className="hover:text-blue-500 cursor-pointer">RESOURCES</li>
          <li className="hover:text-blue-500 cursor-pointer">CONTACT US</li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 p-6 text-gray-700 text-xl">
          <i className="fab fa-facebook hover:text-blue-600 cursor-pointer"></i>
          <i className="fab fa-twitter hover:text-blue-400 cursor-pointer"></i>
          <i className="fab fa-linkedin hover:text-blue-700 cursor-pointer"></i>
          <i className="fab fa-youtube hover:text-red-600 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
