import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import image_1 from "/./public/images/contact/rizky-subagja-1k7TnX5GAww-unsplash.jpg";
import image_2 from "/./public/images/contact/rizky-subagja-aK3NqdJ7xTc-unsplash.jpg";
import arrow from "/./public/images/contact/Arro.png";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboveFooter from "../../../components/AboveFooter";

function page() {
  return (
    <Fragment>
      <Header></Header>
      <section className="mt-14 mb-20 px-12 sm:px-14 transition-all md:px-20  lg:px-28 xl:px-32 text-center flex flex-col items-center justify-center gap-12 lg:flex-row-reverse lg:text-start">
        <div className="flex items-center gap-8">
          <Image
            src={image_1}
            alt=""
            className="w-[300px] h-[400px] lg:w-[180px] lg:relative lg:top-[40px] lg:h-[370]  object-cover"
          ></Image>

          <Image
            src={image_2}
            alt=""
            className="w-[180px] h-[370px] hidden lg:block relative bottom-[40px] object-cover"
          ></Image>
        </div>

        <div className="flex flex-col items-center lg:items-start max-w-lg gap-8">
          <div className="flex flex-col gap-2">
            <h1>Have a Question ? Get in Touch with us 👋</h1>
            <p>Fill up the Form and ou team will get back to within 24 hrs</p>
          </div>
          <form className="flex flex-col items-center lg:items-start gap-5">
            <div className="flex flex-col gap-5">
              <input
                placeholder="Name"
                className="px-10 py-4 bg-transparent text-white placeholder:text-center lg:placeholder:text-start border-[1px] w-full border-[rgb(255,255,255,4%)]  outline-none"
              ></input>
              <input
                placeholder="Email"
                className="px-10 py-4 bg-transparent placeholder:text-center text-white  lg:placeholder:text-start border-[1px] w-full border-[rgb(255,255,255,4%)] outline-none"
              ></input>
            </div>
            <textarea
              placeholder="Messege"
              className="px-10 py-4 bg-transparent placeholder:text-center text-white  lg:placeholder:text-start border-[1px] w-full border-[rgb(255,255,255,4%)]  outline-none"
            ></textarea>
            <button className="flex items-center gap-3 hover:scale-95 duration-200 px-8 py-3 bg-[#27252D] text-white w-full justify-center lg:justify-start lg:w-fit">
              Send Messege <Image src={arrow} alt=""></Image>
            </button>
          </form>
        </div>
      </section>
      <AboveFooter></AboveFooter>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
