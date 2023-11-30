"use client";
import { useLocale, useTranslations } from "next-intl";
import Card from "../ui/card/Card";
import Link from "next/link";

const RedeemMore = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="bg-white py-[10rem] px-3">
      <article className="container mx-auto">
        <Card className="bg-[#F8F5EF] p-3 lg:flex lg:flex-wrap lg:py-[1.5rem]">
          <div
            className={`lg:basis-[50%] text-center ${
              locale == "en" ? "lg:text-left" : "lg:text-right"
            }`}
          >
            <div
              className="my-4 lg:w-[90%] lg:mx-auto"
              style={{
                fontFamily: locale === "en" ? "sofia pro" : "GE SS Two Medium",
                fontWeight: locale === "en" ? "bolder" : "",
              }}
            >
              <p className="text-[22px]">{t("now_redeem_more_of_your")}</p>
              <div className="flex justify-center items-baseline gap-5 lg:justify-start">
                <img
                  src="/assets/images/package/ladning/tims.png"
                  className="inline-block"
                  width={80}
                />
                <p className={` text-[#C00020] text-[46px]`}>
                  {t("favorites")}
                </p>
              </div>
            </div>
            <div
              className={`${
                locale == "en" ? "text-left" : "text-right"
              } w-[90%] mx-auto sm:text-center ${
                locale == "en" ? "lg:text-left" : "lg:text-right"
              }`}
            >
              <div
                style={{
                  fontFamily:
                    locale === "en" ? "sofia pro" : "GE SS Two Medium",
                }}
              >
                <p>
                  {t("score_free_faves_faster_with_the_all_new_tims_rewards") +
                    " " +
                    t("now_you_can_earn_points_for_every_transaction_you_make")}
                </p>
              </div>
              <p
                className={`text-center my-3 lg:my-0 text-[20px] ${
                  locale == "en" ? "lg:text-left" : "lg:text-right"
                } `}
                style={{
                  fontFamily: locale === "en" ? "sofia pro" : "GE SS Two Bold",
                  fontWeight: locale === "en" ? "bolder" : "",
                }}
              >
                {t("thats_right_more_points") + " " + t("faster")}
              </p>
            </div>
            <div className="lg:flex md:justify-center lg:items-center lg:my-5 lg:justify-start lg:w-[90%] lg:mx-auto  lg:gap-5">
              <div
                style={{
                  fontFamily: locale === "en" ? "sofia pro" : "GE SS Two Bold",
                  fontWeight: locale === "en" ? "bolder" : "",
                }}
                className="text-[20px] md:text-[16px]"
              >
                <p>{t("download_now")}</p>
              </div>
              <div>
                <Link href="https://apps.apple.com/us/app/tim-hortons/id1143883086">
                  <img
                    src="/assets/images/home/download/app_store.png"
                    className="w-[50%] inline-block mx-auto lg:w-[100%] lg:h-[65px]"
                  />
                </Link>
              </div>
              <div>
                <Link href="https://play.google.com/store/apps/details?id=digital.rbi.timhortons&hl=en&gl=US">
                  <img
                    src="/assets/images/home/download/google_play.png"
                    className="w-[50%] inline-block mx-auto lg:w-[100%] lg:h-[65px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:basis-[50%] relative">
            <div className="absolute bottom-5">
              <img
                src="/assets/images/info/how_it_works/how-it-works.png"
                className="w-[616px] h-[415px]"
              />
            </div>
          </div>
        </Card>
      </article>
    </section>
  );
};

export default RedeemMore;
