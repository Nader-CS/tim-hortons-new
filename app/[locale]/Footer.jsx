"use client";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Footer = () => {
  const params = useParams();
  const locale = params.locale;
  const t = useTranslations();
  return (
    <footer className=" bg-[#E5E5E5] py-[3rem] relative z-40">
      <div className="container mx-auto px-2 text-center md:text-start">
        <div className="my-3 md:flex md:gap-20  ">
          <div className="mb-5 text-[#3B2222] w-[200px] mx-auto md:mx-0">
            <h1
              style={{
                fontFamily:
                  locale == "en" ? "Helvetica Neue LT Pro" : "GE SS Two Bold",
              }}
              className="md:mb-3"
            >
              {t("times_rewards")}
            </h1>
            <p
              style={{
                fontFamily: locale == "en" ? "sofia pro" : "GE SS Two Medium",
              }}
            >
              {t("earn_points_save_money")}
            </p>
            <Link
              href="/info#how_it_works"
              style={{
                fontFamily: locale == "en" ? "sofia pro" : "GE SS Two Medium",
                color: "#A82730",
                fontWeight: "bold",
              }}
            >
              {t("how_it_works")}
            </Link>
          </div>
          <div className="text-[#3B2222] w-[180px] mx-auto md:mx-0">
            <h1
              style={{
                fontFamily:
                  locale == "en" ? "Helvetica Neue LT Pro" : "GE SS Two Bold",
              }}
              className="md:mb-3"
            >
              {t("careers")}
            </h1>
            <p
              style={{
                fontFamily: locale == "en" ? "sofia pro" : "GE SS Two Medium",
              }}
            >
              {t("come_join_the_team")}
            </p>
            <Link
              href="/join-us"
              style={{
                fontFamily: locale == "en" ? "sofia pro" : "GE SS Two Medium",
                color: "#A82730",
                fontWeight: "bold",
              }}
            >
              {t("join_our_team")}
            </Link>
          </div>
        </div>
        <hr className="h-[0.2rem] bg-[#ccc] w-[90%] mx-auto md:w-[100%]" />
        <div
          className="text-[#3B2222] my-5 md:flex md:items-baseline md:gap-20  "
          style={{
            fontFamily: locale == "en" ? "sofia pro" : "GE SS Two Medium",
          }}
        >
          <div className="flex flex-col gap-1 mb-1 w-[200px] mx-auto md:mx-0">
            <Link href="/contact-us">{t("contact_us")}</Link>
            <Link href="/about-us">{t("about_us")}</Link>
          </div>
          <div className="flex flex-col gap-1 w-[180px] mx-auto md:mx-0">
            <Link href="/policy">{t("privacy_policy")}</Link>
            <Link href="/terms-conditions">{t("terms_conditions")}</Link>
          </div>
          <div className="my-3 w-[180px] mx-auto md:mx-0">
            <h1 style={{ fontWeight: "bold" }} className="text-2xl">
              {t("connect_with_us")}
            </h1>
            <div className="flex gap-10 justify-center md:justify-start  mt-3">
              <Link href="https://www.facebook.com/TimHortons">
                <Image
                  src="/assets/images/footer/facebook.svg"
                  className="inline-block"
                  width="30"
                  height="30"
                  alt="facebook logo"
                />
              </Link>
              <Link href="https://www.instagram.com/TimHortons/">
                <Image
                  src="/assets/images/footer/insta.svg"
                  className="inline-block"
                  width="30"
                  height="30"
                  alt="insta logo"
                />
              </Link>
              <Link href="https://twitter.com/timhortons">
                <Image
                  src="/assets/images/footer/twitter.svg"
                  className="inline-block"
                  width="30"
                  height="30"
                  alt="twitter logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <hr className="h-[0.2rem] bg-[#ccc] w-[90%] mx-auto md:w-[100%]" />
        <div
          className="flex flex-col items-center my-3 md:flex-row "
          style={{
            fontFamily: locale == "en" ? "sofia pro" : "GE SS Two Medium",
          }}
        >
          <p className="md:w-[520px]">
            TM & © Tim Hortons, {new Date().getFullYear()}
          </p>
          <div>
            <Image
              src="/assets/images/footer/language.png"
              className="w-[4rem] inline-block"
              width="100"
              height="50"
              alt="language image"
            />
            <Dropdown
              name={locale.toLowerCase() == "en" ? "En" : "Ar"}
              options={["Ar", "En"].filter(
                (language) => language.toLowerCase() != locale.toLowerCase()
              )}
              isLanguage={true}
              className="origin-top-right bottom-[100%]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
