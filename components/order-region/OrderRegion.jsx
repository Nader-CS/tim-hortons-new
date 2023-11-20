"use client";
import Dropdown from "../ui/dropdown/Dropdown";
import { faTruckFast, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/button/Button";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const OrderRegion = (props) => {
  const params = useParams();
  const locale = params.locale;
  const t = useTranslations();

  return (
    <section className="bg-[#F8F5EF] py-4">
      <div className="container mx-auto text-center">
        <article
          className={`lg:flex lg:items-center lg:gap-5`}
          style={{
            fontFamily: locale === "en" ? "sofia pro" : "GE SS Two Medium",
          }}
        >
          <div className="mb-4">
            <h3>{t("please_choose_your_region")}</h3>
          </div>
          <div>
            <Dropdown
              options={props.countaries}
              isLanguage={false}
              cheverOnDownIcon={true}
              setChoice={props.setCountary}
              className="bg-[#FAF2F2] w-[100%]  top-[100%] left-[0] "
              mainButoonStyle="bg-white px-2 py-3 rounded-[2rem] w-[80%] mb-3  md:w-[400px] xl:w-[600px]"
              textAlign={`${locale == "en" ? "text-left" : "text-right"}`}
              placeholder={t("regions_available")}
            />
          </div>
          <div className="flex gap-3 justify-center lg:gap-0">
            <Button
              type="button"
              name={t("delivery")}
              className={`inline-flex justify-center items-center w-[153px] h-[52px] rounded-md gap-3 text-[#1A1818]  ${
                props.activeOption != "delivery"
                  ? "bg-opacity-50 opacity-70"
                  : null
              } ${
                locale == "en"
                  ? "lg:rounded-tr-none lg:rounded-br-none"
                  : "lg:rounded-tl-none lg:rounded-bl-none"
              }`}
              onClick={() => {
                props.setActiveOption("delivery");
              }}
            >
              <FontAwesomeIcon
                icon={faTruckFast}
                fontSize={20}
                color="#1A1818"
              />
            </Button>
            <Button
              type="button"
              name={t("pick_up")}
              className={`inline-flex justify-center items-center w-[153px] h-[52px] rounded-md gap-3 text-[#1A1818]  ${
                props.activeOption != "pick-up"
                  ? "bg-opacity-50 opacity-70"
                  : null
              } ${
                locale == "en"
                  ? "lg:rounded-tl-none lg:rounded-bl-none"
                  : "lg:rounded-tr-none lg:rounded-br-none"
              }`}
              onClick={() => {
                props.setActiveOption("pick-up");
              }}
            >
              <FontAwesomeIcon icon={faLock} fontSize={20} />
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default OrderRegion;
