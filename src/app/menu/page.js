"use client";
import React, { Fragment, useState } from "react";

import Image from "next/image";

import image_1 from "/./public/images/landing_page/albert-s-FkNfVgHVzkI-unsplash.jpg";
import image_2 from "/./public/images/landing_page/pexels-cats-coming-1907228.jpg";
import image_3 from "/./public/images/landing_page/pexels-eiliv-aceron-6896379.jpg";
import image_4 from "/./public/images/landing_page/pexels-lisa-fotios-1885578.jpg";
import image_5 from "/./public/images/landing_page/pexels-marianna-ole-1635985.jpg";
import image_6 from "/./public/images/landing_page/pexels-valeria-boltneva-1893555.jpg";

import coffe_1 from "/./public/images/menu_page/coffe/ali-tahvildari-M6V6_qRv1oE-unsplash.jpg";
import coffe_2 from "/./public/images/menu_page/coffe/engin-akyurt-W4cStr7X2wY-unsplash.jpg";
import coffe_3 from "/./public/images/menu_page/coffe/giancarlo-duarte-RtHw0PWCLhw-unsplash.jpg";
import coffe_4 from "/./public/images/menu_page/coffe/jonas-jacobsson-RFHFV7lVQBY-unsplash.jpg";
import coffe_5 from "/./public/images/menu_page/coffe/ksenia-ksenia-oUnoVDZPVdA-unsplash.jpg";
import coffe_6 from "/./public/images/menu_page/coffe/rashid-5PzOMYlg7MI-unsplash.jpg";

