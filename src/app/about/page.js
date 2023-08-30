import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import about_image_1 from "/./public/images/landing_page/about_1.jpg";
import about_image_2 from "/./public/images/landing_page/about_2.jpg";
import arrow from "/./public/images/landing_page/Arrow.png";
import icon from "/./public/images/landing_page/Icon.png";
import image_1 from "/./public/images/about/rr-abrot-pNIgH0y3upM-unsplash.jpg";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboveFooter from "../../../components/AboveFooter";
function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-12 mt-14 sm:px-14 md:px-20 transition-all  lg:px-28 xl:px-32 mb-20 text-center  lg:text-start flex items-center justify-center">
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

          <div className="flex flex-col items-center justify-center lg:items-start gap-7 max-w-lg">
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
              className="bg-[#FFB577] px-8 py-3 font-medium flex items-center gap-2 hover:scale-95 duration-200"
            >
              View Menu <Image src={arrow} alt=""></Image>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-12 sm:px-14 md:px-20  lg:px-28 xl:px-32 text-center lg:text-start w-full flex items-center justify-center h-96">
        <div
          style={{
            backgroundImage: `url(${image_1.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full 2xl:max-w-[1300px] h-full relative flex items-center lg:justify-start p-12 lg:pl-20 justify-center"
        >
          <div className="z-10 absolute flex flex-col gap-2 md:max-w-md">
            <h2 className="font-semibold">
              One of the best
              <br /> Cafes in <span className="text-[#FFB577]"> New York</span>
            </h2>
            <p className="leading-7 text-[#dbdbdb]">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.. Through True Rich Attended does no end it his mother
            </p>
          </div>
          <div className="top-0 left-0 w-full absolute h-full z-0 bg-[rgb(0,0,0,55%)]"></div>
        </div>
      </section>

      <section className="mb-20 px-12 sm:px-14 md:px-20  lg:px-28 xl:px-32 text-center w-full flex items-center justify-center lg:text-start ">
        <div className="px-20 py-12 2xl:max-w-[1300px] w-full  bg-[rgb(255,255,255,3%)]">
          <h2 className="text-[30px] font-semibold mb-8">Our History</h2>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex p-4 lg:pl-0 gap-2 border-l-[3px] relative  lg:border-l-0   lg:border-t-[3px] border-[rgb(255,255,255,15%)] flex-col">
              <h3 className="text-[25px] font-semibold">1998</h3>
              <span className="font-bold text-white">Milestone One</span>
              <p>
                Through True Rich Attended does no end it his mother since
                favourable.
              </p>
              <div className="h-2 w-10 bg-[#FFB577] hidden lg:flex absolute left-0 rounded-md top-[-5px]"></div>
              <div className="h-10 w-2 bg-[#FFB577] lg:hidden absolute left-[-5px] rounded-md top-0"></div>
            </div>

            <div className="flex p-4 lg:pl-0 gap-2 border-l-[3px] lg:border-l-0   lg:border-t-[3px] relative border-[rgb(255,255,255,15%)] flex-col">
              <h3 className="text-[25px] font-semibold">2005</h3>
              <span className="font-bold text-white">Milestone Two</span>
              <p>
                Through True Rich Attended does no end it his mother since
                favourable.
              </p>
              <div className="h-2 w-10 bg-[#FFB577] hidden lg:flex absolute left-0 rounded-md top-[-5px]"></div>
              <div className="h-10 w-2 bg-[#FFB577] lg:hidden absolute left-[-5px] rounded-md top-0"></div>
            </div>

            <div className="flex p-4 lg:pl-0 gap-2 border-l-[3px]  lg:border-l-0   lg:border-t-[3px] relative border-[rgb(255,255,255,15%)] flex-col">
              <h3 className="text-[25px] font-semibold">2012</h3>
              <span className="font-bold text-white">Milestone Three</span>
              <p>
                Through True Rich Attended does no end it his mother since
                favourable.
              </p>
              <div className="h-2 w-10 bg-[#FFB577] hidden lg:flex absolute left-0 rounded-md top-[-5px]"></div>
              <div className="h-10 w-2 bg-[#FFB577] lg:hidden  absolute left-[-5px] rounded-md top-0"></div>
            </div>

            <div className="flex p-4 lg:pl-0 gap-2 border-l-[3px]  lg:border-l-0   lg:border-t-[3px] relative border-[rgb(255,255,255,15%)] flex-col">
              <h3 className="text-[25px] font-semibold">2023</h3>
              <span className="font-bold text-white">Milestone Four</span>
              <p>
                Through True Rich Attended does no end it his mother since
                favourable.
              </p>
              <div className="h-2 w-10 bg-[#FFB577] hidden lg:flex absolute left-0 rounded-md top-[-5px]"></div>
              <div className="h-10 w-2 bg-[#FFB577] lg:hidden absolute left-[-5px] rounded-md top-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 px-12 sm:px-14 md:px-20  lg:px-28 xl:px-32 text-center w-full lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex items-center justify-center flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="text-[35px] font-semibold">
            Things our company
            <br /> stands for
          </h2>
          <div className="max-w-md flex flex-col gap-3">
            <h3 className="text-[25px] font-semibold">
              Edit this text to make it your own. To edit, simply click directly
            </h3>
            <p className="leading-7">
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
            </p>
          </div>
        </div>
      </section>

      <AboveFooter></AboveFooter>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
