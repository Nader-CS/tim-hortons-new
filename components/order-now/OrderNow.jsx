"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/button/Button";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useLocale, useTranslations } from "next-intl";

const OrderNow = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="bg-[#F8F5EF] w-full fixed bottom-0 z-10">
      <div className="  flex justify-center lg:justify-start container mx-auto gap-[30px] ">
        <div className="hidden lg:flex items-center gap-[30px]">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="block w-24 text-[1.5rem]"
          />
          <span
            style={{
              fontFamily: locale == "en" ? "sofia pro" : "GE SS Two Medium",
            }}
          >
            {t(
              "start_ordering_now_and_get_your_fresh_delicious_orders_in_30_mins"
            )}
          </span>
        </div>
        <div className="lg:grow lg:flex lg:justify-end lg:px-[5rem]">
          <Button
            type="button"
            name={t("order_now")}
            className="h-[53px] lg:h-[40px] mb-[1rem] text-white"
            style={{
              fontFamily: locale == "en" ? "sofia pro" : "GE SS Two Medium",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default OrderNow;
