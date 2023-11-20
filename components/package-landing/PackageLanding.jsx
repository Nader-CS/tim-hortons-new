"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
const PackageLanding = () => {
  const params = useParams();
  const locale = params.locale;
  const t = useTranslations();
  return (
    <section className="bg-[#FFFFFF] pb-[5rem]">
      <article className="container mx-auto md:flex md:flex-wrap md:items-center">
        {/* first column */}
        <div className=" relative  md:w-[45%] md:flex md:flex-col md:flex-wrap px-3 md:px-0">
          <div>
            <div
              className={`${
                locale == "en"
                  ? "translate-x-[20%] translate-y-[30%]"
                  : "translate-x-[-30%] translate-y-[30%]"
              } max-w-fit w-[250px] sm:w-[300px]`}
            >
              <Image
                src="/assets/images/package/ladning/package-landing.png"
                width="300"
                height="150"
                priority={true}
                alt="package landing image"
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/assets/images/package/ladning/tims.png"
                width="100"
                height="60"
                alt="tims logo"
              />
              <h1
                className={`text-[54px] bold text-[#3B2222]`}
                style={{
                  fontFamily:
                    locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                }}
              >
                {t("together")}
              </h1>
              <div>
                <h3
                  className={`text-[#3B2222] `}
                  style={{
                    fontFamily:
                      locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                  }}
                >
                  {t("we_cater_now_for")}
                </h3>
                <p className="text-[20px]">
                  {t(
                    "corporate_meetings_office_celebrations_special_occasions_i_birthday_parties"
                  )}
                </p>
                <Link
                  href="#package-info"
                  className={`text-[#3B2222] `}
                  style={{
                    borderBottom: "0.1rem solid #3B2222",
                    fontFamily:
                      locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                  }}
                >
                  {t("choose_your_package")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* end of first column */}
        {/* second column */}
        <div className="m-3 md:w-[50%] md:mt-[10rem] lg:h-[25rem]">
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              borderRadius: "6px",
              pointerEvents: "none",
            }}
          >
            <source src="/assets/videos/package/packge.mp4" type="video/mp4" />
            {t("your_browser_does_not_support_the_video_tag")}
          </video>
        </div>
        {/* end of second column */}
      </article>
    </section>
  );
};

export default PackageLanding;
