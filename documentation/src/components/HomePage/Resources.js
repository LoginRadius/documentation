import React from "react";

const Resources = () => {
  const cards = [
    {
      title: "Blogs",
      text: "Explore technical updates, best practices, and engineering innovations from the LoginRadius team.",
      link: "https://www.loginradius.com/blog/engineering/",
     target: "_blank"
    },
    {
      title: "Academics",
      text: "Explore our end-to-end tutorial guide for application stacks using LoginRadius",
      link: "#",
      target: "_blank",
    },
  ];
  return (
    <div className="m-3">
      <h1 className="text-xl font-bold mb-8">Resources</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}

            className="flex flex-row items-center space-x-4 p-4  shadow shadow-gray-500 rounded-md no-underline	 "
            target={card.target}
>
            
            <div className="flex flex-col items-left">
              <h3 className="text-sm font-bold">{card.title}</h3>
              <p className=" text-xs">{card.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Resources;
