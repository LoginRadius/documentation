import { useEffect, useState, useRef } from "react";

const RightNavButtons = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false); // loading is initially false
  const [isUserDropdown, setisUserDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Initialize LRObject only once
  let LRObject = useRef(null);
  useEffect(() => {
    const commonOptions = {
      apiKey: "83952b6c-61de-43fd-93bf-b88d90c76489", // Use environment variable for API key
      appName: "lr",
    };
    LRObject = new LoginRadiusV2(commonOptions);
  }, []);

  const handleLogout = async () => {
    setLoading(true); // Set loading to true when logging out
    try {
      const currentUrl = encodeURIComponent(window.location.href);
      const logoutUrl = `https://accounts.loginradius.com/auth.aspx?action=logout&return_url=${currentUrl}`;

      const response = await fetch(logoutUrl, {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        console.log("Logged out successfully");
        setLoading(false); // Set loading to false after successful logout
      } else {
        console.error("Failed to log out");
        setLoading(false); // Set loading to false if logout fails
      }
    } catch (error) {
      console.error("Error during logout:", error);
      setLoading(false); // Ensure loading is set to false on error
    }
  };

  const toggleUserDropdown = () => {
    setisUserDropdown(!isUserDropdown);
  };

  const getUserData = async (accessToken) => {
    setLoading(true); // Set loading to true before making the API request
    try {
      const response = await fetch(
        `https://api.loginradius.com/identity/v2/auth/account?apikey=${"83952b6c-61de-43fd-93bf-b88d90c76489"}&welcomeemailtemplate=`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        console.error("Error fetching user data", response);
        setLoading(false); // Set loading to false on error
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUserData(data);
      setLoading(false); // Set loading to false after successful data fetch
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false); // Ensure loading is set to false on error
    }
  };

  useEffect(() => {
    const ssologinOptions = {
      onSuccess: async (accessToken) => {
        console.log("sspfound", accessToken);
        if (accessToken) {
          await getUserData(accessToken);
        }
        setLoading(false); // Ensure loading is set to false after successful login
      },
      onError: () => {
        console.log("ssso error");
        setLoading(false); // Ensure loading is set to false if there's an error
      },
    };

    if (LRObject) {
      const sessionToken = LRObject.sessionData.getToken();
      if (sessionToken) {
        console.log("session token present", sessionToken);
        getUserData(sessionToken);
      }else{
        LRObject.init("ssoLogin", ssologinOptions);
      }
    }
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisUserDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="gap-2 focus:ring-4 focus:outline-none border border-gray-600 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center hover:bg-[#4FBB61FF]/30 m-2"
      >
        <svg
          className="w-6 h-6"
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

      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : userData ? (
        <div className="self-center">
          <button
            onClick={toggleUserDropdown}
            type="button"
            className="gap-2 focus:ring-4 focus:outline-none self-center font-medium rounded-lg text-sm text-center inline-flex items-center hover:bg-[#4FBB61FF]/30 m-2"
          >
            <svg
              className="w-8 h-8 dark:text-white"
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
          </button>

          {isUserDropdown && (
            <div
              ref={dropdownRef}
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-primary-dark shadow-lg"
            >
              <div className="px-4 py-2 font-semibold text-gray-700">
                Hi {userData.FirstName}!
              </div>
              <hr className="h-px border-0" />

              <div className="py-1">
                <a
                  href="https://console.loginradius.com/my-account"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 !no-underline"
                >
                  Account
                </a>
              </div>
              <div className="py-1">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-sm text-gray-700 hover:text-red-600 !no-underline"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          className="gap-2 focus:ring-4 focus:outline-none border border-gray-600 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center hover:bg-[#F0F0F0FF]/30 m-2"
        >
          <a
            href="https://accounts.loginradius.com/auth.aspx?action=login&return_url=https%3A%2F%2Fwww.loginradius.com%2Fdocs%2Flibraries%2Fjs-libraries%2Fjs-form-library%2F%3Fallowlogin%3D1"
          >
            Signin
          </a>
        </button>
      )}
    </>
  );
};

export default RightNavButtons;
