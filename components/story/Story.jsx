"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const Story = () => {
  const params = useParams();
  const locale = params.locale;
  const t = useTranslations();

  return (
    <section className={`py-[3rem]`}>
      <article className="lg:flex lg:gap-[5rem]">
        <div className="hidden lg:block lg:w-[60%] lg:h-[312px]">
          <Image
            src="/assets/images/about/story.png"
            width={800}
            height={500}
            className={`h-[312px] w-[100%] ${
              locale == "en" ? "rounded-r-lg" : "rounded-l-lg"
            }`}
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className=" py-5 md:py-0 lg:w-[60%] lg:flex lg:flex-col lg:justify-center text-[15px]">
          <h1
            className={`text-[#3B2222] text-[18px] text-center mb-5 lg:w-[65%] ${
              locale === "en" ? "lg:text-left" : "lg:text-right"
            }`}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            {t("our_story")}
          </h1>
          <p className="mx-3 lg:w-[71%] lg:mx-0 leading-5">
            {t(
              "over_the_years_tim_hortons_has_captured_the_hearts_and_taste_buds_of_not_only_canadians_but_people_all_over_the_world_with_classics_like_our_original_blend_coffee_and_the_signature_iced_capp_along_with_a_variety_of_inspired_donuts_including_our_ever_popular_timbits"
            )}
          </p>
          <p p className="mx-3 lg:w-[71%] lg:mx-0 my-3 lg:leading-5">
            {t(
              "in_2011_the_iconic_canadian_tim_hortons_brand_made_its_way_to_the_middle_east_opening_the_first_location_in_dubai"
            )}
          </p>
          <p p className="mx-3 lg:w-[70%] lg:mx-0 lg:leading-5">
            {t(
              "guests_can_now_enjoy_our_premium_coffees_delicious_baked_goods_made_to_order_sandwiches_and_wraps_and_many_other_beverages_and_food_products_at_locations_throughout_the_united_arab_emirates_saudi_arabia_qatar_oman_kuwait_and_bahrain"
            ) +
              "" +
              t("we_canot_wait_to_meet_you")}
          </p>
        </div>
      </article>
    </section>
  );
};

export default Story;
