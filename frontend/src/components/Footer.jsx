import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Footer Logo and Description */}
        <div>
          <img
            className="mb-5 w-40 object-contain opacity-75" // Add custom styling for footer
            src={assets.MediTrack} // Use MediTrack.png as the footer logo
            alt="MediTrack Footer Logo"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Simplifying your healthcare experience, one click at a time.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <NavLink to="/" className="hover:text-primary">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-primary">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/delivery" className="hover:text-primary">
                Delivery
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href="tel:+12124567890" className="hover:text-primary">
                +1-212-456-7890
              </a>
            </li>
            <li>
              <a href="mailto:stackdev@gmail.com" className="hover:text-primary">
                stackdev@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-600">
          Copyright © 2024 MediTrack.com - All Rights Reserved.
        </p>
      </div>

      {/* Footer Bottom Logo */}
      <div className="flex justify-center mt-5">
        <img
          src={assets.footer} // Use footer.png for the bottom logo
          className="w-36 object-contain"
          alt="Footer Logo"
        />
      </div>
    </div>
  );
};

export default Footer;
