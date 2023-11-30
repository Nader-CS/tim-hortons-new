"use client";
import { useLocale, useTranslations } from "next-intl";
import Card from "../ui/card/Card";
import Link from "next/link";

const Download = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="bg-white py-[10rem] px-3 text-[#F8F5EF]">
      <article className="container mx-auto text-center">
        <Card className="bg-[#3B2222] p-3 md:flex md:flex-wrap lg:py-[3rem]">
          <div className="hidden md:block md:basis-[50%] relative">
            <div className="absolute left-[20%] top-[-9rem] md:top-[-10rem] lg:top-[-7rem] xl:top-[-11rem] w-[70%] lg:w-[50%] 2xl:w-[40%]">
              <img
                src="/assets/images/info/how_it_works/how-it-works2.png"
                className="w-full"
              />
            </div>
          </div>
          <div className="md:basis-[50%]">
            <div
              className="my-4"
              style={{
                fontFamily: locale == "en" ? "29LT Bukra" : "GE SS Two Medium",
              }}
            >
              <p
                className={`text-xl lg:text-4xl`}
                style={{ fontWeight: locale == "en" ? "bold" : "" }}
              >
                {t("with_every_transaction")}
              </p>
              <p
                className={` text-2xl lg:text-4xl `}
                style={{ fontWeight: locale == "en" ? "bold" : "" }}
              >
                {t("you_earn_tims_points")}
              </p>
            </div>
            <div className="text-center">
              <p className={`text-sm lg:leading-8`}>
                {t(
                  "get_the_tims_app_to_earn_redeem_and_enjoy_your_favorite_tims_treats"
                )}
              </p>
            </div>
            <div className="md:flex md:justify-center">
              <div>
                <Link href="https://apps.apple.com/us/app/tim-hortons/id1143883086">
                  <img
                    src="/assets/images/home/download/app_store.png"
                    className="w-[50%] inline-block mx-auto md:w-[100%] md:h-[65px]"
                  />
                </Link>
              </div>
              <div>
                <Link href="https://play.google.com/store/apps/details?id=digital.rbi.timhortons&hl=en&gl=US">
                  <img
                    src="/assets/images/home/download/google_play.png"
                    className="w-[50%] inline-block mx-auto md:w-[100%] md:h-[65px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </article>
    </section>
  );
};

export default Download;
