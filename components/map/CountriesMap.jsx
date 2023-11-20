"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";

import countries_110m from "./countries_110m";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";

const CountriesMap = (props) => {
  const comp = useRef();
  const t = useTranslations();

  const handleCountryClick = (geo) => {
    props.setSelectedCountry(geo);
    props.setSelectedRegion(null);
    props.setSelectedLocations(null);
    props.selectedBranches(null);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".theState", {
        duration: 0.6,
        stagger: 0.3,
        ease: "back",
        y: 96,
        opacity: 0,
      });
    }, comp);

    return () => ctx.revert();
  }, [props.selectedCountry]);

  return (
    <div>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1700,
          center: [48, 24],
        }}
        fill="#512E2E"
        stroke="white"
        strokeWidth={3}
      >
        <Geographies geography={countries_110m} ref={comp}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                className="theState theCountry"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={t(geo.properties.name)}
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleCountryClick(geo)}
                style={{
                  default: {
                    fill: props.selectedCountry === geo ? "#c70f2d" : "#512E2E",
                    outline: "none",
                  },
                  hover: {
                    fill: "#c70f2d",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#c70f2d",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default CountriesMap;
