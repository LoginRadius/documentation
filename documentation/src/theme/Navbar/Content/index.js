import { React, useState, useRef, useEffect } from "react";
import { useThemeConfig, ErrorCauseBoundary } from "@docusaurus/theme-common";
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";
import styles from "./styles.module.css";
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error }
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}
function NavbarContentLayout({ LogoContainer, right }) {
  const [isAPIDropdownOpen, setisAPIDropdownOpen] = useState(false);
  const [isSDKDropdownOpen, setisSDKDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setisAPIDropdownOpen(false);
      setisSDKDropdownOpen(false);

    }
  };

  const toggleAPIDropdown = () => {
    setisAPIDropdownOpen(!isAPIDropdownOpen);
    setisSDKDropdownOpen(false);
  };
  const toggleSDKDropdown = () => {
    setisSDKDropdownOpen(!isSDKDropdownOpen);
    setisAPIDropdownOpen(false);
  };



  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Close the dropdown when clicking outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisSDKDropdownOpen(false);
        setisAPIDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <div className="navbar__inner items-center">
      <div className="flex justify-between align-middle w-full">
        <div className="flex px-3">
          {" "}
          {LogoContainer}
          {/* <a href="#" class=" text-xs font-semibold  rounded   border  inline-flex items-center ">Docs</a> */}
        </div>
        <div className="navfullcontainer-left flex gap-3  flex-1">
          <div
            id="oramaContainer"
            className="relative w-full max-w-sm self-center"
          >
            {/* <input
              type="text"
              placeholder="Search or Ask AI what CIAM is?"
              className="w-full rounded-md border border-gray-300 py-2 pl-4 pr-10 text-sm text-gray-700 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
            />

            <div className="absolute inset-y-0 right-2 flex items-center">
              <kbd class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                Ctrl+K
              </kbd>
            </div> */}
          </div>

          <div className="relative inline-block text-left self-center">
            <button
              onClick={toggleSDKDropdown}
              className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              SDK
              <svg
                className="w-[25px] h-[20px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            {isSDKDropdownOpen && (
              <div ref={dropdownRef} className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <a
                    href="/docs/apidocs/getting-started/introduction"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    API Reference
                  </a>
                </div>
              </div>
            )}
          </div>
          <div  className="relative inline-block text-left self-center">
            <button
              onClick={toggleAPIDropdown}
              className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium  shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              API
              <svg
                className="w-[25px] h-[20px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            {isAPIDropdownOpen && (
              <div ref={dropdownRef} className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <a
                    href="/docs/category/apis"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    API Reference
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="navfullcontainer-right flex gap-2 content-around">
          {" "}
          <button
            type="button"
            class="gap-2 focus:ring-4 focus:outline-none border border-gray-600 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center hover:bg-[#4FBB61FF]/30 m-2"
          >
            <svg
              className="w-6 h-6  dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
              />
            </svg>
            Chat With Us
            <span class="flex w-2 h-2 me-2 bg-green-500 rounded-full"></span>
          </button>
          <button
            type="button"
            class="gap-2 focus:ring-4 focus:outline-none border border-gray-600 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center hover:bg-[#F0F0F0FF]/30 m-2"
          >
            Signin
          </button>
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </div>
      </div>
    </div>
  );
}
export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === "search");
  return (
    <>
      {/* {!searchBarItem && (
    <NavbarItems items={leftItems} />
  <NavbarSearch>
    <SearchBar />
  </NavbarSearch>
)} */}

      <NavbarContentLayout
        LogoContainer={
          <>
            {" "}
            {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
            <NavbarLogo />
          </>
        }
      />
    </>
  );
}
