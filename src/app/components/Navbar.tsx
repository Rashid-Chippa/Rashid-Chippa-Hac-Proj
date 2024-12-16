import Link from 'next/link';
import React from 'react';
import { CiSearch, CiUser } from 'react-icons/ci';
import { BsBasket3 } from 'react-icons/bs';
import Image from 'next/image';
import logo from '../../../public/unsplash_4ycv3Ky1ZZU.png';

const Navbar = () => {
  return (
    <div className="relative w-full bg-black">
      {/* Navbar */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center text-white text-2xl font-bold">
          Food<span className="text-orange-500">tuck</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 lg:gap-8 text-white mt-4 lg:mt-0">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link href="/menu" className="hover:text-orange-500">
            Menu
          </Link>
          <Link href="/blog" className="hover:text-orange-500">
            Blog
          </Link>
          <Link href="/pages" className="hover:text-orange-500">
            Pages
          </Link>
          <Link href="/about" className="hover:text-orange-500">
            About
          </Link>
          <Link href="/shop" className="hover:text-orange-500">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-orange-500">
           Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 text-white mt-4 lg:mt-0">
          <CiSearch className="cursor-pointer hover:text-orange-500" />
          <CiUser className="cursor-pointer hover:text-orange-500" />
          <BsBasket3 className="cursor-pointer hover:text-orange-500" />
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative text-center">
        <Image src={logo} alt="logo" layout="responsive" width={1920} height={400} />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <p className="text-lg font-bold">Our Chef</p>
          <p className="flex items-center gap-2">
            Home <span className="text-orange-500">Chef</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
