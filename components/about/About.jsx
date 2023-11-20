"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
const About = () => {
  const params = useParams();
  const locale = params.locale;
  const t = useTranslations();
  return (
    <section>
      <article className="lg:flex">
        <div className=" bg-[#F8F5EF]  lg:w-[40%] lg:flex lg:flex-col lg:justify-center lg:items-center py-5 xl:py-0">
          <h1
            className={`text-[#3B2222] text-[22px] text-center mb-5 lg:w-[65%] ${
              locale === "en" ? "lg:text-left" : "lg:text-right"
            }`}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            {t("about-us")}
          </h1>
          <p className="mx-3 lg:w-[65%] lg:mx-0">
            {t(
              "as_part_of_the_global_expansion_plan_tim_hortons_opened_its_first_Cafe_Baked_shop_in_dubai_in_september_2011_marking_the_first_international_step_for_this_loved_canadian_brand"
            ) +
              "" +
              t(
                "the_concept_found_immediate_success_quickly_expanding_its_network_across_the_gcc"
              ) +
              "" +
              t(
                "in_the_gcc_tim_hortons_i_proud_to_partner_operating_through_a_master_franchise_agreement_with_The_apparel_group_a_leading_fB_player_head_quartered_in_jebel_ali_dubai"
              )}
          </p>
        </div>
        <div className="hidden lg:block lg:w-[60%]">
          <Image
            src="/assets/images/about/about.png"
            width={800}
            height={500}
            className="h-[100%] w-[100%]"
            style={{ objectFit: "fill" }}
          />
        </div>
      </article>
    </section>
  );
};

export default About;
