"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className="bg-[#A82730] h-[93px] sticky top-0 left-0 z-50 "
      style={{
        fontFamily: locale == "en" ? "sofia pro" : "GE SS Two Medium",
        direction: "ltr",
      }}
    >
      <nav className="border-gray-200 dark:bg-gray-900 h-[100%]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[100%]">
          <div className="hidden md:block">
            <ul className="font-medium flex flex-row p-4 md:p-0 mt-4 gap-10 text-white ">
              <li>
                <Link href="locations">{t("locations")}</Link>
              </li>
              <li>
                <Link href="about-us">{t("about-us")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/assets/icons/header/header_logo.svg"
              width={179}
              height={35.5}
              alt="logo"
            />
          </div>
          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#A82730] md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-white">
              <li className="block pt-2 px-3 hover:bg-white hover:text-black md:hover:bg-[transparent] md:hover:text-[white] ">
                <Link href="package" className="block">
                  {t("catering_menu")}
                </Link>
              </li>
              <li className=" pt-2 px-3 hover:bg-white hover:text-black md:hover:bg-[transparent] md:hover:text-[white] ">
                <Link href="our-commitment" className="block">
                  {t("our_commitment")}
                </Link>
              </li>
              <li className=" pt-2 px-3 block md:hidden hover:bg-white hover:text-black">
                <Link href="locations" className="block">
                  {t("locations")}
                </Link>
              </li>
              <li className=" pt-2 px-3  block md:hidden hover:bg-white hover:text-black">
                <Link href="about-us" className="block">
                  {t("about-us")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
