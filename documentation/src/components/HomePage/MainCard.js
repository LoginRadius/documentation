import React from "react";

function MainCard() {
  return (
    <div
    className="w-full bg-black bg-[url('/img/bgimage.png')] bg-center bg-no-repeat bg-cover 
    rounded-lg shadow-md flex flex-col justify-between md:flex-row items-center"
  >
      <div className="text-section p-4">
        <h2 className="text-white font-extrabold text-xl">
          Empower your apps with LoginRadius
        </h2>
        <h4 className="text-white text-l mt-2">
          Find all the guides and resources you need to develop with
          LoginRadius.
        </h4>
        <a href="https://console.loginradius.com/" target="_blank" className="flex w-fit gap-3 rounded-lg p-3 bg-white text-black mt-4 hover:scale-105 cursor-pointer font-semibold">
          Try for Free
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
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
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      </div>
      <div className="image-section relative m-4 flex items-center justify-center overflow-clip">
        <img
          src="/img/dashboard1.png"
          alt="Resource Preview"
          className="rounded-lg w-full"
          style={{ maxHeight: "300px", maxWidth: "400px" }}
        />
      </div>
    </div>
  );
}

export default MainCard;
