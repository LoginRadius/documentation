import React from "react";
import Logo from "@theme/Logo";
export default function NavbarLogo() {
  return (
    <>
    <Logo
      className="navbar__brand"
      imageClassName="navbar__logo"
      titleClassName="navbar__title text--truncate"
    />
      <a href="/" className="self-center !no-underline	">
        <span className="my-3 no-underline border-2 font-semibold border-blue-950 dark:border-white rounded-full px-4 py-1 text-sm sm:text-base ">
          DOCS
        </span>
      </a>
    </>
  );
}
