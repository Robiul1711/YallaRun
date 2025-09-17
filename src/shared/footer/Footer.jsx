import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";
import footerLogo from "@/assets/images/footerLogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6">
      <div className=" section-padding-x mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        {/* Left Section */}
        <div className="flex flex-col max-w-[395px] gap-2 md:w-1/3">
          <img src={footerLogo} alt="YALLARUN" className="w-[174px]" />
          <p className="text-gray-400 text-sm">
            Inspiring runners of all levels through content, events, coaching,
            and subscription boxes.
          </p>
        </div>

        {/* Center Navigation */}
        <div className="flex gap-6 md:gap-8 text-gray-300 text-sm w-full justify-center items-center">
          <Link to="#home" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link to="#about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link to="#events" className="hover:text-white transition-colors">
            Events
          </Link>
          <Link to="#articles" className="hover:text-white transition-colors">
            Articles
          </Link>
          <Link to="#coaches" className="hover:text-white transition-colors">
            Coaches
          </Link>
          <Link to="#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link to="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link to="#magazine" className="hover:text-white transition-colors">
            Magazine
          </Link>
        </div>

        {/* Right Social Icons */}
        <div className="flex gap-4 md:w-1/4 justify-start md:justify-end text-gray-400">
          <a
            href="#"
            className="hover:text-white transition-colors p-2 bg-white rounded-full"
          >
            <FaTimes size={16} color="black" />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors p-2 bg-white rounded-full"
          >
            <FaInstagram size={16} color="black" />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors p-2 bg-white rounded-full"
          >
            <FaLinkedinIn size={16} color="black" />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors p-2 bg-white rounded-full"
          >
            <FaFacebookF size={16} color="black" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-gray-500 text-xs flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <Link to={`#`} className={`text-white `}>
          Terms &amp; Conditions
        </Link>
        <span className="!text-white">
          © 2025 YallaRun. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
