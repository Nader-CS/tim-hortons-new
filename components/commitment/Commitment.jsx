"use client";
import { useLocale, useTranslations } from "next-intl";

const Commitment = () => {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <section className="bg-[#3B2222] py-[5rem] px-3">
      <article className="container mx-auto my-10 text-center flex flex-col gap-10 lg:flex-row ">
        <div
          className={`text-[63px] relative lg:basis-[50%] ${
            locale === "en" ? "lg:text-left" : "lg:text-right"
          } `}
          style={{
            fontFamily: locale === "en" ? "sofia pro black" : "GE SS Two Bold",
          }}
        >
          <div
            className={`absolute ${
              locale === "en"
                ? "left-[50%] translate-x-[-50%] translate-y-[-50%] lg:left-0 lg:translate-x-0"
                : "right-[50%] translate-x-[50%] translate-y-[-50%] lg:right-0 lg:translate-x-0 "
            } top-[-30px] `}
          >
            <img
              src="/assets/images/commitment/commitment_logo.png"
              width={80}
            />
          </div>
          <div className="text-[#C8102E]">
            <p>{t("our")}</p>
            <p>{t("commitment_to")}</p>
          </div>
          <div className="text-[#F8F5EF]">
            <p>{t("food_and_beverage_quality")}</p>
          </div>
        </div>
        <div
          className={`text-[#F8F5EF] flex flex-col gap-10 lg:basis-[50%] ${
            locale === "en" ? "lg:text-left" : "lg:text-right"
          }  `}
        >
          <div className="text-[35px]">
            <p>
              {t(
                "committed_to_using_quality_ingredients_with_no_artificial_colours_flavours_or_preservatives"
              )}
            </p>
          </div>
          <div className="text-[20px]">
            <p>
              {t("at_tims_always_fresh_isnt_just_a_saying_its_a_way_of_life") +
                "" +
                t(
                  "from_our_commitment_to_using_simple_ingredients_to_brewing_100%_premium_arabica_coffee_every_20_minutes_weare_serving_our_guests_high_quality_great_tasting_food_and_beverages_each_and_every_day"
                )}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Commitment;
