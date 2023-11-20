"use client";
import { useLocale, useTranslations } from "next-intl";

const GetReward = () => {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <section
      className=" py-2 px-3"
      style={{
        fontFamily: locale === "en" ? "29LT Bukra" : "GE SS Two Medium",
      }}
    >
      <article className="container mx-auto  text-center">
        <div>
          <h1 className={`font-bold text-[1.6rem]`}>
            {t("how_to_get_rewarded")}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start lg:justify-center gap-3 ">
          <div className="my-5 sm:w-[80%] md:w-[30%]  lg:w-[18%] md:flex md:flex-col h-[350px]">
            <img
              src="/assets/images/info/get_rewarded/active_member.png"
              className="inline-block h-[50%]"
            />
            <h1
              className={`my-3 font-bold text-[1.2rem] h-[20%]`}
              style={{ minHeight: "66px" }}
            >
              {t("active_member_rewards")}
            </h1>

            <div>
              <div className="rounded p-3 bg-[#E5E5E5] h-[5.5rem] flex justify-center items-center w-[100%]">
                <p style={{ width: "300px" }} className={`text-[14px]`}>
                  {t("active_members_earn_25_points_every_week")}
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 sm:w-[80%] md:w-[30%]  lg:w-[18%] md:flex md:flex-col h-[350px]">
            <img
              src="/assets/images/info/get_rewarded/profile.png"
              className="inline-block h-[50%]"
            />
            <h1
              className={`my-3 font-bold  text-[1.2rem] h-[20%]`}
              style={{ minHeight: "66px" }}
            >
              {t("profile_update_rewards")}
            </h1>
            <div>
              <div className="rounded p-3 bg-[#E5E5E5] h-[5.5rem] flex justify-center items-center  w-[100%]">
                <p style={{ width: "300px" }} className={`text-[14px]`}>
                  {t("complete_and_collect_points")}
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 sm:w-[80%] md:w-[30%]  lg:w-[18%] md:flex md:flex-col h-[350px]">
            <img
              src="/assets/images/info/get_rewarded/play_win.png"
              className="inline-block h-[50%]"
            />
            <h1
              className={`my-3 font-bold  text-[1.2rem] h-[20%]`}
              style={{ minHeight: "66px" }}
            >
              {t("play_win")}
            </h1>
            <div>
              <div className="rounded p-3 bg-[#E5E5E5] h-[5.5rem] flex justify-center items-center ">
                <p
                  style={{ width: "300px" }}
                  className={`sm:w-auto  text-[14px]`}
                >
                  {t("play_games_and_earn_rewards_instantly")}
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 sm:w-[80%] md:w-[30%]  lg:w-[18%] md:flex md:flex-col h-[350px]">
            <img
              src="/assets/images/info/get_rewarded/answer_win.png"
              className="inline-block h-[50%]"
            />
            <h1
              className={`my-3 font-bold  text-[1.2rem]`}
              style={{ minHeight: "66px" }}
            >
              {t("profile")}
            </h1>
            <div className="rounded bg-[#E5E5E5] h-[5.5rem] flex justify-center items-center ">
              <div className=" w-[100%] p-3">
                <p className={`w-[300px] sm:w-auto  text-[14px]`}>
                  {t("give_us_a_sense_of_who_you_are_and_earn_200_Points")}
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 sm:w-[80%] md:w-[30%]  lg:w-[18%] md:flex md:flex-col h-[350px]">
            <img
              src="/assets/images/info/get_rewarded/refer_win.png"
              className="inline-block h-[50%]"
            />
            <h1
              className={`my-3 font-bold  text-[1.2rem] `}
              style={{ minHeight: "66px" }}
            >
              {t("profile_update_rewards")}
            </h1>
            <div className="rounded bg-[#E5E5E5] h-[5.5rem] flex justify-center items-center ">
              <div className=" w-[100%] p-3">
                <p className={`w-[300px] sm:w-auto  text-[14px]`}>
                  {t("rewards_for_you_and_your_friends")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default GetReward;
