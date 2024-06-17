"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Style from "./allperson.module.css";
import { useRouter } from "next/navigation";
const Team_Person = [
  {
    id: 0,
    name: "Hirock",
    status: "CEO",
    title: "I am the owner of this company",
    description:
      "Hirock is a highly skilled web developer and a recognized expert in modern web technologies. With mastery in Next.js, MongoDB, Redux, JavaScript, HTML, CSS, and Tailwind CSS, Hirock builds robust, dynamic, and visually appealing web applications. Known for his innovative solutions and deep understanding of both front-end and back-end development, Hirock seamlessly integrates these technologies to create efficient and scalable web experiences. His proficiency in Next.js ensures server-side rendering and static site generation, while his expertise in MongoDB provides strong database management. Hirock's command of Redux allows for effective state management in complex applications, and his adeptness in Tailwind CSS enables rapid and responsive UI design.",
    image:
      "https://images.pexels.com/photos/6004824/pexels-photo-6004824.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Rakib",
    status: "COD",
    title: "I am COD of this company",
    description:
      "Rakib is a highly skilled web developer and a recognized expert in modern web technologies. With mastery in Next.js, MongoDB, Redux, JavaScript, HTML, CSS, and Tailwind CSS, Hirock builds robust, dynamic, and visually appealing web applications. Known for his innovative solutions and deep understanding of both front-end and back-end development, Hirock seamlessly integrates these technologies to create efficient and scalable web experiences. His proficiency in Next.js ensures server-side rendering and static site generation, while his expertise in MongoDB provides strong database management. Hirock's command of Redux allows for effective state management in complex applications, and his adeptness in Tailwind CSS enables rapid and responsive UI design.",
    image:
      "https://images.pexels.com/photos/3626050/pexels-photo-3626050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Karim",
    status: "PLD",
    title: "Main PLD in this company",
    description:
      "Karim is a highly skilled web developer and a recognized expert in modern web technologies. With mastery in Next.js, MongoDB, Redux, JavaScript, HTML, CSS, and Tailwind CSS, Hirock builds robust, dynamic, and visually appealing web applications. Known for his innovative solutions and deep understanding of both front-end and back-end development, Hirock seamlessly integrates these technologies to create efficient and scalable web experiences. His proficiency in Next.js ensures server-side rendering and static site generation, while his expertise in MongoDB provides strong database management. Hirock's command of Redux allows for effective state management in complex applications, and his adeptness in Tailwind CSS enables rapid and responsive UI design.",
    image:
      "https://images.pexels.com/photos/1544928/pexels-photo-1544928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Sourav",
    status: "MD",
    title: "Mangager of this Depertment",
    description:
      "Sourav is a highly skilled web developer and a recognized expert in modern web technologies. With mastery in Next.js, MongoDB, Redux, JavaScript, HTML, CSS, and Tailwind CSS, Hirock builds robust, dynamic, and visually appealing web applications. Known for his innovative solutions and deep understanding of both front-end and back-end development, Hirock seamlessly integrates these technologies to create efficient and scalable web experiences. His proficiency in Next.js ensures server-side rendering and static site generation, while his expertise in MongoDB provides strong database management. Hirock's command of Redux allows for effective state management in complex applications, and his adeptness in Tailwind CSS enables rapid and responsive UI design.",
    image:
      "https://images.pexels.com/photos/3707987/pexels-photo-3707987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Bishaw",
    status: "Senior MD",
    title: "Senior MD of this insritution",
    description:
      "Bishawis a highly skilled web developer and a recognized expert in modern web technologies. With mastery in Next.js, MongoDB, Redux, JavaScript, HTML, CSS, and Tailwind CSS, Hirock builds robust, dynamic, and visually appealing web applications. Known for his innovative solutions and deep understanding of both front-end and back-end development, Hirock seamlessly integrates these technologies to create efficient and scalable web experiences. His proficiency in Next.js ensures server-side rendering and static site generation, while his expertise in MongoDB provides strong database management. Hirock's command of Redux allows for effective state management in complex applications, and his adeptness in Tailwind CSS enables rapid and responsive UI design.",
    image:
      "https://images.pexels.com/photos/7063778/pexels-photo-7063778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Abdul Rouv",
    status: "GM",
    title: "General Manager of this company",
    description:
      "Abdul Rouv is a highly skilled web developer and a recognized expert in modern web technologies. With mastery in Next.js, MongoDB, Redux, JavaScript, HTML, CSS, and Tailwind CSS, Hirock builds robust, dynamic, and visually appealing web applications. Known for his innovative solutions and deep understanding of both front-end and back-end development, Hirock seamlessly integrates these technologies to create efficient and scalable web experiences. His proficiency in Next.js ensures server-side rendering and static site generation, while his expertise in MongoDB provides strong database management. Hirock's command of Redux allows for effective state management in complex applications, and his adeptness in Tailwind CSS enables rapid and responsive UI design.",
    image:
      "https://images.pexels.com/photos/6206942/pexels-photo-6206942.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 6,
    name: "Borun Halder",
    status: "Advisor",
    title: "Senior Advisor of this Company",
    description:
      "Borun Halderk is a highly skilled web developer and a recognized expert in modern web technologies. With mastery in Next.js, MongoDB, Redux, JavaScript, HTML, CSS, and Tailwind CSS, Hirock builds robust, dynamic, and visually appealing web applications. Known for his innovative solutions and deep understanding of both front-end and back-end development, Hirock seamlessly integrates these technologies to create efficient and scalable web experiences. His proficiency in Next.js ensures server-side rendering and static site generation, while his expertise in MongoDB provides strong database management. Hirock's command of Redux allows for effective state management in complex applications, and his adeptness in Tailwind CSS enables rapid and responsive UI design.",
    image:
      "https://images.pexels.com/photos/6405066/pexels-photo-6405066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    name: "Shemul",
    status: "TL",
    title: "Team leader of this institution",
    description:
      "Shemul Halderk is a highly skilled web developer and a recognized expert in modern web technologies. With mastery in Next.js, MongoDB, Redux, JavaScript, HTML, CSS, and Tailwind CSS, Hirock builds robust, dynamic, and visually appealing web applications. Known for his innovative solutions and deep understanding of both front-end and back-end development, Hirock seamlessly integrates these technologies to create efficient and scalable web experiences. His proficiency in Next.js ensures server-side rendering and static site generation, while his expertise in MongoDB provides strong database management. Hirock's command of Redux allows for effective state management in complex applications, and his adeptness in Tailwind CSS enables rapid and responsive UI design.",
    image:
      "https://images.pexels.com/photos/5677291/pexels-photo-5677291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

import { Noto_Sans_Avestan } from "next/font/google";
const noto_sans_avestan = Noto_Sans_Avestan({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const AllPerson = () => {
  const [descriptions, setDescriptions] = useState("");
  const [popupflag, setPopupFlag] = useState(false);

  const AllslideTopAnimation = () => {
    const Text1 = document.querySelectorAll("#commonAnimation");
    const windowHeight = window.outerHeight - 200;
    Text1.forEach((item: any, idx: any) => {
      document.addEventListener("scroll", (e: any) => {
        const ScrollHeight = item.getBoundingClientRect().top;
        if (windowHeight > ScrollHeight) {
          item.style.paddingTop = "0";
          item.style.transition = "1s";
          item.style.opacity = "1";
        } else {
          item.style.paddingTop = "128px";
          item.style.opacity = "0";
        }
      });
    });
  };

  useEffect(() => {
    AllslideTopAnimation();
  }, []);

  return (
    <div className={`${noto_sans_avestan.className}flex justify-center`}>
      <div className={`${Style.GridDiv} h-fit `}>
        {Team_Person.map((item) => (
          <div
            key={item.id}
            className=" bg-zinc-600 relative sm:text-sm rounded-md overflow-hidden flex items-center justify-center"
          >
            <Image
              id="commonAnimation"
              src={item.image}
              alt="person"
              width={500}
              height={500}
              className=" "
            />
            <div className=" absolute bottom-0 left-0 w-full h-2/6 backdrop:filter backdrop-blur-3xl bg-slate-800/80 opacity-90">
              <h1 className=" text-center mt-3">{item.name}</h1>
              <div className=" flex flex-col items-center justify-center">
                <p className={` opacity-60`}>Status: {item.status}</p>
                <p className={` opacity-60`}>{item.title}</p>
                {/* <DescriptionBtn  onClick={()=>onPopup(item.description)}/> */}
                <button
                  id={Style.MoreDetailsBtn}
                  className=" w-52  h-6 max-sm:h-8 rounded-md mt-2"
                  onClick={(e: any) => {
                    `${setDescriptions(item.description)}}${setPopupFlag(
                      !popupflag
                    )}`;
                  }}
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* popup_section */}

      <div
        onClick={() => setPopupFlag(!popupflag)}
        className={`${
          !popupflag ? "hidden" : "block"
        } flex items-center justify-center bg-slate-800/80 fixed z-50 top-0 left-0 w-full h-full`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className=" overflow-hidden h-3/5 w-3/5 max-sm:w-5/6 backdrop:filter backdrop-blur-3xl rounded-md p-5 "
        >
          <div className="  mb-2 flex justify-end ">
            <button onClick={() => setPopupFlag(!popupflag)}>
              <Image
                src={"/all_svg/close-fill.svg"}
                alt="close"
                width={30}
                height={30}
              />
            </button>
          </div>
          <p
            id={Style.textBox}
            className=" md:text-sm lg:text-base sm:text-sm mt-5"
          >
            {descriptions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllPerson;
