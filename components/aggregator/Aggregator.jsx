import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const Aggregator = (props) => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section>
      <article className="container mx-auto">
        {!props.isValidCountary && (
          <div className="text-center h-[80vh] flex flex-col justify-center items-center gap-10">
            <div>
              <Image
                src="/assets/images/order/aggregator/bag.svg"
                width={100}
                height={100}
                alt="bag"
                className="inline-block"
              />
            </div>
            <div>
              <h1
                className={` text-[#3B2222] text-[30px]`}
                style={{
                  fontFamily:
                    locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                }}
              >
                {t("choose_your_region")}
              </h1>
              <p
                className={` w-[70%] sm:w-[60%] mx-auto text-[20px] `}
                style={{
                  fontFamily:
                    locale === "en" ? "sofia pro" : "GE SS Two Medium",
                }}
              >
                {t(
                  "let_us_know_where_you_are_so_we_can_recommend_our_aggregators_for_you"
                )}
              </p>
            </div>
          </div>
        )}
        {props.isValidCountary && (
          <div className="min-h-[80vh] flex flex-col items-center md:items-start pt-[5rem]">
            <div className="flex">
              <div>
                <Image
                  src="/assets/images/order/aggregator/aggregator_icon.png"
                  width="60"
                  height="50"
                />
              </div>
              <div>
                <h1
                  className={` text-[22px]`}
                  style={{
                    fontFamily:
                      locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                  }}
                >
                  {t("tim_hortons_in")} {props.countary}
                </h1>
                <p
                  style={{
                    fontFamily:
                      locale === "en" ? "sofia pro" : "GE SS Two Medium",
                  }}
                >
                  {t("you_can_make_your_order_with_the_following_aggregators")}
                </p>
              </div>
            </div>
            <div className="pt-7 md:flex md:flex-wrap gap-5">
              {/* first column */}
              <div className="flex flex-col items-center gap-5 py-5">
                <div>
                  <Image
                    src="/assets/images/order/aggregator/hungerstation.png"
                    width="210"
                    height="186"
                  />
                </div>
                <div>
                  <h1
                    className={`text-[19px]`}
                    style={{
                      fontFamily:
                        locale === "en" ? "sofia pro" : "GE SS Two Medium",
                    }}
                  >
                    Hungerstation
                  </h1>
                </div>
              </div>
              {/* end of first column */}
              {/* second column */}
              <div className="flex flex-col items-center gap-5 py-5">
                <div className=" rounded-lg">
                  <Image
                    src="/assets/images/order/aggregator/jahez.png"
                    width="210"
                    height="186"
                  />
                </div>
                <div>
                  <h1
                    className={`text-[19px]`}
                    style={{
                      fontFamily:
                        locale === "en" ? "sofia pro" : "GE SS Two Medium",
                    }}
                  >
                    Jahez
                  </h1>
                </div>
              </div>
              {/* end of second column */}
              {/* third column */}
              <div className="flex flex-col items-center gap-5 py-5">
                <div className=" rounded-lg">
                  <Image
                    src="/assets/images/order/aggregator/marsool.png"
                    width="210"
                    height="186"
                  />
                </div>
                <div>
                  <h1
                    className={` text-[19px]`}
                    style={{
                      fontFamily:
                        locale === "en" ? "sofia pro" : "GE SS Two Medium",
                    }}
                  >
                    Marsool
                  </h1>
                </div>
              </div>
              {/* end of third column */}
              {/* fourth column */}
              <div className="flex flex-col items-center gap-5 py-5">
                <div className=" rounded-lg">
                  <Image
                    src="/assets/images/order/aggregator/careem.png"
                    width="210"
                    height="186"
                  />
                </div>
                <div>
                  <h1
                    className={`text-[19px]`}
                    style={{
                      fontFamily:
                        locale === "en" ? "sofia pro" : "GE SS Two Medium",
                    }}
                  >
                    Careem
                  </h1>
                </div>
              </div>
              {/* end of fourth column */}
              {/* fifth column */}
              <div className="flex flex-col items-center gap-5 py-5">
                <div className="rounded-lg">
                  <Image
                    src="/assets/images/order/aggregator/to_you.png"
                    width="210"
                    height="186"
                  />
                </div>
                <div>
                  <h1
                    className={`text-[19px]`}
                    style={{
                      fontFamily:
                        locale === "en" ? "sofia pro" : "GE SS Two Medium",
                    }}
                  >
                    To You
                  </h1>
                </div>
              </div>
              {/* end of fifth column */}
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default Aggregator;
