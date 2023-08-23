import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import image_1 from "/./public/images/our-story/matteo-steger-ZzfxDHeTM4E-unsplash.jpg";
import image_2 from "/./public/images/our-story/steffan-mitchell-gHrgeeCCkYA-unsplash.jpg";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboveFooter from "../../../components/AboveFooter";
function page() {
  return (
    <Fragment>
      <Header></Header>
      <section className="px-12 sm:px-14 md:px-20 lg:px-28 xl:px-32 mb-20 mt-14 text-center lg:text-start flex flex-col items-center justify-center gap-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center justify-center md:items-start max-w-xl gap-10">
          <div className="max-w-md">
            <h1 className="text-[35px] font-bold">Our Story</h1>
            <p className="leading-7">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-start">
            <Image
              src={image_1}
              alt=""
              className="w-[230px] md:relative md:top-10   object-cover"
            ></Image>
            <Image
              src={image_2}
              alt=""
              className="w-[230px] object-cover"
            ></Image>
          </div>
        </div>

        <div className="max-w-md flex flex-col gap-3">
          <h2 className="text-[30px] font-semibold">
            One of the best cafes in
            <span className="text-[#FFB577]"> New York.</span>
          </h2>
          <p className="leading-7">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged and
            categorized with a voice and tone variation ranging from plain,
            casual to playful. The intention to build this Figma plugin
            originated from our Medium blog post, ‘Designing voice and tone for
            error messages.
          </p>
          <p className="leading-7">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged and
            categorized with a voice and tone variation ranging from plain,
            casual to playful. The intention to build this Figma plugin
            originated from our Medium blog post, ‘Designing voice.
          </p>
        </div>
      </section>
      <AboveFooter></AboveFooter>
      <Footer></Footer>
    </Fragment>
  );
}

export default page;
