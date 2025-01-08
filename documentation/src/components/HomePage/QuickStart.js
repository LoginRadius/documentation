import React from "react";

function QuickStart() {
  return (
    <div className="flex-col p-5">
      <h1 className="text-xl">Quick Starts</h1>
      <div className="no-anchor-styling grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        <a href="#" rel="noopener noreferrer" className="!no-underline">
          <div className=" shadow shadow-gray-500 rounded-lg p-6 text-center hover:scale-105 cursor-pointer flex flex-col justify-between h-full">
            <div className="text-blue-500 mb-4">
              <svg
                className="w-[48px] h-[48px]  dark:text-white"
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
                  d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
                />
              </svg>
            </div>
            <h2 className="text-base font-semibold mb-2">Setup Guide</h2>
            <p className="text-sm">
              Step-by-step tutorials to seamlessly integrate and configure
              LoginRadius with your application stacks.
            </p>
          </div>
        </a>
        <a
          href="/docs/libraries/sdk-libraries/overview"
          rel="noopener noreferrer"
          className="!no-underline"
        >
          <div className=" shadow shadow-gray-500 rounded-lg p-6 text-center hover:scale-105 cursor-pointer flex flex-col justify-between h-full">
            <div className="text-blue-500 mb-4">
              <svg
                className="w-[48px] h-[48px]  dark:text-white"
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
                  d="M12 11v5m0 0 2-2m-2 2-2-2M3 6v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Zm2 2v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8H5Z"
                />
              </svg>
            </div>
            <h2 className="text-base font-semibold mb-2">SDK's</h2>
            <p className="text-sm">
              Seamlessly integrate LoginRadius features using detailed SDK
              guides tailored for various programming languages and platforms.
            </p>
          </div>
        </a>
        <a
    href="/docs/apidocs/getting-started/introduction"
    rel="noopener noreferrer"
    className="!no-underline"
  >
        <div className=" shadow shadow-gray-500 rounded-lg p-6 text-center hover:scale-105 cursor-pointer flex flex-col justify-between h-full">
          <div className="text-blue-500 mb-4">
            <svg
              className="w-[48px] h-[48px]  dark:text-white"
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
                d="M10 3v4a1 1 0 0 1-1 1H5m5 4-2 2 2 2m4-4 2 2-2 2m5-12v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
              />
            </svg>
          </div>
          <h2 className="text-base font-semibold mb-2">API References</h2>
          <p className="text-sm">
       
              Explore detailed documentation for APIs to seamlessly integrate
              and extend platform functionality.
          </p>
        </div>
        </a>
      </div>
    </div>
  );
}

export default QuickStart;
