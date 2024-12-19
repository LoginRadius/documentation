import React from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import IconArrow from "@theme/Icon/Arrow";
import styles from "./styles.module.css";
export default function CollapseButton({ onClick }) {
  return (
    <button
      type="button"
      title={translate({
        id: "theme.docs.sidebar.collapseButtonTitle",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar",
      })}
      aria-label={translate({
        id: "theme.docs.sidebar.collapseButtonAriaLabel",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar",
      })}
      className={clsx(
        "w-full flex self-center justify-center border-2 p-2 hover:bg-gray-600",
      )}
      onClick={onClick}
    >
      <svg
        className="flex w-6 h-6 self-center"
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
          d="m17 16-4-4 4-4m-6 8-4-4 4-4"
        />
      </svg>
      
    </button>
  );
}
