import React from "react";

const RightNavButtons = () => {
  return (
    <>
      <button
        type="button"
        className="gap-2 focus:ring-4 focus:outline-none border border-gray-600 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center hover:bg-[#4FBB61FF]/30 m-2"
      >
        <svg
          className="w-6 h-6  "
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
        <span className="flex w-2 h-2 me-2 bg-green-500 rounded-full"></span>
      </button>
      <button
        type="button"
        className="gap-2 focus:ring-4 focus:outline-none border border-gray-600 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center hover:bg-[#F0F0F0FF]/30 m-2"
      >
        Signin
      </button>
    </>
  );
};

export default RightNavButtons;
