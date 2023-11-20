"use client";
import { useTranslations, useLocale } from "next-intl";
import Button from "../ui/button/Button";
import Card from "../ui/card/Card";

const News = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="bg-[#F8F5EF] pb-[3rem] pt-[3rem]">
      <div className=" mx-auto px-2  md:flex gap-6 lg:justify-center">
        <Card className="md:w-[50%] lg:w-[45%] rounded-lg overflow-hidden">
          <article>
            <div className="h-[300px]">
              <video
                autoPlay
                loop
                muted
                style={{
                  width: "100%",
                  objectFit: "fill",
                  height: "100%",
                  pointerEvents: "none",
                }}
              >
                <source src="/assets/videos/news/news.mp4" type="video/mp4" />
                {t("your_browser_does_not_support_the_video_tag")}
              </video>
            </div>
            <div className="text-center rounded-b-[22px] py-3 bg-white md:flex md:flex-col xl:flex-row md:justify-between  md:h-[320px] lg:h-[320px] xl:h-[250px]">
              <div
                className={`text-[#3B2222] lg:text-left ${
                  locale === "en" ? "lg:text-left" : "lg:text-right"
                } `}
                style={{
                  fontFamily: locale == "en" ? "sofia pro" : "GE SS Two Medium",
                }}
              >
                <h3 className="font-bold text-[1.2rem] py-2 w-[90%] mx-auto md:h-[4rem] lg:h-[5rem] ">
                  {t("discover_tim_hortons_new_tasty_new_menu")}
                </h3>
                <p className="w-[90%] mx-auto">
                  {t(
                    "explore_and_indulge_in_our_flavorful_range_of_new_sandwiche_view_our_newly_crafted_menu_and_discover_yourself"
                  ) +
                    " " +
                    t("try_it_now_new_vegetarian_options_available") +
                    " " +
                    t(
                      "order_through_the_app_or_visit_us_at_your_nearest_tims _cafe_today"
                    )}
                </p>
              </div>
              <div className="lg:self-center md:mt-5">
                <Button
                  type="button"
                  name={t("order_now")}
                  className="w-[141.1px] h-[42.26px] md:m-2 text-white"
                  style={{
                    fontFamily:
                      locale == "en" ? "sofia pro" : "GE SS Two Medium",
                  }}
                />
              </div>
            </div>
          </article>
        </Card>

        <Card className="md:w-[50%] lg:w-[45%] mt-2 md:mt-0">
          <article>
            <div className="h-[300px]">
              <img
                src="./assets/images/home/news/news2.png"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="text-center rounded-b-[22px] py-3 bg-white md:flex md:flex-col xl:flex-row md:justify-between  md:h-[320px] lg:h-[320px] xl:h-[250px]">
              <div
                className={`text-[#3B2222] lg:text-left ${
                  locale === "en" ? "lg:text-left" : "lg:text-right"
                }`}
                style={{
                  fontFamily: locale == "en" ? "sofia pro" : "GE SS Two Medium",
                }}
              >
                <h3 className="font-bold text-[1.2rem] py-2 w-[90%] mx-auto md:h-[4rem] lg:h-[5rem] ">
                  {t("new_tims_coolers_are_here")}
                </h3>
                <p className="w-[90%] mx-auto">
                  {t(
                    "say_hello_to_our_new_flavors_of_tims_coolers_lavender_and_blue_lagoon_in_addition_to_passion_fruit_strawberry_and_peach"
                  ) +
                    " " +
                    t(
                      "cool_down_in_style_with_these_delicious_and_refreshing_drinks"
                    )}
                </p>
              </div>
              <div className="lg:self-center md:mt-5">
                <Button
                  type="button"
                  name={t("order_now")}
                  className="w-[141.1px] h-[42.26px] md:m-2 text-white"
                  style={{
                    fontFamily:
                      locale == "en" ? "sofia pro" : "GE SS Two Medium",
                  }}
                />
              </div>
            </div>
          </article>
        </Card>
      </div>
    </section>
  );
};

export default News;
