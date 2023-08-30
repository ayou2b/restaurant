"use client";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UilBars, UilTimes } from "@iconscout/react-unicons";

import hero_image from "/./public/images/landing_page/hero_image.jpg";
import about_image_1 from "/./public/images/landing_page/about_1.jpg";
import about_image_2 from "/./public/images/landing_page/about_2.jpg";
import arrow from "/./public/images/landing_page/Arrow.png";
import icon from "/./public/images/landing_page/Icon.png";
import vector_1 from "/./public/images/landing_page/Vector_1.png";
import vector_2 from "/./public/images/landing_page/Vector_2.png";
import vector_3 from "/./public/images/landing_page/Vector_3.png";
import vector_4 from "/./public/images/landing_page/Vector_4.png";
import vector_5 from "/./public/images/landing_page/Vector_5.png";
import vector_6 from "/./public/images/landing_page/Group_6.png";

import image_1 from "/./public/images/landing_page/albert-s-FkNfVgHVzkI-unsplash.jpg";
import image_2 from "/./public/images/landing_page/pexels-cats-coming-1907228.jpg";
import image_3 from "/./public/images/landing_page/pexels-eiliv-aceron-6896379.jpg";
import image_4 from "/./public/images/landing_page/pexels-lisa-fotios-1885578.jpg";
import image_5 from "/./public/images/landing_page/pexels-marianna-ole-1635985.jpg";
import image_6 from "/./public/images/landing_page/pexels-valeria-boltneva-1893555.jpg";
import image_7 from "/./public/images/landing_page/pexels-lina-kivaka-1879318.jpg";
import image_8 from "/./public/images/landing_page/sigmund-a19OVaa2rzA-unsplash.jpg";
import image_9 from "/./public/images/landing_page/tim-mossholder-YC6RVdoTtIk-unsplash.jpg";
import image_10 from "/./public/images/landing_page/farhad-ibrahimzade-Sk6my6_KTK0-unsplash.jpg";
import image_11 from "/./public/images/landing_page/louis-hansel-RNmibnLCJAA-unsplash.jpg";

