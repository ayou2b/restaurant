import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import image_1 from "/./public/images/blog/rod-long-I79Pgmhmy5M-unsplash.jpg";
import profile from "/./public/images/landing_page/sigmund-a19OVaa2rzA-unsplash.jpg";
import arrow from "/./public/images/blog/Arrow.png";
import image_2 from "/./public/images/blog/austin-wade-T-nnqLUL_08-unsplash.jpg";
import image_3 from "/./public/images/blog/jimmy-dean-L8V802a8lz0-unsplash.jpg";
import image_4 from "/./public/images/blog/brooke-cagle-xcgh5_-QIXc-unsplash.jpg";
import image_5 from "/./public/images/blog/camille-brodard-iH5qFLZS390-unsplash.jpg";
import image_6 from "/./public/images/blog/nathan-dumlao-vbt-Fp3b5FA-unsplash.jpg";
import image_7 from "/./public/images/blog/ulysse-pointcheval-1WmlAiYgnoI-unsplash.jpg";
import image_8 from "/./public/images/blog/jonathan-borba-eQePTucwYFQ-unsplash.jpg";
import profile_1 from "/./public/images/blog/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboveFooter from "../../../components/AboveFooter";
import profile_2 from "/./public/images/blog/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg";
import profile_3 from "/./public/images/blog/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import profile_4 from "/./public/images/blog/podpros-GEnCnYhA1J4-unsplash.jpg";
function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-12 md:h-[93vh] 2xl:h-[60vh] sm:px-14 md:px-20 lg:px-28 xl:px-32 mb-20 mt-14  text-center  w-full flex items-center justify-center">
        <div className="w-full h-full  2xl:max-w-[1300px] flex flex-col gap-10  items-center justify-center">
          <h1 className="font-bold text-[35px]">Featured Blogs</h1>
          <div className="flex h-full  flex-col w-full md:text-start lg:flex-row lg:justify-between gap-14 items-center justify-center">
            <div
              className="h-[600px] lg:h-full w-full lg:w-[50%] relative  flex flex-col items-center justify-center"
              style={{
                backgroundImage: `url(${image_1.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="z-10 absolute flex flex-col items-cente h-full px-10 pt-24 justify-center gap-8 w-full md:items-start">
                <h1 className="text-[35px] font-semibold">
                  A guide to Thai
                  <br /> Curry
                </h1>

                <div className="flex flex-col items-center justify-center gap-6 md:flex-row w-full md:justify-between">
                  <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    <Image
                      src={profile}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full object-cover"
                    ></Image>
                    <div className="flex flex-col gap-2">
                      <span className="text-white">Andrew Jonson</span>
                      <p>27th January 2021</p>
                    </div>
                  </div>
                  <Link
                    href="/blog-inner-page"
                    className="flex items-center gap-3 text-white"
                  >
                    Read More <Image src={arrow} alt=""></Image>
                  </Link>
                </div>
              </div>

              <div className="bg-[rgb(255,196,146,47%)] absolute z-10 tracking-wider left-0 top-0 px-8 py-3 text-white uppercase">
                Trending
              </div>
              <div className="top-0 left-0 absolute z-0 w-full h-full bg-[rgb(0,0,0,80%)]"></div>
            </div>

            <div className="lg:w-[50%] h-full flex flex-col gap-8 items-start justify-between">
              <Link
                href="/blog-inner-page"
                className="flex flex-col lg:flex-row items-center gap-10"
              >
                <Image
                  src={image_2}
                  alt=""
                  className="w-32 h-32 object-cover"
                ></Image>
                <div className="flex flex-col gap-2 max-w-lg">
                  <h4 className="font-bold">
                    You can move the text by dragging and dropping the text
                  </h4>
                  <p>
                    Writing UX copies can be a little frustrating and confusing,
                    and sometimes
                  </p>
                </div>
              </Link>

              <Link
                href="/blog-inner-page"
                className="flex flex-col lg:flex-row items-center gap-10"
              >
                <Image
                  src={image_3}
                  alt=""
                  className="w-32 h-32 object-cover"
                ></Image>
                <div className="flex flex-col gap-2 max-w-lg">
                  <h4 className="font-bold">
                    Edit this text to make it your own. To edit, simply
                  </h4>
                  <p>
                    Writing UX copies can be a little frustrating and confusing,
                    and sometimes
                  </p>
                </div>
              </Link>

              <Link
                href="/blog-inner-page"
                className="flex flex-col lg:flex-row items-center gap-10"
              >
                <Image
                  src={image_4}
                  alt=""
                  className="w-32 h-32 object-cover"
                ></Image>
                <div className="flex flex-col gap-2 max-w-lg">
                  <h4 className="font-bold">
                    You can move the text by dragging and dropping the text
                  </h4>
                  <p>
                    Writing UX copies can be a little frustrating and confusing,
                    and sometimes
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 sm:px-14 md:px-20 mb-20 lg:px-28 xl:px-32 text-center md:text-start flex items-center justify-center w-full">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center justify-center gap-10">
          <h1>All Articles</h1>
          <div className="flex flex-col w-full  lg:grid lg:grid-cols-2 gap-12">
            <div
              href="/blog-inner-page"
              className="flex flex-col items-center gap-8 md:flex-row"
            >
              <Image
                src={image_5}
                alt=""
                className="h-[200px] w-[140px] object-cover"
              ></Image>
              <div className="flex flex-col items-center justify-center gap-6 md:items-start">
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                  <Image
                    src={profile_1}
                    alt=""
                    className="h-[50px] w-[50px] object-cover rounded-full"
                  ></Image>
                  <div className="flex flex-col gap-2">
                    <span className="text-white">Andrew Jonson</span>
                    <p>27th January 2021</p>
                  </div>
                </div>
                <h4 className="text-[20px] font-semibold">
                  A guide to Thai Curry
                </h4>
                <Link
                  href="/blog-inner-page"
                  className="flex items-center gap-3 text-white"
                >
                  Read More <Image src={arrow} alt=""></Image>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 md:flex-row">
              <Image
                src={image_6}
                alt=""
                className="h-[200px] w-[140px] object-cover"
              ></Image>
              <div className="flex flex-col items-center justify-center gap-6 md:items-start">
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                  <Image
                    src={profile_2}
                    alt=""
                    className="h-[50px] w-[50px] object-cover rounded-full"
                  ></Image>
                  <div className="flex flex-col gap-2">
                    <span className="text-white">Andrew Jonson</span>
                    <p>27th January 2021</p>
                  </div>
                </div>
                <h4 className="text-[20px] font-semibold">
                  The best guacamole recipe with only 4 ingredients
                </h4>
                <Link
                  href="/blog-inner-page"
                  className="flex items-center gap-3 text-white"
                >
                  Read More <Image src={arrow} alt=""></Image>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 md:flex-row">
              <Image
                src={image_7}
                alt=""
                className="h-[200px] w-[140px] object-cover"
              ></Image>
              <div className="flex flex-col items-center justify-center gap-6 md:items-start">
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                  <Image
                    src={profile_3}
                    alt=""
                    className="h-[50px] w-[50px] object-cover rounded-full"
                  ></Image>
                  <div className="flex flex-col gap-2">
                    <span className="text-white">Andrew Jonson</span>
                    <p>27th January 2021</p>
                  </div>
                </div>
                <h4 className="text-[20px] font-semibold">
                  How to store Tomatoes (and Whether to Refrigerate Them)
                </h4>
                <Link
                  href="/blog-inner-page"
                  className="flex items-center gap-3 text-white"
                >
                  Read More <Image src={arrow} alt=""></Image>
                </Link>
              </div>
            </div>

            <div
              href="/blog-inner-page"
              className="flex flex-col items-center gap-8 md:flex-row"
            >
              <Image
                src={image_4}
                alt=""
                className="h-[200px] w-[140px] object-cover"
              ></Image>
              <div className="flex flex-col items-center justify-center gap-6 md:items-start">
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                  <Image
                    src={profile_1}
                    alt=""
                    className="h-[50px] w-[50px] object-cover rounded-full"
                  ></Image>
                  <div className="flex flex-col gap-2">
                    <span className="text-white">Andrew Jonson</span>
                    <p>27th January 2021</p>
                  </div>
                </div>
                <h4 className="text-[20px] font-semibold">
                  The Absolute Best Way to Cook French Fries
                </h4>
                <Link
                  href="/blog-inner-page"
                  className="flex items-center gap-3 text-white"
                >
                  Read More <Image src={arrow} alt=""></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboveFooter></AboveFooter>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
