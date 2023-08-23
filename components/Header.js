"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UilBars, UilTimes } from "@iconscout/react-unicons";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll	";
    }
  }, [mobileNav]);

  return (
    <header className="flex items-center py-4 justify-between h-[10vh] px-12 sm:px-14 md:px-20 lg:px-28 xl:px-32">
      <h3 className="font-bold text-[#FFB577] uppercase tracking-widest">
        <Link href="/">Rendezvous</Link>
      </h3>

      <ul className=" items-center gap-14 text-white hidden lg:flex font-medium transition-all">
        <li
          className={`${
            pathname === "/" ? "text-[#FFB577]" : "text-[#B8B8B8]"
          } hover:text-[#FFB577] duration-200`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${
            pathname === "/menu" ? "text-[#FFB577]" : "text-[#B8B8B8]"
          } hover:text-[#FFB577] duration-200`}
        >
          <Link href="/menu">Menu</Link>
        </li>
        <li
          className={`${
            pathname === "/about" ? "text-[#FFB577]" : "text-[#B8B8B8]"
          } hover:text-[#FFB577] duration-200`}
        >
          <Link href="/about">About us</Link>
        </li>
        <li
          className={`${
            pathname === "/our-story" ? "text-[#FFB577]" : "text-[#B8B8B8]"
          } hover:text-[#FFB577] duration-200`}
        >
          <Link href="/our-story">Our Story</Link>
        </li>
        <li
          className={`${
            pathname === "/blog" ? "text-[#FFB577]" : "text-[#B8B8B8]"
          } hover:text-[#FFB577] duration-200`}
        >
          <Link href="/blog">Blog</Link>
        </li>
        <li
          className={`${
            pathname === "/contact" ? "text-[#FFB577]" : "text-[#B8B8B8]"
          } hover:text-[#FFB577] duration-200`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <UilBars
        onClick={() => {
          setMobileNav(true);
        }}
        className="block lg:hidden text-white"
      ></UilBars>

      <div
        className={`${
          mobileNav === true ? " block" : "hidden"
        } w-full h-[100vh] absolute top-0 left-0  bg-[#19161b] text-white p-14 z-50`}
      >
        <ul className="gap-12 flex flex-col font-medium">
          <li
            className={`${pathname === "/" ? "text-white" : "text-[#3b3b3b]"}`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${
              pathname === "/menu" ? "text-white" : "text-[#3b3b3b]"
            }`}
          >
            <Link href="/menu">Menu</Link>
          </li>
          <li
            className={`${
              pathname === "/about" ? "text-white" : "text-[#3b3b3b]"
            }`}
          >
            <Link href="/about">About us</Link>
          </li>
          <li
            className={`${
              pathname === "/our-story" ? "text-white" : "text-[#3b3b3b]"
            }`}
          >
            <Link href="/our-story">Our Story</Link>
          </li>
          <li
            className={`${
              pathname === "/blog" ? "text-white" : "text-[#3b3b3b]"
            }`}
          >
            <Link href="/blog">Blog</Link>
          </li>
          <li
            className={`${
              pathname === "/contact" ? "text-white" : "text-[#3b3b3b]"
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <UilTimes
          onClick={() => {
            setMobileNav(false);
          }}
          className={`right-10 top-10 absolute`}
        ></UilTimes>
      </div>
    </header>
  );
}

export default Header;
