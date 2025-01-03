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
        <span className="my-2 no-underline border-2 font-semibold rounded-full px-2 py-1 text-xs sm:text-xs ">
          DOCS
        </span>
      </a>
    </>
  );
}
