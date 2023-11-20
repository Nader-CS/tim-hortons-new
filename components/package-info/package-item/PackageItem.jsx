"use client";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const PackageItem = (props) => {
  const t = useTranslations();
  const locale = useLocale();
  const packages = [
    {
      type: "original",
      advantages: t("take_ten_donuts_timbits"),
      subPackage: [
        {
          heading: t("for_10_people"),
          content: t(
            "12_assorted_classic_donuts_1_take_ten_brewed_coffee_or_french_canilla_or_hot_chocolate_12_timbits"
          ),
        },
        {
          heading: t("for_20_people"),
          content: t(
            "24_assorted_classic_donuts_2_take_ten_brewed_coffee_or_french_canilla_or_hot_chocolate_24_timbits"
          ),
        },
        {
          heading: t("for_40_people"),
          content: t(
            "36_assorted_classic_donuts_4_take_ten_brewed_coffee_or_french_canilla_or_hot_chocolate_46_timbits"
          ),
        },
      ],
    },
    {
      type: "social",
      advantages: t("take_ten_donuts_timbits_sandwitches"),
      subPackage: [
        {
          heading: t("for_10_people"),
          content: t(
            "12_assorted_classic_donuts_1_take_ten_brewed_coffee_or_french_canilla_or_hot_chocolate_12_mixed_sandwiches_wraps_panini_croissant_12_timbits"
          ),
        },
        {
          heading: t("for_20_people"),
          content: t(
            "24_assorted_classic_donuts_2_take_ten_brewed_coffee_or_french_vanilla_or_hot_chocolate_24_mixed_sandwiches_wraps_panini_croissant_24_timbits"
          ),
        },
        {
          heading: t("for_40_people"),
          content: t(
            "36_assorted_classic_donuts_4_take_ten_brewed_coffee_or_french_vanilla_or_hot_chocolate_46_mixed_sandwiches_wraps_panini_croissant_46_timbits"
          ),
        },
      ],
    },
    {
      type: "gourmet",
      advantages: t("take_ten_donuts_timbits_sandwitches"),
      subPackage: [
        {
          heading: t("for_10_people"),
          content: t(
            "12_assorted_classic_donuts_1_take_ten_brewed_coffee_or_french_vanilla_or_hot_chocolate_12_timbits"
          ),
        },
        {
          heading: t("for_20_people"),
          content: t(
            "24_assorted_classic_donuts_2_take_ten_brewed_coffee_or_french_vanilla_or_hot_chocolate_24_timbits"
          ),
        },
        {
          heading: t("for_40_people"),
          content: t(
            "36_assorted_classic_donuts_4_take_ten_brewed_coffee_or_french_canilla_or_hot_chocolate_46_timbits"
          ),
        },
      ],
    },
  ];
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );

  const filtered_packages = packages.filter(
    (package_item) => package_item.type === props.type
  );
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="text-[#F8F5EF] px-2 md:px-0">
      <div
        className={` mt-4`}
        style={{
          fontFamily: locale === "en" ? "sofia pro black" : "GE SS Two Bold",
        }}
      >
        <h1>{filtered_packages[0].advantages}</h1>
      </div>
      <div className="lg:flex lg:gap-4 lg:pb-10">
        {filtered_packages[0].subPackage.map((subPackage, idx) => {
          return (
            <div key={idx} className="mt-5 ">
              <div className="lg:flex gap-2">
                <div className="content">
                  <h1
                    style={{
                      fontFamily:
                        locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                    }}
                  >
                    {subPackage.heading}
                  </h1>
                  <div>
                    <p>{subPackage.content}</p>
                  </div>
                </div>
                {idx ==
                filtered_packages[0].subPackage.length -
                  1 ? null : screenWidth >= 1000 ? (
                  <div className="w-[0.3rem] bg-white"></div>
                ) : (
                  <hr className="h-[0.1rem] my-2  w-[90%] mx-auto lg:w-[30%] lg:h-[100%] lg:rotate-90" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackageItem;
