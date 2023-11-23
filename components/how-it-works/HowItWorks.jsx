"use client";
import { useTranslations, useLocale } from "next-intl";
import Card from "../ui/card/Card";

const HowItWorks = () => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <section
      className={`bg-[#3B2222] py-5`}
      style={{ fontFamily: locale == "en" ? "29LT Bukra" : "GE SS Two Medium" }}
    >
      <article className="container mx-auto">
        <div className="text-center mb-10" id="how_it_works">
          <h1 className="text-[#F8F5EF] text-[2rem] font-bold pt-3">
            {t("how_it_works")}
          </h1>
        </div>
        <div className="sm:flex flex-wrap">
          {/* item */}
          <div className="my-5 sm:w-[50%] lg:w-[25%]">
            <div className="header mb-10">
              <Card className="bg-[#F8F5EF] w-[70%] mx-auto h-[3rem] flex justify-between items-center px-6">
                <div>
                  <img src="/assets/images/info/how_it_works/earn_points.png" />
                </div>
                <p className="text-[#3B2222] text-[1.5rem]">1</p>
              </Card>
            </div>
            <div className="content text-center w-[90%] mx-auto text-[#F8F5EF]">
              <h1 className=" text-[14px] font-bold mb-5">
                {t("earn_points_save_money")}
              </h1>
              <p>
                {t("earn_points_with_every_transaction") +
                  " " +
                  t(
                    "become_a_member_and_earn_tims_points_by_placing_an_order_or_more"
                  )}
              </p>
            </div>
          </div>
          {/* end of item */}
          {/* item */}
          <div className="my-5 sm:w-[50%] lg:w-[25%]">
            <div className="header mb-10">
              <Card className="bg-[#F8F5EF] w-[70%] mx-auto h-[3rem] flex justify-between items-center px-6">
                <div>
                  <img src="/assets/images/info/how_it_works/redeem.png" />
                </div>
                <p className="text-[#3B2222] text-[1.5rem]">2</p>
              </Card>
            </div>
            <div className="content text-center w-[90%] mx-auto text-[#F8F5EF]">
              <h1 className=" text-[14px] font-bold mb-5">
                {t("reedeem_points_when_you_order")}
              </h1>
              <p>
                {t(
                  "use_a_coupon_in_app_or_in_store_purchase_to_redeem_your_points"
                )}
              </p>
            </div>
          </div>
          {/* end of item */}
          {/* item */}
          <div className="my-5 sm:w-[50%] lg:w-[25%]">
            <div className="header mb-10">
              <Card className="bg-[#F8F5EF] w-[70%] mx-auto h-[3rem] flex justify-between items-center px-6">
                <div>
                  <img src="/assets/images/info/how_it_works/before_it_expires.png" />
                </div>
                <p className="text-[#3B2222] text-[1.5rem]">3</p>
              </Card>
            </div>
            <div className="content text-center w-[90%] mx-auto text-[#F8F5EF]">
              <h1 className=" text-[14px] font-bold mb-5">
                {t("before_it_expires_redeem_it")}
              </h1>
              <p>
                {t(
                  "points_are_valid_for_6_months_from_the_day_of_the_purchase"
                )}
              </p>
            </div>
          </div>
          {/* end of item */}
          {/* item */}
          <div className="my-5 sm:w-[50%] lg:w-[25%]">
            <div className="header mb-10">
              <Card className="bg-[#F8F5EF] w-[70%] mx-auto h-[3rem] flex justify-between items-center px-6">
                <div>
                  <img src="/assets/images/info/how_it_works/rewarding.png" />
                </div>
                <p className="text-[#3B2222] text-[1.5rem]">4</p>
              </Card>
            </div>
            <div className="content text-center w-[90%] mx-auto text-[#F8F5EF]">
              <h1 className=" text-[14px] font-bold mb-5">
                {t("rewarding_birthday_offer")}
              </h1>
              <p>{t("enjoy_a_special_treat_from_us_on_your_birthday")}</p>
            </div>
          </div>
          {/* end of item */}
        </div>
      </article>
    </section>
  );
};

export default HowItWorks;
