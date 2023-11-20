"use client";
import { useLocale, useTranslations } from "next-intl";

const FoodItem = (props) => {
  const locale = useLocale();
  const t = useTranslations();

  const foodItems = [
    {
      type: "ingredients",
      text: t(
        "our_bagels_english_muffins_and_biscuits_are_baked_without_artificial_flavours_or_preservatives_and_we_are_committed_to_having_all_permanent_menu_items_free_of_artificial_colours_flavours_or_preservatives"
      ),
      image: "/assets/images/commitment/ingredients_image.png",
    },
    {
      type: "nutrition",
      text:
        t(
          "we_aim_to_provide_guests_with_a_variety_of_menu_options_and_the_information_they_need_to_make_educated_choices_that_fit_their_individual_lifestyles"
        ) +
        "" +
        t(
          "weare_aiming_to_continuously_improve_the_nutrient_profile_of_our_food_while_preserving_that_same_great_taste_that_our_guests_love"
        ),
      link: "www.google.com",
      linkText:
        "For more information on Tims’ nutrition, please visit our nutrition and allergens page.",
      image: "/assets/images/commitment/nutrition_image.png",
    },
    {
      type: "food",
      text: t(
        "weare_developing_plans_setting_targets_and_forging_partnerships_to_manage_our_food_waste_sustainability"
      ),
      image: "/assets/images/commitment/food_image.png",
    },
  ];
  const filteredItem = foodItems.filter(
    (foodItem) => foodItem.type === props.type
  );
  return (
    <section>
      <article>
        <div
          className={`flex flex-col gap-10 md:flex-row md:items-center md:justify-between ${
            locale === "en" ? "md:text-left" : "md:text-right"
          }`}
        >
          <div className="md:basis-[60%]">
            <p className="md:w-[70%]">{filteredItem[0].text}</p>
          </div>
          <div className="md:w-[15rem] md:basis-[40%]">
            <img src={filteredItem[0].image} className="w-full md:w-[80%]" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default FoodItem;
