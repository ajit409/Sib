import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white pt-12 pb-6 px-4">
      {/* Get a Free Quote Form */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-600 pb-8">
        <h3 className="text-2xl font-semibold text-white mb-4 md:mb-0">
          Get a Free Quote
        </h3>
        <form className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 rounded bg-white text-black placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="px-4 py-2 rounded bg-white text-black placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Message"
            className="px-4 py-2 rounded bg-white text-black placeholder-gray-500"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">📞 Let's Talk</h4>
          <p className="text-xl font-bold text-blue-400 mb-2">
            +91-92222-60000
          </p>
          <p className="mb-4">Need some great marketing? We deliver.</p>
          <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            GET STARTED
          </button>
        </div>

        {/* Internet Marketing */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Internet Marketing</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>➤ Social Media Optimization</li>
            <li>➤ PPC Management</li>
            <li>➤ Search Engine Marketing</li>
            <li>➤ Reputation Management</li>
            <li>➤ Paid Search Engine Inclusion</li>
            <li>➤ Email Marketing</li>
            <li>➤ PR Submission</li>
            <li>➤ Google Local Listing</li>
          </ul>
        </div>

        {/* Website Development */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Website Development</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>➤ ERP & CRM Solutions</li>
            <li>➤ Custom Web Development</li>
            <li>➤ CMS Development Services</li>
            <li>➤ Magento Development</li>
            <li>➤ Drupal Development</li>
            <li>➤ WordPress Experts</li>
            <li>➤ Joomla Development</li>
            <li>➤ Web Portal Development</li>
            <li>➤ E-Commerce Solutions</li>
          </ul>
        </div>

        {/* Website Designing */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Website Designing</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>➤ CMS Based Website</li>
            <li>➤ Dynamic Website Designing</li>
            <li>➤ Website Maintenance</li>
            <li>➤ Website Redesigning</li>
            <li>➤ Mobile Website Designing</li>
            <li>➤ Corporate Web Designing</li>
            <li>➤ Website Audit Report</li>
            <li>➤ XHTML Conversion</li>
          </ul>
        </div>

        {/* PPC Management */}
        <div>
          <h4 className="text-lg font-semibold mb-4">PPC Management</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>➤ Google Ads Management</li>
            <li>➤ LinkedIn Ads Management</li>
            <li>➤ Instagram Ads Management</li>
            <li>➤ Facebook Ads Management</li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="max-w-6xl mx-auto mt-10 flex gap-4 text-white text-lg justify-end">
        <a href="#" className="hover:text-blue-500">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-sky-400">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-blue-600">
          <FaLinkedinIn />
        </a>
        <a href="#" className="hover:text-red-500">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
