import React from "react";

function ExploreByFeature() {
  const cards = [
    {
      icon: (
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" clipPath="url(#clip0_477_2111)">
            <path
              d="M8.16979 11.6809L23.3365 11.6917C23.9808 11.6921 24.5027 12.2148 24.5023 12.8592L24.494 24.5258C24.4935 25.1702 23.9708 25.6921 23.3265 25.6917L4.65983 25.6784C4.0155 25.6779 3.49353 25.1552 3.49399 24.5109L3.50229 12.8442C3.50275 12.1999 4.02546 11.6779 4.66979 11.6784L5.83646 11.6792L5.83729 10.5126C5.8405 6.00224 9.49944 2.3485 14.0098 2.35171C17.207 2.35398 19.9737 4.19322 21.3127 6.87053L19.2244 7.91277C18.2681 6.00041 16.2919 4.68667 14.0081 4.68504C10.7864 4.68275 8.17291 7.29257 8.17062 10.5142L8.16979 11.6809ZM11.6656 17.5167L11.664 19.85L16.3306 19.8534L16.3323 17.52L11.6656 17.5167Z"
              fill="#4096FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_477_2111">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(0.0117188 0.00830078) rotate(0.0407694)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Authentication",
      text: "A quick run-through of authentication processes and features offered by the LoginRadius Identity Platform.",
      link: "/docs/authentication/overview",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M16 2C8.26875 2 2 8.26875 2 16C2 23.7313 8.26875 30 16 30C23.7313 30 30 23.7313 30 16C30 8.26875 23.7313 2 16 2ZM20.5031 16.2156L13.6781 21.1813C13.6407 21.2081 13.5966 21.2242 13.5507 21.2276C13.5047 21.2311 13.4587 21.2218 13.4177 21.2008C13.3767 21.1798 13.3422 21.1479 13.3182 21.1087C13.2941 21.0694 13.2813 21.0242 13.2813 20.9781V11.0531C13.2811 11.007 13.2937 10.9617 13.3178 10.9222C13.3418 10.8828 13.3763 10.8508 13.4173 10.8298C13.4584 10.8087 13.5046 10.7995 13.5506 10.8031C13.5966 10.8066 13.6408 10.8229 13.6781 10.85L20.5031 15.8125C20.5354 15.8353 20.5617 15.8655 20.5798 15.9006C20.598 15.9357 20.6075 15.9746 20.6075 16.0141C20.6075 16.0536 20.598 16.0925 20.5798 16.1275C20.5617 16.1626 20.5354 16.1928 20.5031 16.2156Z"
              fill="#1677FF"
            />
          </g>
        </svg>
      ),
      title: "Single Sign on",
      text: "Configure seamless authentication of your customers into your application or third-party applications.",
      link: "docs/single-sign-on/overview",
    },
    {
      icon: (
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" clipPath="url(#clip0_477_2128)">
            <path
              d="M8.28926 18.459C9.58424 18.9723 10.5 20.2362 10.5 21.7139C10.5 23.6469 8.93299 25.2139 7 25.2139C5.06701 25.2139 3.5 23.6469 3.5 21.7139C3.5 20.19 4.47395 18.8935 5.83333 18.413V11.0147C4.47395 10.5342 3.5 9.23779 3.5 7.71387C3.5 5.78088 5.06701 4.21387 7 4.21387C8.93299 4.21387 10.5 5.78088 10.5 7.71387C10.5 9.23779 9.52606 10.5342 8.16667 11.0147V14.7134C9.1416 13.9811 10.3535 13.5472 11.6667 13.5472H16.3333C17.9474 13.5472 19.3062 12.4546 19.7107 10.9688C18.4157 10.4554 17.5 9.19158 17.5 7.71387C17.5 5.78088 19.067 4.21387 21 4.21387C22.9331 4.21387 24.5 5.78088 24.5 7.71387C24.5 9.26927 23.4854 10.5877 22.082 11.0434C21.6092 13.7905 19.2154 15.8805 16.3333 15.8805H11.6667C10.0526 15.8805 8.69376 16.9731 8.28926 18.459Z"
              fill="#1677FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_477_2128">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(0 0.714355)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Orchestration",
      text: "Effortlessly tailor workflows, implement custom scripts, and personalize themes to align with your unique business requirements.",
      link: "/docs/libraries/identity-orchestration/overview",
    },
    {
      icon: (
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" clipPath="url(#clip0_477_2136)">
            <path
              d="M5.33333 4.70996H26.6667C27.4031 4.70996 28 5.30692 28 6.04329V12.71C28 13.4463 27.4031 14.0433 26.6667 14.0433H5.33333C4.59696 14.0433 4 13.4463 4 12.71V6.04329C4 5.30692 4.59696 4.70996 5.33333 4.70996ZM8 16.71H16C16.7364 16.71 17.3333 17.3069 17.3333 18.0433V22.0433H18.6667V30.0433H13.3333V22.0433H14.6667V19.3766H6.66667C5.93029 19.3766 5.33333 18.7797 5.33333 18.0433V15.3766H8V16.71ZM23.6429 19.0196L26 16.6626L28.3571 19.0196C29.6588 20.3213 29.6588 22.432 28.3571 23.7337C27.0553 25.0354 24.9447 25.0354 23.6429 23.7337C22.3412 22.432 22.3412 20.3213 23.6429 19.0196Z"
              fill="#1677FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_477_2136">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(0 0.714355)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Branding",
      text: "Streamline your outreach and user interaction with configurable Email/SMS providers, hosted pages, customizable email/SMS templates, and dynamic forms.",
      link: "/docs/authentication/concepts/email-communications",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" clipPath="url(#clip0_477_2145)">
            <path
              d="M4.41358 3.2973L14 1.16699L23.5864 3.2973C24.1203 3.41593 24.5 3.88937 24.5 4.43619V16.0874C24.5 18.4278 23.3303 20.6135 21.3829 21.9117L14 26.8337L6.6171 21.9117C4.66971 20.6135 3.5 18.4278 3.5 16.0874V4.43619C3.5 3.88937 3.87979 3.41593 4.41358 3.2973Z"
              fill="#1677FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_477_2145">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Security",
      text: "Understand and enable the different LoginRadius Identity Platform security features for your customers.",
      link: "/docs/security/overview",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" clipPath="url(#clip0_477_2153)">
            <path
              d="M16.0007 18.6668V29.3335H5.33398C5.33398 23.4424 10.1096 18.6668 16.0007 18.6668ZM16.0007 17.3335C11.5807 17.3335 8.00065 13.7535 8.00065 9.3335C8.00065 4.9135 11.5807 1.3335 16.0007 1.3335C20.4207 1.3335 24.0007 4.9135 24.0007 9.3335C24.0007 13.7535 20.4207 17.3335 16.0007 17.3335ZM19.4601 25.0822C19.3776 24.735 19.334 24.3727 19.334 24.0002C19.334 23.6278 19.3776 23.2655 19.46 22.9183L18.1378 22.155L19.4712 19.8455L20.7942 20.6094C21.3184 20.1136 21.9575 19.738 22.6673 19.5267V18.0002H25.334V19.5267C26.0438 19.738 26.6828 20.1136 27.2069 20.6094L28.5301 19.8454L29.8636 22.1548L28.5413 22.9182C28.6237 23.2655 28.6673 23.6278 28.6673 24.0002C28.6673 24.3726 28.6237 24.7348 28.5413 25.082L29.8636 25.8454L28.5302 28.1548L27.2071 27.3908C26.6829 27.8867 26.044 28.2623 25.3341 28.4735V30.0002H22.6674V28.4736C21.9576 28.2624 21.3185 27.8868 20.7944 27.391L19.4713 28.155L18.1378 25.8455L19.4601 25.0822ZM24.0007 22.6668C23.2642 22.6668 22.6673 23.2638 22.6673 24.0002C22.6673 24.7366 23.2642 25.3335 24.0007 25.3335C24.737 25.3335 25.334 24.7366 25.334 24.0002C25.334 23.2638 24.737 22.6668 24.0007 22.6668Z"
              fill="#1677FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_477_2153">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Team Management",
      text: "Efficiently manage teams with robust tools for collaboration, role assignments, and access control.",
      link: "/docs/apidocs/admin-console/overview",
    },
  ];

  return (
    <div className=" mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Explore by Feature</h1>
        <button 
  className="text-blue-500 border-2 border-blue-500 rounded-md p-1" 
  onClick={() => window.location.href = '/docs/authentication/overview'} 
>
  View all
</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className="flex flex-row items-center space-x-4 p-4  rounded-md !no-underline	 hover:scale-105 cursor-pointer "
          > 
            <div className="text-blue-500 text-3xl ">{card.icon}</div>
            <div className="flex flex-col items-left">
              <h3 className="text-sm font-bold">{card.title}</h3>
              <p className=" text-xs">{card.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ExploreByFeature;
