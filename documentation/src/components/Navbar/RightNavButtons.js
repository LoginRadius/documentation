import { useEffect, useState, React } from "react";

const RightNavButtons = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAdminUserData = () => {
    var commonOptions = {};
    commonOptions.apiKey = "83952b6c-61de-43fd-93bf-b88d90c76489";
    commonOptions.appName = "lr";
    var LRObject = new LoginRadiusV2(commonOptions);
    // If found activated session, go to the callback/onsuccess function
    var ssologin_options = {};

    ssologin_options.onSuccess = async function (accesstoken) {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.loginradius.com/identity/v2/auth/account?apikey=${commonOptions.apiKey}&welcomeemailtemplate=`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "Bearer "+accesstoken,
            },
          }
        );

        if (!response.ok) {
          console.loog("userprofile data fetch failes",response)

          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.loog("userprofile",data)
        setUserData(data);
        console.loog("setprofile",userData)

        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log("werr", response);
      }

    };
    ssologin_options.onError = function (response) {
      // On Success    console.log("Fds")
      setLoading(false)

      //Write your custom code here
      console.log("swerr", response);
    };

    LRObject.init("ssoLogin", ssologin_options);

    // fetch("https://accounts.loginradius.com/ssologin/login") // Replace with your API endpoint
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("User not Logged into Admin console");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     if (data.isauthenticated) {
    //       return data.token;
    //     } else {
    //       return null;
    //     }
    //   })
    //   .then((accesstoken) => {
    //     if (accesstoken) {
    //       fetch(
    //         `https://api.loginradius.com/identity/v2/auth/account?apiKey=83952b6c-61de-43fd-93bf-b88d90c76489&access_token=${accesstoken}&verificationUrl=&emailTemplate=&welcomeEmailTemplate=`
    //       )
    //         .then((response) => {
    //           if (response.error) {
    //             console.log(response);
    //           } else {
    //             setUserData(response);
    //           }
    //         })
    //         .catch((error) => {
    //           console.log(error);
    //         });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setUserData(null); // No user found
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  useEffect(() => {
    getAdminUserData(); // Fetch data when the component mounts
  }, []);
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
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : userData ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-500">
            {userData.FirstName}!
          </h1>
        </div>
      ) : (
        <button
          type="button"
          className="gap-2 focus:ring-4 focus:outline-none border border-gray-600 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center hover:bg-[#F0F0F0FF]/30 m-2"
        >
          <a href="https://accounts.loginradius.com/auth.aspx?action=login&amp;return_url=https%3A%2F%2Fwww.loginradius.com%2Fdocs%2Flibraries%2Fjs-libraries%2Fjs-form-library%2F%3Fallowlogin%3D1&amp;return_url=https%3A%2F%2Fwww.loginradius.com%2Fdocs%2Flibraries%2Fjs-libraries%2Fjs-form-library%2F%3Fallowlogin%3D1">
            Signin
          </a>
        </button>
      )}
    </>
  );
};

export default RightNavButtons;
