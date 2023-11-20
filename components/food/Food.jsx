"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import FoodItem from "./FoodItem";

const Food = () => {
  const [commitmentItem, setCommitmentItem] = useState("ingredients"); //[ingredients , nutrition , food]
  const locale = useLocale();
  const t = useTranslations();
  return (
    <section className="bg-[#F9F3ED]">
      <article className="container mx-auto py-5 text-center">
        <div className="text-[25px] flex flex-col gap-10 mx-5 lg:flex-row lg:items-center lg:justify-center">
          <button
            className={`${
              commitmentItem == "ingredients"
                ? "border-[#C8102E] border-solid border-b-[5px] text-[#000000]"
                : "border-none text-[#7C7976]"
            } w-[20rem] mx-auto lg:mx-0`}
            onClick={() => {
              setCommitmentItem("ingredients");
            }}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            {t("ingredients_you_can_feel_good_about")}
          </button>
          <button
            className={`${
              commitmentItem == "nutrition"
                ? "border-[#C8102E] border-solid border-b-[5px] text-[#000000]"
                : "border-none text-[#7C7976]"
            } w-[20rem] mx-auto lg:mx-0`}
            onClick={() => {
              setCommitmentItem("nutrition");
            }}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            {t("nutrition_transparency")}
          </button>
          <button
            className={`${
              commitmentItem == "food"
                ? "border-[#C8102E] border-solid border-b-[5px] text-[#000000]"
                : "border-none text-[#7C7976]"
            } w-[20rem] mx-auto lg:mx-0`}
            onClick={() => {
              setCommitmentItem("food");
            }}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            {t("food_waste")}
          </button>
        </div>
        <div className="my-10 mx-5 md:mx-[5rem]">
          <FoodItem type={commitmentItem} />
        </div>
      </article>
    </section>
  );
};

export default Food;