import cocktail_1 from "/./public/images/menu_page/Cocktails/ash-edmonds-fsI-_MRsic0-unsplash.jpg";
import cocktail_2 from "/./public/images/menu_page/Cocktails/jia-jia-shum-Fn8f-BYxVQs-unsplash.jpg";
import cocktail_3 from "/./public/images/menu_page/Cocktails/katherine-sousa-ln2R1wJ8TCM-unsplash.jpg";
import cocktail_4 from "/./public/images/menu_page/Cocktails/kobby-mendez-xBFTjrMIC0c-unsplash.jpg";
import cocktail_5 from "/./public/images/menu_page/Cocktails/kofookoo-de-6EgxRnKU5BI-unsplash.jpg";
import cocktail_6 from "/./public/images/menu_page/Cocktails/moritz-mentges-Z40sav8IYqQ-unsplash.jpg";
import fast_1 from "/./public/images/menu_page/fast_food/daniel-lloyd-blunk-fernandez-FjXCbRMMSSc-unsplash.jpg";
import fast_2 from "/./public/images/menu_page/fast_food/ilya-mashkov-_qxbJUr9RqI-unsplash.jpg";
import fast_3 from "/./public/images/menu_page/fast_food/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import fast_4 from "/./public/images/menu_page/fast_food/krisztian-tabori-ZQf4jzkpz1k-unsplash.jpg";
import fast_5 from "/./public/images/menu_page/fast_food/shardar-tarikul-islam-CXg_oEkjXH4-unsplash.jpg";
import fast_6 from "/./public/images/menu_page/fast_food/youjeen-cho-sBKLiRiunK0-unsplash.jpg";
import Quafe_Cake_1 from "/./public/images/menu_page/quafe_cake/american-heritage-chocolate-Id8BO472TbY-unsplash.jpg";
import Quafe_Cake_2 from "/./public/images/menu_page/quafe_cake/brooke-lark-BepcnEnnoPs-unsplash.jpg";
import Quafe_Cake_3 from "/./public/images/menu_page/quafe_cake/gaby-dyson-QX814A1w3j4-unsplash.jpg";
import Quafe_Cake_4 from "/./public/images/menu_page/quafe_cake/joseph-gonzalez-TAegVkFYIqo-unsplash.jpg";
import Quafe_Cake_5 from "/./public/images/menu_page/quafe_cake/ravi-sharma-Zk-wvIyjcWQ-unsplash.jpg";
import Quafe_Cake_6 from "/./public/images/menu_page/quafe_cake/toa-heftiba-U_zIfKfEoRM-unsplash.jpg";
import salad_1 from "/./public/images/menu_page/salads/anna-pelzer-IGfIGP5ONV0-unsplash.jpg";
import salad_2 from "/./public/images/menu_page/salads/brenda-godinez-_Zn_7FzoL1w-unsplash.jpg";
import salad_3 from "/./public/images/menu_page/salads/carly-jayne-Lv174o7fn7Y-unsplash.jpg";
import salad_4 from "/./public/images/menu_page/salads/hermes-rivera-Xmm8-LU6cv4-unsplash.jpg";
import salad_5 from "/./public/images/menu_page/salads/louis-hansel-RNmibnLCJAA-unsplash.jpg";
import salad_6 from "/./public/images/menu_page/salads/ryan-concepcion-w_z0RJCSBiE-unsplash.jpg";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboveFooter from "../../../components/AboveFooter";
function Page() {
  const [all, setAll] = useState(true);
  const [fastFood, setFastFood] = useState(false);
  const [Cofee, setCofee] = useState(false);
  const [Cocktails, setCocktails] = useState(false);
  const [Cake, setCake] = useState(false);
  const [salads, setSalads] = useState(false);

  return (
    <Fragment>
      <Header></Header>

      <section className="px-12 sm:px-14 md:px-20 mt-20 flex items-center justify-center  lg:px-28 xl:px-32 mb-20 text-center lg:text-start w-full">
        <div className="flex 2xl:max-w-[1300px] flex-col items-center justify-center lg:items-end lg:justify-between mb-10 w-full  lg:flex-row">
          <div className="flex items-center lg:items-start flex-col gap-2">
            <span className="text-[#FFB577] font-semibold flex items-center gap-6">
              OUR MENU{" "}
              <div className="w-14 hidden lg:block h-[2px] bg-[#FFB577]"></div>
            </span>
            <h2 className="font-semibold">
              Discover our menu <br /> chart
            </h2>
          </div>
          <p className="leading-7 max-w-lg">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.. Through True Rich Attended does no end it his mother
          </p>
        </div>
      </section>

      <section className="px-12 transition-all sm:px-14 md:px-20 mt-20  flex items-center justify-center  lg:px-28 xl:px-32 mb-20 text-center lg:text-start w-full">
        <div className="w-full 2xl:max-w-[1300px]">
          <div className="flex items-center gap-14 mb-10 flex-wrap justify-center lg:justify-start transition-all">
            <button
              onClick={() => {
                setAll(true);
                setCake(false);
                setCocktails(false);
                setCofee(false);
                setFastFood(false);
                setSalads(false);
              }}
              className={` ${
                all === true ? "text-[#FFB577]" : "text-[#B8B8B8]"
              } text-[18px] font-medium  hover:text-[#FFB577] duration-200`}
            >
              All
            </button>

            <button
              onClick={() => {
                setAll(false);
                setCake(false);
                setCocktails(false);
                setCofee(false);
                setFastFood(true);
                setSalads(false);
              }}
              className={` ${
                fastFood === true ? "text-[#FFB577]" : "text-[#B8B8B8]"
              } text-[18px] font-medium  hover:text-[#FFB577] duration-200`}
            >
              Fast Food
            </button>

            <button
              onClick={() => {
                setAll(false);
                setCake(false);
                setCocktails(false);
                setCofee(true);
                setFastFood(false);
                setSalads(false);
              }}
              className={` ${
                Cofee === true ? "text-[#FFB577]" : "text-[#B8B8B8]"
              } text-[18px] font-medium  hover:text-[#FFB577] duration-200`}
            >
              Cofee
            </button>

            <button
              onClick={() => {
                setAll(false);
                setCake(false);
                setCocktails(true);
                setCofee(false);
                setFastFood(false);
                setSalads(false);
              }}
              className={` ${
                Cocktails === true ? "text-[#FFB577]" : "text-[#B8B8B8]"
              } text-[18px] font-medium  hover:text-[#FFB577] duration-200`}
            >
              Cocktails
            </button>

            <button
              onClick={() => {
                setAll(false);
                setCake(true);
                setCocktails(false);
                setCofee(false);
                setFastFood(false);
                setSalads(false);
              }}
              className={` ${
                Cake === true ? "text-[#FFB577]" : "text-[#B8B8B8]"
              } text-[18px] font-medium  hover:text-[#FFB577] duration-200`}
            >
              Quafe Cake
            </button>

            <button
              onClick={() => {
                setAll(false);
                setCake(false);
                setCocktails(false);
                setCofee(false);
                setFastFood(false);
                setSalads(true);
              }}
              className={` ${
                salads === true ? "text-[#FFB577]" : "text-[#B8B8B8]"
              } text-[18px] font-medium  hover:text-[#FFB577] duration-200`}
            >
              Salads
            </button>
          </div>

          <div>
            {all === true && (
              <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={image_1}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Drp Cofee</h4>
                    <span className="text-white">$08.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={salad_4}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Arugula Salad</h4>
                    <span className="text-white">$35.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={image_5}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
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
                    className="object-cover h-60 group-hover:scale-150 duration-300"
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
                    className="object-cover h-60 group-hover:scale-150 duration-300"
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
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Sandwitch</h4>
                    <span className="text-white">$3.67</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={Quafe_Cake_2}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Crepe cake</h4>
                    <span className="text-white">$14.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={cocktail_3}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Painkiller</h4>
                    <span className="text-white">$8.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={image_2}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Chinese Soup</h4>
                    <span className="text-white">$8.85</span>
                  </div>
                </div>
              </div>
            )}

            {fastFood === true && (
              <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={fast_1}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Hot dog</h4>
                    <span className="text-white">$08.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={fast_2}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Burger</h4>
                    <span className="text-white">$4.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={fast_3}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Pizza</h4>
                    <span className="text-white">$8.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={fast_4}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">tacos</h4>
                    <span className="text-white">$7.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={fast_5}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Fried chicken</h4>
                    <span className="text-white">$3.67</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={fast_6}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Sandwich</h4>
                    <span className="text-white">$8.85</span>
                  </div>
                </div>
              </div>
            )}

            {Cofee === true && (
              <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={coffe_1}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Latte</h4>
                    <span className="text-white">$08.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={coffe_2}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Espresso</h4>
                    <span className="text-white">$4.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={coffe_3}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Eappuccino</h4>
                    <span className="text-white">$8.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={coffe_4}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Mocha</h4>
                    <span className="text-white">$7.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={coffe_5}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Americano</h4>
                    <span className="text-white">$3.67</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={coffe_6}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Glace</h4>
                    <span className="text-white">$8.85</span>
                  </div>
                </div>
              </div>
            )}

            {Cocktails === true && (
              <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={cocktail_1}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Tequila</h4>
                    <span className="text-white">$08.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={cocktail_2}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Humuhumu</h4>
                    <span className="text-white">$4.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={cocktail_3}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Painkiller</h4>
                    <span className="text-white">$8.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={cocktail_4}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Tequila</h4>
                    <span className="text-white">$7.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={cocktail_5}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Tropico</h4>
                    <span className="text-white">$3.67</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={cocktail_6}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Mojito</h4>
                    <span className="text-white">$8.85</span>
                  </div>
                </div>
              </div>
            )}

            {Cake === true && (
              <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={Quafe_Cake_1}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">RoseWater</h4>
                    <span className="text-white">$20.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={Quafe_Cake_2}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Crepe cake</h4>
                    <span className="text-white">$14.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={Quafe_Cake_3}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Strawberry cake</h4>
                    <span className="text-white">$8.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={Quafe_Cake_4}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Cupcakes</h4>
                    <span className="text-white">$7.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={Quafe_Cake_5}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Angel food cake</h4>
                    <span className="text-white">$3.67</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={Quafe_Cake_6}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Opera cake</h4>
                    <span className="text-white">$8.85</span>
                  </div>
                </div>
              </div>
            )}

            {salads === true && (
              <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={salad_1}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Green Salad</h4>
                    <span className="text-white">$30.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={salad_2}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Fruit salad</h4>
                    <span className="text-white">$35.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={salad_3}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Italian Chopped Salad</h4>
                    <span className="text-white">$8.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={salad_4}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Arugula Salad</h4>
                    <span className="text-white">$35.85</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={salad_5}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Homemade Caesar Salad</h4>
                    <span className="text-white">$38.67</span>
                  </div>
                </div>

                <div className="group overflow-hidden cursor-pointer">
                  <Image
                    src={salad_6}
                    alt=""
                    className="object-cover h-60 group-hover:scale-150 duration-300"
                  ></Image>
                  <div className="px-8 py-4 bg-[#1F1D21] flex items-center justify-between">
                    <h4 className="font-semibold">Tortellini Salad</h4>
                    <span className="text-white">$48.85</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <AboveFooter></AboveFooter>
      <Footer></Footer>
    </Fragment>
  );
}

export default Page;
