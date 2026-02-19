import React, { useContext } from 'react';
import Card from './Card2';
import { UserContext } from './UserContext';

function Project() {
  const { mode } = useContext(UserContext);

  const data2 = [
    {
      img: "./food.webp",
      head: "Resturent website",
      description: "Delicious bites, just a click away",
      code: "https://github.com/Abdul-dev6/food-landing-page",
      preview: "https://abdul-dev6.github.io/food-landing-page/"
    },
    {
      img: "./spotify.jpg",
      head: "Spotify Clone",
      description: "Stream your favorite music anytime, anywhere.",
      code: "https://github.com/Abdul-dev6/Spotify-clone",
      preview: "https://abdul-dev6.github.io/Spotify-clone/"
    },
    {
      img: "./banking.avif",
      head: "Banking Website Clone",
      description: "Manage accounts, transfer money, and explore banking features seamlessly.",
      code: "https://github.com/Abdul-dev6/bankingsystem-js",
      preview: "https://abdul-dev6.github.io/bankingsystem-js/"
    },
    {
      img: "./nex.png",
      head: "Nextcent website clone",
      description: "A stylish website with smooth navigation.",
      code: "https://github.com/Abdul-dev6/Nexcent-web-landing-page",
      preview: "https://abdul-dev6.github.io/Nexcent-web-landing-page/"
    },
    {
      img: "./ai.avif",
      head: "AI Website Clone",
      description: "Experience smart AI tools and futuristic web features.",
      code: "https://github.com/Abdul-dev6/fronted-ai-api-design",
      preview: "https://abdul-dev6.github.io/fronted-ai-api-design/"
    },
    {
      img: "todo.avif",
      head: "Todo List App",
      description: "Track and complete tasks effortlessly.",
      code: "https://github.com/Abdul-dev6/todo-app",
      preview: "https://abdul-dev6.github.io/todo-app/"
    }
  ];

  return (
    <div className="flex flex-col items-start gap-5 pl-30 pccc it ">
      <h1 className="w-full flex justify-center items-center text-2xl font-semibold pt-10 pr-13">
        My <span className='text-orange-500 ml-1'>Project</span>
      </h1>

      <div className="flex flex-wrap gap-5 its">
        {data2.map((pro, index) => (
          <Card key={index} {...pro} />
        ))}
      </div>
    </div>
  );
}

export default Project;
