"use client";
import Image from "next/image";
import Input from "../ui/input/Input";
import TextArea from "../ui/text-area/TextArea";
import Button from "../ui/button/Button";
import { useLocale, useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="py-6">
      <article className="container mx-auto text-center">
        <div className="mb-5">
          <h1
            className={`text-[#3B2222] text-[20px]`}
            style={{
              fontFamily:
                locale === "en" ? "sofia pro black" : "GE SS Two Bold",
            }}
          >
            {t("contact_us_today")}
          </h1>
          <p
            className={` text-[15px]`}
            style={{
              fontFamily: locale === "en" ? "sofia pro" : "GE SS Two Medium",
            }}
          >
            {t("we_love_to_hear_from_you_our_valued_customer")}
          </p>
        </div>
        <div className="lg:flex lg:flex-wrap gap-7">
          <div className="lg:w-[50%]">
            <form>
              <div className="lg:flex lg:gap-3">
                <div className="lg:w-[50%]">
                  <Input
                    name={t("first_name")}
                    className={`h-[59px] pt-[25px] pb-[22px] px-[27px] bg-[#F8F5EF] rounded-[13px] placeholder-[#000000] outline-none  lg:w-[100%] w-[80%]  inline-block mb-5`}
                    required={true}
                    type="text"
                    style={{
                      fontFamily:
                        locale === "en" ? "sofia pro" : "GE SS Two Medium",
                    }}
                  />
                </div>
                <div className="lg:w-[50%]">
                  <Input
                    name={t("last_name")}
                    className={`h-[59px] pt-[25px] pb-[22px] px-[27px] bg-[#F8F5EF] rounded-[13px] placeholder-[#000000] outline-none lg:w-[100%] w-[80%] inline-block mb-5`}
                    type="text"
                    style={{
                      fontFamily:
                        locale === "en" ? "sofia pro" : "GE SS Two Medium",
                    }}
                  />
                </div>
              </div>
              <Input
                name={t("email")}
                className={`h-[59px] pt-[25px] pb-[22px] px-[27px] bg-[#F8F5EF] rounded-[13px] placeholder-[#000000] outline-none lg:w-[100%] w-[80%]  inline-block mb-5`}
                required={true}
                type="email"
                style={{
                  fontFamily:
                    locale === "en" ? "sofia pro" : "GE SS Two Medium",
                }}
              />
              <Input
                name={t("subject")}
                className={`h-[59px] pt-[25px] pb-[22px] px-[27px] bg-[#F8F5EF] rounded-[13px] placeholder-[#000000] outline-none lg:w-[100%] w-[80%]  inline-block mb-5`}
                type="text"
                style={{
                  fontFamily:
                    locale === "en" ? "sofia pro" : "GE SS Two Medium",
                }}
              />
              <TextArea
                placeholder={t("message")}
                required={true}
                cols={10}
                rows={3}
                className={` pt-[25px] pb-[22px] px-[27px]  bg-[#F8F5EF] rounded-[13px] placeholder-[#000000] outline-none lg:w-[100%] w-[80%]  inline-block mb-5`}
                style={{
                  fontFamily:
                    locale === "en" ? "sofia pro" : "GE SS Two Medium",
                }}
              />

              <Button
                type="submit"
                name={t("submit")}
                className={` text-[white] w-[300px] h-[52px] lg:w-[100%]`}
                style={{
                  fontFamily:
                    locale === "en" ? "sofia pro" : "GE SS Two Medium",
                }}
              />
            </form>
          </div>
          <div className="mx-3 md:mx-0 hidden lg:block lg:w-[45%]  ">
            <Image
              src="/assets/images/contact-us/contact-us.png"
              width="650"
              height="500"
              className="lg:h-[100%]"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
