import React, { Fragment } from "react";
import Image from "next/image";

import profile from "/./public/images/blog/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import image_1 from "/./public/images/blog/ruben-ramirez-xhKG01FN2uk-unsplash.jpg";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboveFooter from "../../../components/AboveFooter";

function page() {
  return (
    <Fragment>
      <Header></Header>
      <section className="mt-20 mb-20 text-center w-full flex items-center justify-center px-12 sm:px-14 md:px-20  lg:px-28 xl:px-32">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center w-full lg:flex-row justify-center lg:gap-12 gap-5 border-b-[2px] pb-6 border-[rgb(255,255,255,4%)]">
            <div className="flex flex-col items-center lg:flex-row justify-center gap-4">
              <Image
                src={profile}
                alt=""
                className="w-[55px] h-[55px] rounded-full object-cover"
              ></Image>
              <span className="text-white">Andrew Jonson</span>
            </div>
            <p>Posted on 27th January 2021</p>
          </div>

          <h1 className="font-bold">
            How to store Tomatoes (and Whether to
            <br /> Refrigerate Them)
          </h1>
        </div>
      </section>

      <section className="h-96 w-full mb-20 px-12 sm:px-14 md:px-20  lg:px-28 xl:px-32 flex items-center justify-center">
        <Image
          src={image_1}
          alt=""
          className="w-full 2xl:max-w-[1300px] h-full object-cover"
        ></Image>
      </section>

      <section className=" mb-20  px-20 sm:px-40 md:px-44 lg:px-48 xl:px-52 text-center lg:text-start flex items-center justify-center w-full">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col gap-8">
          <h2 className="font-semibold">
            Edit this text to make it your own. To edit, simply click directly
            on the text.
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
            the Ghost UXWriter and has a set of UX copies cataloged.
          </p>
          <p className="leading-7">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged.
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

          <h3 className="font-semibold">
            Transform Your Idea Into Reality with Ether a Leading Digital Agency
          </h3>
          <div className="flex flex-col gap-2">
            <p className="leading-7">
              Step 1: Download the plugin from Figma community, search Ghost
              UXWriter
            </p>

            <p className="leading-7">
              Step 2: Open the plugin on your artboard
            </p>

            <p className="leading-7">
              Step 3: Search for your copy or look through the different
              categories of the copies
            </p>

            <p className="leading-7">
              Step 4: Select the type of error you are looking for. You will get
              three different copies for each error
            </p>

            <p className="leading-7">
              Step 5: Tap on the cards to insert text in your frames
            </p>

            <p className="leading-7">
              And you are all geared up to make your UX copies more fun and
              exciting 😎
            </p>
          </div>
          <h2 className="font-semibold">
            Your own words. You can move the text by dragging and dropping the
            text anywhere on the page.
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
        </div>
      </section>

      <AboveFooter></AboveFooter>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
