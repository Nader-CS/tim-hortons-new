"use client";

import { useLocale, useTranslations } from "next-intl";

const GetApp = () => {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <section
      className="bg-white py-[5rem] px-3"
      style={{
        background:
          "transparent url('/assets/images/info/get_app/get_app_background.png') 0% 0% no-repeat padding-box",
      }}
    >
      <article className="container mx-auto">
        <div className={`lg:basis-[50%] text-center  text-white text-[23px]`}>
          <div>
            <p
              style={{
                fontFamily:
                  locale === "en" ? "sofia pro black" : "GE SS Two Bold",
              }}
            >
              {t("get_the_tims_app")}
            </p>
            <p>{t("to_earn_redeem_and_enjoy_your_favorite_tims_treats")}</p>
          </div>
        </div>
        <div className="md:flex md:justify-center text-center">
          <div>
            <img
              src="/assets/images/home/download/app_store.png"
              className="w-[50%] inline-block mx-auto md:w-[100%] md:h-[65px]"
            />
          </div>
          <div>
            <img
              src="/assets/images/home/download/google_play.png"
              className="w-[50%] inline-block mx-auto md:w-[100%] md:h-[65px]"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default GetApp;
