import React, { useState } from "react";
import Layout from "@theme/Layout";
import changelog from "../../changelog";

const Changelog = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState({}); // For toggling expanded state
  const totalPages = Math.ceil(changelog.length / itemsPerPage);
  const currentData = changelog.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleExpanded = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const parseLinks = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    return text.replace(
      linkRegex,
      '<a href="$2" target="_blank" class="text-blue-500 underline">$1</a>'
    );
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Changelog</h1>
        {currentData.map((entry, index) => (
          <div
            key={index}
            className={`border border-gray-300 rounded-lg p-4 mb-4 shadow-sm flex flex-col gap-3 ${
              index % 2 === 0 ? "alternate-row" : ""
            }`}
          >
            {/* Minimized View */}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <h2 className="text-xl font-semibold mb-2">{entry.name}</h2>
                <button
                  className="underline mt-2 self-center border  border-white rounded-full bg-slate-400"
                  onClick={() => toggleExpanded(index)}
                >
                  {expanded[index] ? (
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
                        d="m5 15 7-7 7 7"
                      />
                    </svg>
                  ) : (
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
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <p className="mb-4 inline-flex">
                {entry.description}
              </p>
              <div className="flex flex-row gap-2">
                <span className="my-1 no-underline border-2 inline-flex gap-2 rounded-full px-4 py-1 text-sm sm:text-base ">
                  <svg
                    className="w-6 h-6 dark:text-white"
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
                      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  {entry.auther}
                </span>
                <span className="my-1 no-underline border-2 inline-flex gap-2 rounded-full px-4 py-1 text-sm sm:text-base ">
                  <svg
                    className="w-6 h-6 dark:text-white"
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
                      d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                    />
                  </svg>
                  {entry.created_date}
                </span>
              </div>
            </div>

            {expanded[index] && (
              <>
                {entry.changelog &&
                  Object.entries(entry.changelog).map(
                    ([type, changes], idx) => (
                      <div key={idx}>
                        <h3 className="font-semibold text-lg">{type}</h3>
                        <ul className="list-disc list-inside">
                          {changes.map((change, changeIndex) => (
                            <li
                              key={changeIndex}
                              className=""
                              dangerouslySetInnerHTML={{
                                __html: parseLinks(change.text),
                              }}
                            />
                          ))}
                        </ul>
                      </div>
                    )
                  )}
              </>
            )}
          </div>
        ))}

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? "bg-gray-500 cursor-not-allowed"
                : "gap-2 focus:ring-4 focus:outline-none border border-gray-600 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center hover:bg-[#4FBB61FF]/30 m-2"
            }`}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-500 cursor-not-allowed"
                : "gap-2 focus:ring-4 focus:outline-none border border-gray-600 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center hover:bg-[#4FBB61FF]/30 m-2"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Changelog;
