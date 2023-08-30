import React from "react";

function AboveFooter() {
  return (
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
  );
}

export default AboveFooter;
