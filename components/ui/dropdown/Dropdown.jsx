"use client";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

import { useRouter } from "next-intl/client";
import { usePathname } from "next-intl/client";
import classes from "./Dropdown.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown(props) {
  const [content, setContent] = useState(() => {
    if (props.placeholder) {
      return props.placeholder;
    } else {
      return props.name;
    }
  });
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpenned, setIsMenuOpenned] = useState(false);

  const handleLanguageChange = (language) => {
    router.push(pathname, { locale: language.toLowerCase() });
  };

  const handleMenuOpenned = () => {
    setIsMenuOpenned(!isMenuOpenned);
  };

  // Add a useEffect hook to listen for clicks outside the menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMenuOpenned && !e.target.closest(".dropdown-menu")) {
        setIsMenuOpenned(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpenned]);

  return (
    <Menu
      as="div"
      className={`relative inline-block text-left dropdown-menu ${props.mainButoonStyle} `}
    >
      <div className={`${classes["sofia-font"]}`}>
        <Menu.Button
          className="inline-flex w-[100%] justify-between gap-x-1.5 rounded-md px-3 py-2 text-sm  text-gray-900 hover:bg-gray-50 "
          style={{ fontFamily: "sofia pro" }}
          onClick={handleMenuOpenned}
        >
          <span
            className={`${content == props.placeholder ? "text-[#777]" : null}`}
          >
            {content}
          </span>
          {props.cheverOnDownIcon &&
            (isMenuOpenned ? (
              <ChevronUpIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            ) : (
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            ))}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute right-0 z-50 mt-2  rounded-md bg-[#A82730] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${props.className}`}
        >
          <div className={`py-1 ${classes["sofia-font"]}`}>
            {props.isLanguage
              ? props.options.map((option) => (
                  <Menu.Item key={option}>
                    {({ active }) => (
                      <button
                        className={`${classNames(
                          active ? null : "text-white",
                          "block px-4 py-2 text-sm"
                        )}`}
                        onClick={() => {
                          handleLanguageChange(option);
                        }}
                      >
                        {option}
                      </button>
                    )}
                  </Menu.Item>
                ))
              : props.options.map((option) => (
                  <Menu.Item key={option}>
                    {({ active }) => (
                      <button
                        className={`${classNames(
                          active ? null : "text-[#3B2222]",
                          "block px-4 py-2 text-sm"
                        )} w-[100%] ${props.textAlign}`}
                        onClick={() => {
                          setContent(option);
                          if (props.setChoice) {
                            props.setChoice(option);
                          }
                          setIsMenuOpenned(false);
                        }}
                      >
                        {option}
                      </button>
                    )}
                  </Menu.Item>
                ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
