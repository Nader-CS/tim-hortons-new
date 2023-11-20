"use client";
import { useState } from "react";
import PackageItem from "./package-item/PackageItem";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
const PackageInfo = () => {
  const [timsPackage, setTimsPackage] = useState("original"); //[original , social , gourmet]
  const locale = useLocale();
  const t = useTranslations();
  return (
    <section className="bg-[#3B2222] text-center" id="package-info">
      <article className="container mx-auto py-5">
        <div
          className={`${
            locale === "en" ? "lg:text-left" : "lg:text-right"
          } px-[3.5rem]`}
        >
          <h1
            className={`text-[#F8F5EF] text-[28px]`}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            {t("choose_your")}
          </h1>
          <p
            className={`text-[#C8102E]  text-[44px]`}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            {t("package")}
          </p>
        </div>
        <div className="lg:flex">
          <div className="flex flex-col sm:flex-row justify-center gap-6 lg:flex-col lg:w-[20%]">
            <div>
              <div className="flex items-baseline justify-center gap-2">
                <Image
                  src="/assets/images/package/ladning/tims.png"
                  width="60"
                  height="50"
                  alt="tims logo"
                />
                <button
                  className={`${
                    timsPackage == "original" ? "text-[#F8F5EF]" : "text-[grey]"
                  }`}
                  onClick={() => {
                    setTimsPackage("original");
                  }}
                  style={{
                    fontFamily:
                      locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                  }}
                >
                  {t("original")}
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-center gap-2">
                <Image
                  src="/assets/images/package/ladning/tims.png"
                  width="60"
                  height="50"
                  alt="tims logo"
                />
                <button
                  className={`${
                    timsPackage == "social" ? "text-[#F8F5EF]" : "text-[grey]"
                  }`}
                  onClick={() => {
                    setTimsPackage("social");
                  }}
                  style={{
                    fontFamily:
                      locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                  }}
                >
                  {t("social")}
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-center gap-2">
                <Image
                  src="/assets/images/package/ladning/tims.png"
                  width="60"
                  height="50"
                  alt="tims logo"
                />
                <button
                  className={`${
                    timsPackage == "gourmet" ? "text-[#F8F5EF]" : "text-[grey]"
                  }`}
                  onClick={() => {
                    setTimsPackage("gourmet");
                  }}
                  style={{
                    fontFamily:
                      locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                  }}
                >
                  {t("gourmet")}
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[80%]">
            <PackageItem type={timsPackage} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default PackageInfo;
