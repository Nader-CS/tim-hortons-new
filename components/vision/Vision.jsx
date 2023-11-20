"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Vision = () => {
  const params = useParams();
  const locale = params.locale;
  const t = useTranslations();

  return (
    <section className={`py-[3rem]`}>
      <article className="lg:flex lg:gap-[5rem]">
        <div className=" py-5 md:py-0 lg:w-[60%] lg:flex lg:flex-col lg:justify-center lg:items-center text-[15px]">
          <h1
            className={`text-[#3B2222] text-[18px]  text-center mb-5 lg:w-[65%] ${
              locale === "en" ? "lg:text-left" : "lg:text-right"
            }`}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            {t("our_vision")}
          </h1>
          <p className="mx-3 lg:w-[66%] lg:mx-0 leading-5">
            {t(
              "tim_hortons_strongly_believes_in_delivering_superior_quality_products_and_services_for_its_customers_and_communities_through_leadership_innovation_and_partnerships"
            )}
          </p>
          <p p className="mx-3 lg:w-[66%] lg:mx-0 my-3 lg:leading-5">
            {t(
              "the_restaurant_chain_is_known_for_its_freshly_brewed_coffee_and_baked_food_its_tagline"
            )}
          </p>
          <p p className="mx-3 lg:w-[66%] lg:mx-0 lg:leading-5">
            {t(
              "always_fresh_always_delicious_rightly_explains_the_brand_policy"
            )}
          </p>
        </div>
        <div className="hidden lg:block lg:w-[60%] lg:h-[312px] ">
          <Image
            src="/assets/images/about/vision.png"
            width={800}
            height={500}
            className={`h-[312px] w-[100%] ${
              locale == "en" ? "rounded-r-lg" : "rounded-l-lg"
            }`}
            style={{ objectFit: "fill" }}
          />
        </div>
      </article>
    </section>
  );
};

export default Vision;
