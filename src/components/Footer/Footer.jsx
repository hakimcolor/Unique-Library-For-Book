import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-10 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Unique Library for Book
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Discover, read, and buy your favorite books from our collection.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <span className="text-white font-semibold">Quick Links</span>
          <ul className="mt-2 space-y-1">
            <li className="hover:text-white cursor-pointer transition-colors">
              Home
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Categories
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Best Sellers
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Contact Us
            </li>
          </ul>
        </div>

        <div className="mt-6 md:mt-0">
          <span className="text-white font-semibold">Follow Us</span>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-2xl hover:text-white cursor-pointer transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-white cursor-pointer transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-white cursor-pointer transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-white cursor-pointer transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Unique Library for Book — All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
