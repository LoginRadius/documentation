import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <div className=" bg-gradient-to-r from-slate-900 to-blue-950 rounded-lg shadow-md m-3 flex flex-col justify-between md:flex-row items-center">
      <div className="text-section p-4">
        <h2 className="text-white font-extrabold text-xl">
          Empower your apps with LoginRadius
        </h2>
        <h4 className="text-white text-l mt-2">
          Find all the guides and resources you need to develop with
          LoginRadius.
        </h4>
        <button className="flex w-fit gap-3 rounded-lg p-3 bg-white text-black mt-4">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </div>
      <div className="image-section relative m-4 flex items-center justify-center overflow-clip">
        <img
          src="/img/dashboard.png"
          alt="Resource Preview"
          className="rounded-lg w-full"
          style={{ maxHeight: "300px", maxWidth: "400px" }}
        />
      </div>
    </div>
  );
}

const QuickStart = () => {
  return (
    <div className="flex-col p-5">
      <h1 className="text-sm">Quick Starts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center border-gray-300 border-2">
          <div className="text-blue-500 mb-4">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.25 19.6786C29.6964 13.9688 35.1594 11.0533 47.0536 11C47.2437 10.9993 47.4321 11.0362 47.6079 11.1087C47.7837 11.1811 47.9435 11.2876 48.0779 11.4221C48.2124 11.5565 48.3189 11.7163 48.3914 11.8921C48.4638 12.0679 48.5007 12.2563 48.5 12.4464V38.4821C48.5 38.8658 48.3476 39.2337 48.0763 39.5049C47.8051 39.7762 47.4372 39.9286 47.0536 39.9286C35.4821 39.9286 31.0118 42.2618 28.25 45.7143M28.25 19.6786C26.8036 13.9688 21.3406 11.0533 9.44644 11C9.25629 10.9993 9.06788 11.0362 8.89207 11.1087C8.71625 11.1811 8.55652 11.2876 8.42206 11.4221C8.2876 11.5565 8.18109 11.7163 8.10865 11.8921C8.03622 12.0679 7.99929 12.2563 8.00001 12.4464V38.3077C8.00001 39.2008 8.55327 39.9286 9.44644 39.9286C21.0179 39.9286 25.5045 42.279 28.25 45.7143M28.25 19.6786V45.7143"
                stroke="#91CAFF"
                stroke-width="2.06633"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-base font-semibold mb-2">Setup Guide</h2>
          <p className="text-gray-600 text-sm">
            Explore our end-to-end tutorial guide for application stacks using
            LoginRadius{" "}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center border-gray-300 border-2">
          <div className="text-blue-500 mb-4">
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M28.334 49.0001L47.3063 39.1814C48.0437 38.7987 48.4123 38.6097 48.6806 38.3274C48.9183 38.0796 49.0984 37.7824 49.208 37.4571C49.334 37.0861 49.334 36.6731 49.334 35.8424V17.5771M28.334 49.0001L9.36165 39.1814C8.62432 38.7987 8.25565 38.6097 7.98732 38.3274C7.74965 38.0796 7.56959 37.7824 7.45998 37.4571C7.33398 37.0861 7.33398 36.6707 7.33398 35.8377V17.5771M28.334 49.0001V27.8531M49.334 17.5771L28.334 27.8531M49.334 17.5771L30.0373 7.59039C29.4143 7.26839 29.104 7.10505 28.775 7.04205C28.4837 6.98598 28.1843 6.98598 27.893 7.04205C27.5663 7.10505 27.2537 7.26839 26.6283 7.59039L7.33398 17.5771M7.33398 17.5771L28.334 27.8531"
                  stroke="#4096FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
          <h2 className="text-base font-semibold mb-2">SDK's</h2>
          <p className="text-gray-600 text-sm">
            Explore our end-to-end tutorial guide for application stacks using
            LoginRadius
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center border-gray-300 border-2">
          <div className="text-blue-500 mb-4">
            <svg
              width="59"
              height="58"
              viewBox="0 0 59 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.9452 8.57918C46.5843 8.13774 46.1719 7.80585 45.7079 7.58352C45.2439 7.36118 44.7299 7.25002 44.166 7.25002H15.166C14.6037 7.24841 14.0906 7.35877 13.6266 7.5811C13.1626 7.80343 12.7493 8.13613 12.3868 8.57918H46.9452ZM46.9452 8.57918L50.3285 12.6875L46.9452 8.57918ZM12.8114 8.92882L12.8125 8.92746C13.1297 8.53975 13.4808 8.26083 13.8643 8.0771C14.2469 7.89377 14.6772 7.79862 15.1644 7.80002H15.166H44.166C44.6556 7.80002 45.0873 7.89603 45.4702 8.07952C45.8538 8.26334 46.204 8.54153 46.5194 8.9273L46.5206 8.92882L49.9028 13.0358C49.9029 13.0359 49.9029 13.0359 49.903 13.036C50.2286 13.434 50.4686 13.8536 50.628 14.2953C50.7872 14.7363 50.8675 15.2055 50.866 15.7068V15.7084V45.9167C50.866 47.099 50.4518 48.0978 49.6082 48.9429C48.7651 49.7874 47.7669 50.2015 46.5834 50.2H46.5827H12.7493C11.5671 50.2 10.5692 49.7858 9.72593 48.9425C8.88268 48.0993 8.46753 47.1005 8.46602 45.9164V15.7084C8.46602 15.2048 8.54709 14.7342 8.70642 14.2929C8.86592 13.8511 9.10505 13.4324 9.42875 13.0363C9.42894 13.0361 9.42914 13.0359 9.42933 13.0356L12.8114 8.92882ZM13.2969 14.1438L12.5267 15.05H13.716H45.616H46.8054L46.0351 14.1438L43.9809 11.7271L43.8162 11.5334H43.5619H15.7702H15.5158L15.3511 11.7271L13.2969 14.1438ZM12.1993 45.9167V46.4667H12.7493H46.5827H47.1327V45.9167V19.3334V18.7834H46.5827H12.7493H12.1993V19.3334V45.9167ZM35.8285 40.4264L33.1022 37.7L37.7883 33.0139L38.1772 32.625L37.7883 32.2361L33.1022 27.55L35.8285 24.8237L43.6299 32.625L35.8285 40.4264ZM15.823 32.625L23.6243 24.8237L26.3507 27.55L21.6646 32.2361L21.2757 32.625L21.6646 33.0139L26.3507 37.7L23.6243 40.4264L15.823 32.625Z"
                fill="#91CAFF"
                stroke="white"
                stroke-width="1.1"
              />
            </svg>
          </div>
          <h2 className="text-base font-semibold mb-2">API References</h2>
          <p className="text-gray-600 text-sm">
            Explore our end-to-end tutorial guide for application stacks using
            LoginRadius
          </p>
        </div>
      </div>
    </div>
  );
};

