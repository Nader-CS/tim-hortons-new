"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
const PickUp = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="py-7">
      <article className="text-center md:flex md:flex-wrap md:items-center container mx-auto">
        <div className="md:w-[48%]">
          <h3
            className={`text-[25px]`}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            {t("want_it_picked")}
          </h3>
          <p
            className={`text-[#C8102E] text-[30px]`}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            {t("download_the_app")}
          </p>
          <p
            className={`text-[18px] w-[65%] md:w-[80%] lg:w-[65%] mx-auto`}
            style={{
              fontFamily: locale === "en" ? "sofia pro" : "GE SS Two Medium",
            }}
          >
            {t("earn_points_and_redeem_rewards") +
              "" +
              t("order_ahead_and_pay") +
              "" +
              t("and_pick_it_on_your_way")}
          </p>
          <div className="md:flex md:justify-center">
            <div>
              <Link href="https://apps.apple.com/us/app/tim-hortons/id1143883086">
                <Image
                  src="/assets/images/home/download/app_store.png"
                  className="w-[10rem] md:w-[15rem] inline-block mx-auto "
                  width="200"
                  height="300"
                />
              </Link>
            </div>
            <div>
              <Link href="https://play.google.com/store/apps/details?id=digital.rbi.timhortons&hl=en&gl=US">
                <Image
                  src="/assets/images/home/download/google_play.png"
                  className="w-[10rem] md:w-[15rem] inline-block mx-auto "
                  width="200"
                  height="300"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-[48%] md:mb-[4rem]">
          <div className="w-[100%]">
            <Image
              src="/assets/images/order/aggregator/pickup_download.png"
              width="800"
              height="500"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default PickUp;
