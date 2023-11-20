"use client";
import { useLocale, useTranslations } from "next-intl";
import CountriesMap from "../map/CountriesMap";
import { useEffect, useState } from "react";
import Locations from "../locations/Locations";

const Countries = () => {
  const locale = useLocale();
  const t = useTranslations();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedBranches, setSelectedBranches] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState(null);
  const locations = [
    {
      country: "saudi",
      branches: [
        {
          region: t("abha"),
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
        {
          region: t("alkharj"),
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
        {
          region: t("dammam"),
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
        {
          region: t("dharan"),
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
        {
          region: t("hail"),
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
        {
          region: "Hassa",
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
        {
          region: t("jeddah"),
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
        {
          region: "Khamis Mushait",
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
        {
          region: t("khobar"),
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
        {
          region: "Madina",
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
        {
          region: t("makkah"),
          locations: [
            {
              location: "Abraj Al Bait",
              address: "Abraj Albait",
              phone: "+966 50 900 7538",
            },
            {
              location: "Abraj al Bait 1st Floor",
              address:
                "King Abdul Aziz Rd, Gate 9601, Abraj Al Bait Ajyad Street, Mecca 24247",
              phone: "+966 55 503 9313",
            },
            {
              location: "Al Awli Kinnah",
              address: "An Naseem, Makkah, KSA",
              phone: "+966 50 950 5507",
            },
            {
              location: "Drees Makkah",
              address: "Drees Makkah",
              phone: "+966 55 503 6920",
            },
            {
              location: "Makkah Gas Station DT",
              address: "4517 At Taif Rd, Makkah, KSA",
              phone: "+966 56 689 8361",
            },
            {
              location: "Naseem Makkah DT",
              address:
                "3399, Al-Naseem District, MENA7381, 7381 Fatimah Az Zahra, Mecca 24245",
              phone: "+966 56 565 2541",
            },
            {
              location: "Petromin Umra Land",
              address: "Petromin Gas Station,Al Umrah Al Jadidah, Mecca 24414",
              phone: "+966 50 900 7239",
            },
            {
              location: "Ring Road DT",
              address: "Khalidiah district, 3rd ring road, Makkah",
              phone: "+966 55 606 6516",
            },
          ],
        },
        {
          region: t("rabigh"),
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
        {
          region: t("riyadh"),
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
        {
          region: t("taif"),
          locations: [
            {
              location: "King Fahad DT",
              address: "King Fahad DT",
              phone: "+966 55 606 6125",
            },
            {
              location: "Rashid Mall",
              address:
                "7HC46HQJ+66 Al Rashid Mall, Budaiya, Abha 62581, Abha 62581",
              phone: "+966 50 900 2416",
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    let country = selectedCountry?.properties.name.split("_")[0];
    const branches = locations
      .filter((location) => location.country === country)
      .map((country) => country.branches)[0];
    setSelectedBranches(branches);
  }, [selectedCountry]);

  console.log(selectedBranches);

  return (
    <>
      <section className="bg-white py-[5rem] px-3">
        <article className="container mx-auto text-center">
          <div className="lg:flex">
            <div
              className={`flex flex-col gap-10 lg:basis-[50%] ${
                locale === "en" ? "lg:text-left" : "lg:text-right"
              }`}
            >
              <div
                className="text-[#A82730]"
                style={{
                  fontFamily:
                    locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                }}
              >
                <h1 className="text-[50px]">{t("locations")}</h1>
              </div>
              <p
                className="text-[#3B2222] text-[22px]"
                style={{
                  fontFamily:
                    locale === "en" ? "sofia pro black" : "GE SS Two Bold",
                }}
              >
                {t(
                  "today_there_are_274_tim_hortons_restaurants_operating_across_the_gcc_with_more_to_come_we_currently_have_86_locations_in_the_uae_139_locations_in_ksa_8_locations_in_oman_8_locations_in_bahrain_26_locations_in_qatar_and_7_locations_in_kuwait"
                )}
              </p>
              <div className="text-[#3B2222] text-[20px]">
                <p>
                  {t(
                    "select_from_the_countries_listed_on_the_map_to_find_the_tims_location_closest_to_you"
                  )}
                </p>
              </div>
            </div>
            <div className="lg:basis-[50%]">
              <CountriesMap
                setSelectedCountry={setSelectedCountry}
                selectedCountry={selectedCountry}
                setSelectedRegion={setSelectedRegion}
                setSelectedLocations={setSelectedLocations}
                selectedBranches={setSelectedBranches}
              />
            </div>
          </div>
        </article>
      </section>
      {selectedCountry && (
        <Locations
          selectedBranches={selectedBranches}
          selectedCountry={selectedCountry}
          selectedRegion={selectedRegion}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
          setSelectedRegion={setSelectedRegion}
        />
      )}
    </>
  );
};

export default Countries;
