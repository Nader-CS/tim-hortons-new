"use client";
import { useEffect, useState } from "react";
import Dropdown from "../ui/dropdown/Dropdown";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const packages = {
  0: "/assets/documents/packages/package_uae.pdf",
  1: "/assets/documents/packages/package_uae.pdf",
  2: "/assets/documents/packages/package_bahrain.pdf",
  3: "/assets/documents/packages/package_qatar.pdf",
  4: "/assets/documents/packages/package_oman.pdf",
  5: "/assets/documents/packages/package_kuwait.pdf",
};
const PreOrder = () => {
  const t = useTranslations();
  const countaries = [
    t("united_arab_emirates"),
    t("saudi_arabia"),
    t("bahrain"),
    t("qatar"),
    t("oman"),
    t("kuwait"),
  ];
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
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

  const [countary, setCountary] = useState(countaries[0]);
  const [packageUrl, setPackageUrl] = useState(packages[0]);
  useEffect(() => {
    let count = countaries.indexOf(countary);
    setPackageUrl(packages[count]);
  }, [countary]);

  const params = useParams();
  const locale = params.locale;

  return (
    <section className="bg-[white] my-10">
      <div className="container mx-auto text-center">
        <div>
          <h1
            className={`text-[2rem] text-[#3B2222]`}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            {t("pre_order_now")}
          </h1>
        </div>
        <div
          className={`w-[85%] mx-auto text-[#A82730]`}
          style={{
            fontFamily: locale === "en" ? "sofia pro black" : "GE SS Two Bold",
          }}
        >
          <p>{t("do_you_have_a_birthday_or_an_event_to_plan")}</p>
          <p>
            {t(
              "click_below_to_view_the_price_and_contact_us_for_further_information"
            )}
          </p>
        </div>
      </div>
      <div className="bg-[#F8F5EF] mt-8 p-5">
        <div className="container mx-auto text-center lg:flex lg:flex-wrap lg:items-center lg:justify-between xl:px-10">
          <div className="lg:flex lg:items-center gap-5">
            <h3
              className={` mb-3 `}
              style={{
                fontFamily: locale === "en" ? "sofia pro" : "GE SS Two Medium",
              }}
            >
              {t("please_choose_your_region")}
            </h3>
            <Dropdown
              name={countaries[0]}
              options={countaries}
              isLanguage={false}
              cheverOnDownIcon={true}
              setChoice={setCountary}
              className="bg-[#F8F5EF] w-[100%]  top-[100%] left-[0]"
              mainButoonStyle="bg-white px-2 py-3 rounded-[2rem] w-[80%] mb-3 md:w-[300px]"
              textAlign={`${locale == "en" ? "text-left" : "text-right"}`}
            />
          </div>
          <div>
            {screenWidth >= 992 ? (
              <div className="w-[0.2rem] h-[60px] bg-[#3B2222]"> </div>
            ) : (
              <hr className="h-[0.1rem] my-2  w-[90%] mx-auto bg-[#3B2222]" />
            )}
          </div>
          <div
            className={` text-[#A82730]`}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            <p dir="ltr">(971) 56 404 192</p>
            <p>timscateringuae@timhortonsme.com</p>
          </div>
          <div>
            <a href={packageUrl} target="_blank" className="inline-block">
              <Image
                src="/assets/images/package/pre-order/get_pdf.png"
                width="80"
                height="80"
                alt="get packages"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreOrder;
