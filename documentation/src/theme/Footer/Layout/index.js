import React from "react";
import clsx from "clsx";

import { InKeepChatButton } from "../../../components/Navbar/Inkeep";

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      {/* <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div> */}
      <div className="flex justify-between align-middle p-3">
        <div className="flex-1 left-0">
          <a href="/support">Help us Improve our docs</a>
        </div>
        <div className=" flex-1 center">
          Copyright © {new Date().getFullYear()} LoginRadius Inc.{" "}
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="/privacy">Privacy</a>
          <a href="/more">More</a>
        </div>
      </div>
      <InKeepChatButton />
    </footer>
  );
}
