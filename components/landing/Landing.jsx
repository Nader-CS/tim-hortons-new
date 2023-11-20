"use client";
import Link from "next/link";
import Button from "../ui/button/Button";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

const Landing = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [vidIndex, setVidIndex] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (vidIndex === 0 && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex]);

  return (
    <section>
      <div className=" relative">
        <div
          className=" w-[300px] h-[280px] absolute hidden md:block right-0 bottom-0 m-5 rounded-2xl"
          style={{ background: "rgba(210, 210, 210, 0.85)" }}
        >
          <div className="relative h-[100%]">
            <div className="text-center">
              <img
                className="inline"
                src="/assets/images/home/landing/tim_hortons.png"
                height={20}
                alt="logo"
              />
            </div>
            <div
              className="m-2 text-[13px] w-[80%]"
              style={{
                fontFamily: locale === "en" ? "sofia pro" : "GE SS Two Medium",
              }}
            >
              <p>
                {t("earn_points_and_redeem_rewards") +
                  " " +
                  t("order_ahead_and_pay") +
                  " " +
                  t("get_it_delivered_or_skip_the_line_inside")}
              </p>
            </div>
            <div>
              <Link href="info">
                <Button
                  type="button"
                  name={t("learn_more")}
                  className="sm:block h-[50px] w-[145px] text-white mx-[0.5rem]"
                  style={{
                    fontFamily:
                      locale === "en" ? "sofia pro" : "GE SS Two Medium",
                  }}
                />
              </Link>
            </div>
            <div
              className={`absolute m-2 ${
                locale === "en" ? "right-0 bottom-1 " : "left-0 bottom-3"
              }  `}
            >
              <img
                className="inline"
                src="/assets/images/home/landing/tim_hortons2.png"
                width={100}
                height={100}
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div>
          <video
            autoPlay
            muted
            src="/assets/videos/landing/landing.mp4"
            onEnded={() => setVidIndex((idx) => idx + 1)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              pointerEvents: "none",
              display: vidIndex === 1 ? "none" : "block",
            }}
          />
          <video
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              pointerEvents: "none",
              display: vidIndex === 0 ? "none" : "block",
            }}
            src="/assets/videos/landing/landing2.mp4"
            muted
            loop
            ref={ref}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
