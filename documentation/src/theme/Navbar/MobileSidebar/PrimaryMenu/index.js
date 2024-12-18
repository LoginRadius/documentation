import { React, useState } from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import { MenuItems } from "../../../../components/Navbar/MenuItems";
import RightNavButtons from "../../../../components/Navbar/RightNavButtons";

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const [openIndex, setOpenIndex] = useState(null); // Only one menu section can be open at a time

  // Toggle the currently clicked menu section
  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if same index is clicked again
  };
  const mobileSidebar = useNavbarMobileSidebar();

  const items = useNavbarItems();
  return (
    <>
      <ul className="menu__list">
        {/* {items.map((item, i) => (
        <NavbarItem
          mobile
          {...item}
          onClick={() => mobileSidebar.toggle()}
          key={i}
        />
      ))} */}
        <li>
          <a href="/" className="inline-flex gap-2">
            <svg
              className="w-6 h-6 "
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
                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              />
            </svg>
            Home
          </a>
        </li>

        <li>
          <a
            href="/docs/apidocs/getting-started/introduction"
            className="inline-flex gap-2"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                clip-rule="evenodd"
              />
            </svg>
            Getting Started
          </a>
        </li>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="w-full ">
          <ul>
            {MenuItems.map((menu, index) => (
              <li key={index} className="py-2">
                <div
                  className="flex justify-between  cursor-pointer"
                  onClick={() => toggleMenu(index)}
                >
                  <span className="text-lg font-medium">
                    {menu.Title}
                  </span>
                  <svg
                    className={`w-6 h-6 transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    } transition-transform duration-300`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Collapsible Content */}
                <ul
                  className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {menu.Data.map((item, idx) => (
                    <li key={idx} className="pl-4">
                      <a
                        href={item.link}
                        className="block "
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      </ul>

      <div className="flex flex-wrap gap-2 ">
        {" "}
        <RightNavButtons />
      </div>
    </>
  );
}