import { usePathname } from "next/navigation";
import arrow_2 from "/./public/images/landing_page/Arrow_2.png";
import {
  UilFacebook,
  UilTwitter,
  UilInstagram,
  UilLinkedin,
} from "@iconscout/react-unicons";

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll	";
    }
  }, [mobileNav]);

  return (
    <Fragment>
      <header className=" py-4 h-[10vh] px-12 sm:px-14 md:px-20 lg:px-28 xl:px-32 w-full flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex items-center justify-between">
          <h3 className="font-bold text-[#FFB577] uppercase tracking-widest">
            <Link href="/">Rendezvous</Link>
          </h3>

          <ul className="items-center gap-14 text-white hidden lg:flex font-medium transition-all">
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
              mobileNav === true ? "test block" : "hidden"
            } w-full h-[100vh] absolute top-0 left-0  bg-[#19161b] text-white p-14 z-50`}
          >
            <ul className="gap-12 flex flex-col font-medium">
              <li
                onClick={() => {
                  setMobileNav(false);
                }}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => {
                  setMobileNav(false);
                }}
              >
                <Link href="/menu">Menu</Link>
              </li>
              <li
                onClick={() => {
                  setMobileNav(false);
                }}
              >
                <Link href="/about">About us</Link>
              </li>
              <li
                onClick={() => {
                  setMobileNav(false);
                }}
              >
                <Link href="/our-story">Our Story</Link>
              </li>
              <li
                onClick={() => {
                  setMobileNav(false);
                }}
              >
                <Link href="/blog">Blog</Link>
              </li>
              <li
                onClick={() => {
                  setMobileNav(false);
                }}
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
        </div>
      </header>

      <section className="px-12 sm:px-14 md:px-20 lg:px-28 xl:px-32 mb-20 mt-6 text-center  lg:text-start  w-full lg:h-[90vh] flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center justify-center gap-10 lg:flex-row-reverse lg:justify-between">
          <div>
            <Image
              src={hero_image}
              alt=""
              className="h-[500px] w-[500px] object-cover min-w-[300px] min-h-[300px]"
            ></Image>
          </div>

          <div className="flex flex-col items-center transition-all justify-center lg:items-start gap-6 max-w-lg">
            <h1 className="font-bold">
              We serve high quality foods of all kinds.
            </h1>
            <p className="leading-7">
              Edit this text to make it your own. To edit, simply click directly
              on the text to start adding your own words. You can move the text.
            </p>

            <Link
              href="/menu"
              className="bg-[#FFB577] px-8 hover:scale-95 duration-200 py-3 font-medium flex items-center gap-2"
            >
              View Menu <Image src={arrow} alt=""></Image>
            </Link>
            <div className="flex flex-col items-center justify-center gap-2 lg:items-start">
              <div>
                <h3 className="text-[20px] font-semibold">Opening Times</h3>
                <p className="leading-7">
                  Sunday to Saturday | 09:00 AM to 11:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-semibold">Location</h3>
                <p className="leading-7">
                  Master canteen, BBSR , Odisha 752054
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-semibold">Call us</h3>
                <p className="leading-7">+9776462441</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 sm:px-14 md:px-20  lg:px-28 xl:px-32 mb-20 text-center  lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center justify-center gap-10 lg:flex-row-reverse lg:justify-between">
          <div className="flex flex-col md:flex-row items-start  gap-10">
            <Image
              src={about_image_1}
              alt=""
              className="max-w-[230px] h-[510px]  object-cover"
            ></Image>

            <Image
              src={about_image_2}
              alt=""
              className="max-w-[230px] h-[510px] object-cover"
            ></Image>
          </div>

          <div className="flex flex-col transition-all items-center justify-center lg:items-start gap-7 max-w-lg">
            <span className="text-[#FFB577] flex items-center gap-6">
              KNOW MORE ABOUT US{" "}
              <div className="w-14 hidden lg:block h-[2px] bg-[#FFB577]"></div>
            </span>
            <h1 className="font-bold">
              We serve high quality foods of all kinds.
            </h1>
            <p className="leading-7">
              Edit this text to make it your own. To edit, simply click directly
              on the text to start adding your own words. You can move the text.
            </p>

            <div className="flex flex-col items-center justify-center gap-2 lg:items-start lg:flex-row lg:gap-5">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h3 className="text-[20px] font-semibold flex gap-2 items-center">
                  <Image src={icon} alt=""></Image>10+ People
                </h3>

                <p className="leading-7">We are Small Team</p>
                <p className="leading-7">
                  Through True Rich Attended does no end it his mother since
                  favourable.
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h3 className="text-[20px] font-semibold flex gap-2 items-center">
                  <Image src={icon} alt=""></Image>2014
                </h3>
                <p className="leading-7">We are From</p>
                <p className="leading-7">
                  Through True Rich Attended does no end it his mother since
                  favourable.
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <h3 className="text-[20px] font-semibold flex gap-2 items-center">
                  <Image src={icon} alt=""></Image>200k
                </h3>
                <p className="leading-7">We Served</p>
                <p className="leading-7">
                  Through True Rich Attended does no end it his mother since
                  favourable.
                </p>
              </div>
            </div>

            <Link
              href="/menu"
              className="bg-[#FFB577] hover:scale-95 duration-200 px-8 py-3 font-medium flex items-center gap-2"
            >
              View Menu <Image src={arrow} alt=""></Image>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-12 transition-all sm:px-14 md:px-20 flex items-center justify-center w-full  lg:px-28 xl:px-32 mb-20 text-center lg:text-start">
        <div className="w-full 2xl:max-w-[1300px]">
          <div className="flex flex-col items-center justify-center lg:items-end lg:justify-between mb-10  lg:flex-row">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <span className="text-[#FFB577] font-semibold flex items-center gap-6">
                WHAT WE ARE SERVING{" "}
                <div className="w-14 h-[2px] hidden lg:block bg-[#FFB577]"></div>
              </span>
              <h2 className="font-semibold">
                We all have to eat, so why not
                <br /> do it beautifully?
              </h2>
            </div>
            <p className="leading-7 max-w-lg">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.. Through True Rich Attended does no end it his mother
            </p>
          </div>

          <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center lg:items-start gap-3 bg-[rgb(0,0,0,16%)] p-5 md:p-8">
              <div className="w-[50px] h-[50px] rounded-full bg-[rgb(255,181,119,7%)] flex items-center justify-center">
                <Image src={vector_1} alt="" width={15}></Image>
              </div>
              <h3>Quafe Cake</h3>
              <p>
                Through True Rich Attended no end it his mother since favourable
                real had half every him.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:items-start gap-3 md:border-l-[3px] border-[rgb(255,255,255,6%)] bg-[rgb(0,0,0,16%)] p-5 md:p-8">
              <div className="w-[50px] h-[50px] rounded-full bg-[rgb(255,181,119,7%)] flex items-center justify-center">
                <Image src={vector_2} alt="" width={15}></Image>
              </div>
              <h3>Cofee</h3>
              <p>
                Through True Rich Attended no end it his mother since favourable
                real had half every him.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:items-start gap-3 lg:border-l-[3px] border-[rgb(255,255,255,6%)] bg-[rgb(0,0,0,16%)] p-5 md:p-8">
              <div className="w-[50px] h-[50px] rounded-full bg-[rgb(255,181,119,7%)] flex items-center justify-center">
                <Image src={vector_3} alt="" width={15}></Image>
              </div>
              <h3>Fast Food</h3>
              <p>
                Through True Rich Attended no end it his mother since favourable
                real had half every him.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:items-start gap-3 md:border-l-[3px] lg:border-none border-[rgb(255,255,255,6%)] bg-[rgb(0,0,0,16%)] p-5 md:p-8">
              <div className="w-[50px] h-[50px] rounded-full bg-[rgb(255,181,119,7%)] flex items-center justify-center">
                <Image src={vector_4} alt="" width={15}></Image>
              </div>
              <h3>Cocktails</h3>
              <p>
                Through True Rich Attended no end it his mother since favourable
                real had half every him.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:items-start gap-3 lg:border-l-[3px] border-[rgb(255,255,255,6%)] bg-[rgb(0,0,0,16%)] p-5 md:p-8">
              <div className="w-[50px] h-[50px] rounded-full bg-[rgb(255,181,119,7%)] flex items-center justify-center">
                <Image src={vector_5} alt="" width={15}></Image>
              </div>
              <h3>Grill</h3>
              <p>
                Through True Rich Attended no end it his mother since favourable
                real had half every him.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:items-start gap-3 md:border-l-[3px] border-[rgb(255,255,255,6%)] bg-[rgb(0,0,0,16%)] p-5 md:p-8">
              <div className="w-[50px] h-[50px] rounded-full bg-[rgb(255,181,119,7%)] flex items-center justify-center">
                <Image src={vector_6} alt="" width={15}></Image>
              </div>
              <h3>Snacks</h3>
              <p>
                Through True Rich Attended no end it his mother since favourable
                real had half every him.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 transition-all sm:px-14 md:px-20  lg:px-28 xl:px-32 mb-20 text-center lg:text-start w-full flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center">
          <div className="flex flex-col items-center justify-center lg:items-end lg:justify-between mb-10 w-full  lg:flex-row">
            <div className="flex items-center lg:items-start flex-col gap-2">
              <span className="text-[#FFB577] font-semibold flex items-center gap-6">
                OUR MENU{" "}
                <div className="w-16 h-[2px] hidden lg:block bg-[#FFB577]"></div>
              </span>
              <h2 className="font-semibold">
                Discover our menu <br /> chart
              </h2>
              <span className="text-[#C4E4EA] font-semibold">
                Most Popular Picks
              </span>
            </div>
            <p className="leading-7 max-w-lg">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.. Through True Rich Attended does no end it his mother
            </p>
          </div>

          <div className="flex flex-col items-center transition-all justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group overflow-hidden cursor-pointer">
              <Image
                src={image_1}
                alt=""
                className="group-hover:scale-150 duration-300"
              ></Image>
              <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                <h4 className="font-semibold">Drp Cofee</h4>
                <span className="text-white">$08.85</span>
              </div>
            </div>

            <div className="group overflow-hidden cursor-pointer">
              <Image
                src={image_5}
                alt=""
                className="group-hover:scale-150 duration-300"
              ></Image>
              <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                <h4 className="font-semibold">Choco Cup Cake</h4>
                <span className="text-white">$4.85</span>
              </div>
            </div>

            <div className="group overflow-hidden cursor-pointer">
              <Image
                src={image_3}
                alt=""
                className="group-hover:scale-150 duration-300"
              ></Image>
              <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                <h4 className="font-semibold">Chicken Burger</h4>
                <span className="text-white">$8.85</span>
              </div>
            </div>

            <div className="group overflow-hidden cursor-pointer">
              <Image
                src={image_6}
                alt=""
                className="group-hover:scale-150 duration-300"
              ></Image>
              <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                <h4 className="font-semibold">French Fries</h4>
                <span className="text-white">$7.85</span>
              </div>
            </div>

            <div className="group overflow-hidden cursor-pointer">
              <Image
                src={image_4}
                alt=""
                className="group-hover:scale-150 duration-300"
              ></Image>
              <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                <h4 className="font-semibold">Sandwitch</h4>
                <span className="text-white">$3.67</span>
              </div>
            </div>

            <div className="group overflow-hidden cursor-pointer">
              <Image
                src={image_2}
                alt=""
                className="group-hover:scale-150 duration-300"
              ></Image>
              <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                <h4 className="font-semibold">Chinese Soup</h4>
                <span className="text-white">$8.85</span>
              </div>
            </div>
          </div>

          <Link
            href="/menu"
            className="bg-[#FFB577] hover:scale-95 duration-200 px-8 py-3 font-medium flex items-center gap-2 mt-10"
          >
            View Menu <Image src={arrow} alt=""></Image>
          </Link>
        </div>
      </section>

      <section className="mb-20 text-center px-12 lg:p-0 lg:text-start w-full flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px]  flex flex-col lg:flex-row-reverse lg:justify-between">
          <div
            className="h-96 w-full lg:w-[60%]"
            style={{
              backgroundImage: `url(${image_7.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>

          <div className="flex flex-col items-center bg-[#1F1D21] p-12 lg:h-96  justify-center gap-14 lg:w-[40%]">
            <h4 className="font-semibold leading-7">
              Edit this text to make it your own. To edit, simply click directly
              on the text to start adding your own words. You can move the text
              by dragging and dropping the text
            </h4>
            <div className="flex flex-col items-center lg:flex-row-reverse justify-center lg:justify-between w-full pb-6 md:border-b-[2px] border-[rgb(255,255,255,6%)] gap-3">
              <Image
                src={image_8}
                alt=""
                className="h-[50px] w-[50px] rounded-full object-cover"
              ></Image>
              <div className="flex flex-col gap-2">
                <span className="text-white font-semibold">Joheny Andro</span>
                <p>Bhubaneswar, Odisha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 sm:px-14 md:px-20  lg:px-28 xl:px-32 mb-20 text-center lg:text-start flex w-full items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px]">
          <h2 className="font-semibold mb-8">Read Our Lastest Blog</h2>
          <div className="flex flex-col items-center transition-all justify-center gap-10 md:grid md:grid-cols-3">
            <div className="group cursor-pointer">
              <div className="bg-[#1F1D21] group-hover:bg-[#110f12] duration-200  p-10 flex flex-col gap-3">
                <span className="text-[#B8B8B8]">21 Jun 2021</span>
                <h3 className="font-semibold text-[25px]">
                  Extra Thick Homemad Pizza Sauce
                </h3>
                <p className="leading-7">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
              </div>
              <Image src={image_9} alt="" className="object-cover h-48"></Image>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-[#1F1D21] group-hover:bg-[#110f12] duration-200 cursor-pointer p-10 flex flex-col gap-3">
                <span className="text-[#B8B8B8]">21 Jun 2021</span>
                <h3 className="font-semibold text-[25px]">
                  The Best Way to Store Fresh Herbs
                </h3>
                <p className="leading-7">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
              </div>
              <Image
                src={image_10}
                alt=""
                className="object-cover h-48"
              ></Image>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-[#1F1D21] group-hover:bg-[#110f12] duration-200 cursor-pointer p-10 flex flex-col gap-3">
                <span className="text-[#B8B8B8]">21 Jun 2021</span>
                <h3 className="font-semibold text-[25px]">
                  5 ways to prepare
                  <br /> porridge
                </h3>
                <p className="leading-7">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
              </div>
              <Image
                src={image_11}
                alt=""
                className="object-cover h-48"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 gap-12 sm:px-14 md:px-20  lg:px-28 w-full flex items-center justify-center xl:px-32 mb-20 text-center lg:text-start ">
        <div className="bg-[#FFC492] p-14 2xl:max-w-[1300px] w-full text-white flex flex-col items-center lg:flex-row md:justify-between gap-10  justify-center">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <span>NEWSLETTER</span>
            <h2>
              Subscribe to our newsletter and
              <br /> get latest updates
            </h2>
          </div>

          <form className="flex flex-col lg:flex-row transition-all w-full gap-4 lg:gap-0 lg:max-w-lg">
            <input
              placeholder="Email"
              className="px-12 py-4 w-full placeholder:text-center lg:placeholder:text-start outline-none text-black placeholder:text-[#787878]"
            ></input>
            <button className="px-8 py-4 w-full lg:w-fit hover:bg-[#19161B] hover:text-white duration-200 bg-[#FFD3AF] text-black uppercase font-semibold">
              subscribe
            </button>
          </form>
        </div>
      </section>

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
    </Fragment>
  );
}