const ExploreByFeature = () => {
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
          <g opacity="0.5" clip-path="url(#clip0_477_2111)">
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
      text: "Explore our end-to-end tutorial guide for application stacks using LoginRadius",
      link: "#",
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
      text: "Explore our end-to-end tutorial guide for application stacks using LoginRadius",
      link: "#",
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
          <g opacity="0.5" clip-path="url(#clip0_477_2128)">
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
      text: "Explore our end-to-end tutorial guide for application stacks using LoginRadius",
      link: "#",
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
          <g opacity="0.5" clip-path="url(#clip0_477_2136)">
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
      text: "Explore our end-to-end tutorial guide for application stacks using LoginRadius",
      link: "#",
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
          <g opacity="0.5" clip-path="url(#clip0_477_2145)">
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
      text: "Explore our end-to-end tutorial guide for application stacks using LoginRadius",
      link: "#",
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
          <g opacity="0.5" clip-path="url(#clip0_477_2153)">
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
      text: "Explore our end-to-end tutorial guide for application stacks using LoginRadius",
      link: "#",
    },
  ];

  return (
    <div className=" mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Explore by Feature</h1>
        <button className="text-blue-500  border-2 border-blue-500 rounded-md p-1">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className="flex flex-row items-center space-x-4 p-4 bg-white shadow rounded-md no-underline	 "
          >
            <div className="text-blue-500 text-3xl">{card.icon}</div>
            <div className="flex flex-col items-left">
              <h3 className="text-sm font-bold">{card.title}</h3>
              <p className="text-gray-700 text-xs">{card.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const Resources = () => {
  return (
    <div className="m-3">
      <h1 className="text-xl font-bold mb-8">Resources</h1>
      <div className="flex flex-row flex-wrap w-100 justify-between gap-2">
        <div className="flex flex-col bg-white shadow-lg rounded-lg  p-4">
          <h2 className="text-xl font-semibold mb-4">Blogs</h2>
          <p className="text-gray-600">
            Explore our end-to-end tutorial guide for application stacks using
            LoginRadius
          </p>
        </div>
        <div className="flex flex-col bg-white shadow-lg rounded-lg  p-4">
          <h2 className="text-xl font-semibold mb-4">Academics</h2>
          <p className="text-gray-600">
            Explore our end-to-end tutorial guide for application stacks using
            LoginRadius
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="w-100">
        <HomepageHeader />
        <QuickStart />
        <ExploreByFeature />
        <Resources />
      </main>
    </Layout>
  );
}
