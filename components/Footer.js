import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrow_2 from "/./public/images/landing_page/Arrow_2.png";
import {
  UilFacebook,
  UilTwitter,
  UilInstagram,
  UilLinkedin,
} from "@iconscout/react-unicons";

function Footer() {
  return (
    <footer className="px-12 md:mt-24 sm:px-14 w-full text-center lg:text-start  md:px-20  lg:px-28 xl:px-32 flex items-center justify-center">
      <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center justify-center  gap-10">
        <h3 className="font-bold text-[#FFB577] uppercase tracking-widest">
          <Link href="/">Rendezvous</Link>
        </h3>

        <ul className="items-center flex flex-col md:flex-row gap-10 text-white">
          <li className="hover:text-[#FFB577] duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#FFB577] duration-200">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="hover:text-[#FFB577] duration-200">
            <Link href="/about">About us</Link>
          </li>
          <li className="hover:text-[#FFB577] duration-200">
            <Link href="/our-story">Our Story</Link>
          </li>
          <li className="hover:text-[#FFB577] duration-200">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-[#FFB577] duration-200">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex flex-col md:pb-14 pt-3 md:pt-8 border-t-[2px] border-[rgb(255,255,255,4%)] w-full items-center justify-center md:gap-40 md:flex-row-reverse gap-4">
          <Link
            href="/contact"
            className=" items-center gap-3 text-white hidden md:flex hover:text-[#FFB577] duration-200 hover:gap-4"
          >
            Contact Us <Image src={arrow_2} alt=""></Image>
          </Link>

          <div className="flex  items-center gap-4 md:gap-7  text-white">
            <UilFacebook className="hover:text-[#FFB577] duration-200 cursor-pointer"></UilFacebook>
            <UilTwitter className="hover:text-[#FFB577] duration-200 cursor-pointer"></UilTwitter>
            <UilInstagram className="hover:text-[#FFB577] duration-200 cursor-pointer"></UilInstagram>
            <UilLinkedin className="hover:text-[#FFB577] duration-200 cursor-pointer"></UilLinkedin>
          </div>

          <p>© 2023 Rendezvous | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
