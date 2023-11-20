"use client";

import { useLocale, useTranslations } from "next-intl";

const Locations = ({
  selectedBranches,
  selectedCountry,
  setSelectedRegion,
  setSelectedLocations,
  selectedLocations,
  selectedRegion,
}) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="bg-[#3b2222] py-[5rem] px-3 text-[#F8F5EF]">
      <article className="container mx-auto text-center text-[28px]">
        <div>
          <h1>{t(selectedCountry.properties.name)}</h1>
        </div>
        <div className="text-[#F8F5EF] border-[#F8F5EF] border-b-2 md:flex md:flex-wrap md:justify-center md:gap-5">
          {selectedBranches?.map((branch) => {
            return (
              <div>
                <button
                  className={`text-[15px] ${
                    branch.region == selectedRegion
                      ? "text-[#A82730] text-[20px] border-[#A82730] border-b-2 "
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedRegion(branch.region);
                    setSelectedLocations(branch.locations);
                  }}
                >
                  {branch.region}
                </button>
              </div>
            );
          })}
        </div>
        <div className="my-4 md:flex md:flex-wrap">
          {selectedLocations?.map((location) => {
            return (
              <div
                class={`flex justify-center my-4 md:justify-start md:basis-[30%] lg:basis-[20%] ${
                  locale === "en" ? "text-left" : "text-right"
                } `}
              >
                <div
                  class={`border-r-2 border-[#F8F5EF] h-[6rem] md:h-[10rem] basis-[5%] ${
                    locale === "en" ? "mr-4" : "ml-4"
                  }`}
                ></div>
                <div className="basis-[70%] flex flex-col justify-around">
                  <div>
                    <h1 className="text-[20px]">{location.location}</h1>
                    <p className="text-[12px] mt-1">{location.address}</p>
                  </div>
                  <p className="text-[12px]">{location.phone}</p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Locations;
