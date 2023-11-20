"use client";
import Aggregator from "@/components/aggregator/Aggregator";
import OrderRegion from "@/components/order-region/OrderRegion";
import PickUp from "@/components/pick-up/PickUp";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Order = () => {
  const [countary, setCountary] = useState("");
  const t = useTranslations();
  const [isValidCountary, setIsValidCountary] = useState(false);
  const [activeOption, setActiveOption] = useState("delivery");
  const countaries = [
    t("united_arab_emirates"),
    t("saudi_arabia"),
    t("bahrain"),
    t("qatar"),
    t("oman"),
    t("kuwait"),
  ];

  useEffect(() => {
    if (!isValidCountary && countaries.includes(countary)) {
      setIsValidCountary(true);
    }
  }, [countary]);

  return (
    <>
      <OrderRegion
        countary={countary}
        setCountary={setCountary}
        countaries={countaries}
        setIsValidCountary={setIsValidCountary}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      {activeOption === "delivery" ? (
        <Aggregator isValidCountary={isValidCountary} countary={countary} />
      ) : (
        <PickUp />
      )}
    </>
  );
};

export default Order;
