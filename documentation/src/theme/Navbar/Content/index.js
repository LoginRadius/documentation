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
import RightNavButtons from "../../../components/Navbar/RightNavButtons";
import { MenuItems } from "../../../components/Navbar/MenuItems";

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
function NavbarContentLayout({ LogoContainer, left, right }) {
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
      <div className="flex gap-2 justify-between align-middle w-full">
        <div className="flex px-3 w-[300px] ">
          {" "}
          {LogoContainer}
        </div>
        <div className="navfullcontainer-left flex gap-3  flex-1">
          {left}
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
              <div
                ref={dropdownRef}
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {MenuItems.filter((menu) => menu.Title === "SDKs")[0].Data.map(
                  (item, idx) => (
                    <div className="py-1" key={idx}>
                      <a
                        href={item.link} // Use item.link to dynamically set the link
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !no-underline"
                      >
                        {item.name} {/* Dynamically set the name */}
                      </a>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
          <div className="relative inline-block text-left self-center">
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
              <div
                ref={dropdownRef}
                className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {MenuItems.filter((menu) => menu.Title === "API")[0].Data.map(
                  (item, idx) => (
                    <div className="py-1" key={idx}>
                      <a
                        href={item.link} // Use item.link to dynamically set the link
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !no-underline"
                      >
                        {item.name} {/* Dynamically set the name */}
                      </a>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          <div className="relative inline-block text-left self-center">
          <button
  type="button"
  className="transition-all duration-300 ease-in-out gap-2 focus:ring-4 focus:outline-none border border-gray-600 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center hover:bg-[#F0F0F0FF]/30 m-2"
  onClick={() => {
    document.body.classList.add('opacity-50'); // Optional: to add a fade-out effect
    setTimeout(() => {
      window.location.href = '/changelog'; // Redirect after 300ms
    }, 300); // Duration matching transition
  }}
>
  Changelog
</button>





</div>


          
        </div>
        <div className="navfullcontainer-right flex gap-2 content-around">
          {" "}
          <RightNavButtons />
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
    <NavbarContentLayout
      LogoContainer={
        <>
          {" "}
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
        </>
      }
      left={
        // TODO stop hardcoding items?
        <div className="relative w-full max-w-sm self-center">
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
          <NavbarItems items={leftItems} />
        </div>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
        </>
      }
    />
  );
}