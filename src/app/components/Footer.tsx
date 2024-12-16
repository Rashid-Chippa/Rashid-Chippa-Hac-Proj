'use client'
import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { PiWhatsappLogoLight } from "react-icons/pi";

const Footer = () => {
    return (
      <footer className="bg-black text-white relative w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-orange-500 text-2xl font-semibold">Still You Need Our Support?</h2>
            <p className="text-gray-400 mt-2">Don’t wait, make a smart & logical quote here. It’s pretty easy.</p>
            <div className="mt-4 flex justify-center gap-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 w-full max-w-sm border border-gray-600 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-4 py-2 bg-orange-500 text-black rounded-md font-medium hover:bg-orange-400">
                Subscribe Now
              </button>
            </div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400 mb-4">
                Corporate clients and leisure travelers have been relying on GroundLink for dependable, safe, and
                professional chauffeured car service in major cities across the world.
              </p>
              <div className="text-gray-400">
                <p>Opening Hours</p>
                <p>Mon - Sat: 8:00 - 6:00</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>News</li>
                <li>Partners</li>
                <li>Team</li>
                <li>Contact</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold mb-4">Help?</h3>
              <ul className="space-y-2 text-gray-400">
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Reporting</li>
                <li>Documentation</li>
                <li>Support Policy</li>
                <li>Privacy</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold mb-4">Recent Post</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Is fast food good for your body? - February 28, 2022</li>
                <li>Change your food habit with organic food - February 28, 2022</li>
                <li>Do you like fast food for your life? - February 28, 2022</li>
              </ul>
            </div>
          </div>
  
          <div className="border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
            <div className="flex space-x-4  mt-4 sm:mt-0">
            <AiOutlineFacebook className="text-white hover:text-orange-500" />
              < FiTwitter  className="text-white hover:text-orange-500"/>
              <IoLogoInstagram  className="text-white hover:text-orange-500"/>
              <FiYoutube  className="text-white hover:text-orange-500"/>
              <PiWhatsappLogoLight className="text-white hover:text-orange-500"/>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  