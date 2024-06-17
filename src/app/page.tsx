import Section_1 from "@/components/Home_section_1/Section_1";
import Image from "next/image";
import React from "react";
import { Roboto } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import Text_Box from "@/components/Section_2/textBox/Text_Box";
import InfoCard from "@/components/Section_2/infoCard/InfoCard";
import { Bitter } from "next/font/google";
import ScrollSkills from "@/components/scrollSkills/ScrollSkills";
import FreeLancingField from "@/components/freelancingFields/FreeLancingField";

const bitter = Bitter({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const Home: React.FC = async () => {
  return (
    <main id="main" className={roboto.className}>
      {/* section_1_start */}
      <section id="Main" className=" overflow-hidden min-h-screen relative ">
        {/* ------------------------------------------------------------------------------------------------------------------- */}
        <Section_1 />
        {/* ---------------------------------------------------------------------------------------------------------------- */}
        {/* page_section_start */}
        <div className=" pt-20 absolute text-white  top-0 w-full h-full ">
          {/* section_top_start */}
          <div className="  h-1/5 flex items-center justify-around max-md:hidden">
            <div className="">
              <Image
                id="topReact_Html"
                src={"/all_svg/html.svg"}
                alt="html"
                width={120}
                height={120}
              />
            </div>
            <div className="">
              <Image
                id="topReact_React"
                src={"/all_svg/react.svg"}
                alt="react"
                width={180}
                height={180}
              />
            </div>
          </div>
          {/* section_top_end */}

          <div className=" h-4/5 max-md:mt-20">
            <h1
              id="greetingText"
              className=" flex flex-col ld:flex lg:flex-row lg:justify-center text-center max-sm:text-5xl sm:text-6xl lg:text-7xl font-semibold opacity-90"
            >
              <span>Let's See_</span>
              <span>My Portfolio</span>
            </h1>

            <div id="subText" className={ibm_plex_sans.className}>
              <h1 className=" text-center">
                I am on a mission to create a website for clients.
              </h1>
              <h1 className=" text-center">
                It's defiantly help you to create your pritty website more
                beautiful or new
              </h1>
            </div>

            <div className=" flex items-center justify-center mt-5">
              <button id="exploreBtn" className=" w-52 h-10 rounded-sm">
                Explore
              </button>
            </div>

            {/* animation_2_start */}
            <div className="  h-20 max-md:hidden">
              <div className="  h-full flex items-center justify-around">
                <div className="">
                  <Image
                    id="topReact_Tailwind"
                    src={"/all_svg/tailwind.svg"}
                    alt="css"
                    width={250}
                    height={250}
                  />
                </div>
                <div className="">
                  <Image
                    id="topReact_Js"
                    src={"/all_svg/js.svg"}
                    alt="js"
                    width={250}
                    height={250}
                  />
                </div>
              </div>
            </div>
            {/* animation_2_end */}

            <div id="ScrollDiv" className=" mt-5 max-md:mt-20">
              <h1 id="ScrollText" className=" text-center text-2xl">
                Please! scroll down:
              </h1>
              <div className=" flex items-center justify-center">
                <div>
                  <Image
                    id="downArrow"
                    className=""
                    src={"/all_svg/arrow-down-s-line.svg"}
                    alt="down"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* page_section_end */}
      </section>
      {/* section_1_end */}
      {/* -------------------------------------------------------------------------------------------------------------------------- */}
      {/* section_2 Start */}
      <section
        id="section_2"
        className=" max-md:pr-5 max-md:pl-5 pt-5 overflow-hidden "
      >
        <div className=" h-full">
          <Text_Box text={"My Goal"} />
          <div className="  flex items-center justify-center flex-col">
            <div
              id="commonAnimation"
              className=" pt-32 flex items-end justify-center  p-5 mt-5 max-sm:text-sm "
            >
              <p className={`${bitter.className} sm:w-full md:w-4/5 lg:3/5`}>
                As a web developer skilled in Next.js, MongoDB, JavaScript,
                HTML, CSS, Tailwind CSS, and TypeScript, my goal is to create
                high-performance, scalable web applications that provide
                seamless user experiences. I aim to leverage modern technologies
                and best practices to build innovative and robust solutions that
                meet client needs and exceed expectations. By staying updated
                with the latest industry trends and continuously honing my
                skills, I strive to deliver efficient, maintainable, and
                aesthetically pleasing web applications.
              </p>
            </div>

            <div className=" w-full">
              <h1 className=" text-center underline underline-offset-4">
                Projects
              </h1>
              <InfoCard text={"fgdgdfg"} />
            </div>
            <div
              id="commonAnimation"
              className={`${bitter.className} pt-32 flex items-end justify-center  p-5 mt-5  `}
            >
              <ul className=" list-inside list-decimal  sm:text-base md:w-4/5 sm:w-full  max-sm:text-sm ">
                <li id="commonAnimation" className="">
                  <p className=" sm:w-full md:w-4/5 lg:3/5 ">
                    Next.js: Next.js is a React framework that enables
                    server-side rendering and static site generation. It
                    simplifies the development of fast and scalable web
                    applications by providing features like automatic code
                    splitting, optimized performance, and built-in routing.
                  </p>
                </li>
                <li id="commonAnimation" className="">
                  <p className=" sm:w-full md:w-4/5 lg:3/5 ">
                    JavaScript: JavaScript is a versatile, high-level
                    programming language used to create dynamic and interactive
                    content on the web. It is a core technology of web
                    development, enabling the implementation of complex features
                    on web pages.
                  </p>
                </li>
                <li id="commonAnimation" className="">
                  <p className=" sm:w-full md:w-4/5 lg:3/5 ">
                    HTML (HyperText Markup Language): HTML is the standard
                    markup language used to create and structure content on the
                    web. It forms the backbone of web pages, allowing the
                    inclusion of text, images, links, and other media.
                  </p>
                </li>
                <li id="commonAnimation" className="">
                  <p className=" sm:w-full md:w-4/5 lg:3/5 ">
                    CSS (Cascading Style Sheets): CSS is a style sheet language
                    used to describe the presentation of a document written in
                    HTML. It controls the layout, colors, fonts, and overall
                    visual appearance of web pages, ensuring a consistent and
                    aesthetically pleasing design.
                  </p>
                </li>
                <li id="commonAnimation" className="">
                  <p className=" sm:w-full md:w-4/5 lg:3/5 ">
                    MongoDB: MongoDB is a NoSQL database known for its
                    flexibility, scalability, and performance. It stores data in
                    JSON-like documents, allowing for dynamic schema design,
                    making it ideal for applications with evolving data
                    requirements and real-time data processing needs.
                  </p>
                </li>
                <li id="commonAnimation" className="">
                  <p className=" sm:w-full md:w-4/5 lg:3/5 ">
                    Redux Toolkit: Redux Toolkit is an official, opinionated,
                    and powerful set of tools for efficient Redux development.
                    It simplifies the process of writing Redux logic, reducing
                    boilerplate code and improving developer experience with
                    built-in best practices and utilities.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* section_2 end */}
      {/* --------------------------------------------------------------------------------------------------------- */}
      {/* section_3_start */}
      <section
        className=" overflow-hidden relative max-sm:pt-10 pt-20 "
        id="section_3"
      >
        {/* _________________________________________________________________________________________________________ */}
        {/* background_section_start */}
        <div className="  w-full h-full flex items-center justify-center">
          <div
            id="ring_1"
            className=" flex items-center justify-center  rounded-full"
          ></div>
          <Image
            className=" commonAnimationrightforCube translate-x-full absolute max-sm:w-40 max-sm:h-40"
            id="commonAnimationright"
            src={"/all_svg/blue-square.svg"}
            alt="blue_squire"
            width={200}
            height={200}
          />
        </div>
        {/* background_section_end */}
        {/* ______________________________________________________________________________________________________ */}
        {/* section_3_main_start */}
        <div className={`${bitter.className} p-5 mt-20 max-sm:mt-10 `}>
          {/* card_1_start */}
          <div className=" flex items-center justify-center">
            <div
              id="commonAnimation"
              className=" card_box flex gap-5 justify-between max-md:flex-col max-md:gap-5 max-md:items-center  w-4/5  max-sm:w-full rounded-md "
            >
              <div className=" borderBox md:w-72 md:h-72 lg:w-96 lg:h-96 sm:h-96 sm:w-96 max-sm:h-72 max-sm:w-72 rounded-md overflow-hidden">
                {/* <Image src={"https://cdn.pixabay.com/photo/2023/02/15/20/01/ai-generated-7792597_960_720.jpg"} alt="img" height={500} width={500} className=" w-full h-full"/> */}
                <video
                  src="/videos/car_video.mp4"
                  muted
                  autoPlay
                  loop
                  className=" object-cover h-full w-full borderBox md:w-72 md:h-72 lg:w-96 lg:h-96 sm:h-96 sm:w-96 max-sm:h-72 max-sm:w-72 rounded-md overflow-hidden"
                />
              </div>
              <div
                id="commonAnimation"
                className=" borderBox bg-slate-900 p-2 rounded-md md:w-72 md:h-72 lg:w-96 lg:h-96 sm:h-96 sm:w-96 max-sm:h-72 max-sm:w-72 md:mt-20"
              >
                <h1 className=" text-center underline underline-offset-4 mt-2">
                  About Animation
                </h1>
                <p className="  text-xs  mt-2 lg:text-sm">
                  Animated websites offer numerous benefits that enhance user
                  experience and engagement. By incorporating animations,
                  websites can create a more interactive and visually appealing
                  environment. Animations can guide users through the site,
                  highlight important information, and make navigation
                  intuitive. They can also improve storytelling, making content
                  more memorable and impactful. Additionally, animations can
                  provide feedback, indicate loading processes, and make the
                  overall experience more enjoyable. Ultimately, animated
                  websites can boost user retention, increase conversion rates,
                  and differentiate a brand in a competitive market.
                </p>
              </div>
            </div>
          </div>
          {/* card_1_end */}
          {/* card_2_start */}
          <div className=" relative flex items-center justify-center mt-20 max-md:mt-10">
            <div
              id="commonAnimationleft"
              className=" -top-10 absolute max-md:hidden"
            >
              <Image
                id="triangle"
                src={"/all_svg/triangle.svg"}
                alt="triangle"
                width={100}
                height={100}
              />
            </div>
            <div
              id="commonAnimation"
              className=" card_box  flex gap-5 justify-between max-md:flex-col max-md:gap-5 max-md:items-center  w-4/5 max-sm:w-full rounded-md "
            >
              <div className=" border md:w-72 md:h-72 lg:w-96 lg:h-96 sm:h-96 sm:w-96 max-sm:h-72 max-sm:w-72 md:mt-20 ">
                {/* <Image src={""} alt="img" height={500} width={500}/> */}
                <video
                  src="/videos/horseAniamtion.mp4"
                  muted
                  autoPlay
                  loop
                  className=" object-cover h-full w-full borderBox md:w-72 md:h-72 lg:w-96 lg:h-96 sm:h-96 sm:w-96 max-sm:h-72 max-sm:w-72 rounded-md overflow-hidden"
                />
              </div>

              <div
                id="commonAnimation"
                className=" borderBox bg-slate-900 p-2 rounded-md md:w-72 md:h-72 lg:w-96 lg:h-96 sm:h-96 sm:w-96 max-sm:h-72 max-sm:w-72 md:mt-48"
              >
                <h1 className=" text-center underline underline-offset-4 mt-2">
                  Full functionality
                </h1>
                <p className="  text-xs mt-2 lg:text-sm">
                  A fully functional website offers numerous benefits that can
                  significantly enhance a business's online presence and
                  performance. By providing a seamless user experience, such
                  websites ensure that visitors can easily navigate, find
                  information, and complete desired actions, like making
                  purchases or contacting support. Full functionality includes
                  responsive design, ensuring compatibility across various
                  devices and browsers, and robust performance to handle high
                  traffic without issues.These capabilities lead to increased
                  user satisfaction, higher engagement, improved SEO rankings,
                  and ultimately, greater conversion rates and business success.
                </p>
              </div>
            </div>
          </div>
          {/* card_2_end */}

          <div className=" mt-10">
            <h1
              id="commonAnimation"
              className=" text-center text-2xl text-blue-600 font-semibold"
            >
              {" "}
              I have come here
              <br /> to make your dream real
            </h1>

            <div className={` mt-5`}>
              <ScrollSkills />
            </div>
          </div>
        </div>

        <div></div>
        {/* section_3_main_end*/}
      </section>
      {/* section_3_end */}

      {/* ------------------------------------------------------------------------------------------------------------------ */}

      {/* section_4_start */}
      <section className=" pr-5 pl-5 overflow-hidden">
        <h1
          id="commonAnimation"
          className=" underline underline-offset-4 text-center text-2xl"
        >
          My mission
        </h1>
        <p
          id="commonAnimation"
          className={` mt-5 max-md:text-sm pr-10 pl-10 max-md:pl-5 max-md:pr-5`}
        >
          As a web developer specializing in React, Next.js, MongoDB,
          JavaScript, HTML, CSS, Tailwind, and Redux, my mission is to create
          dynamic, efficient, and user-centric web applications. I aim to
          deliver seamless user experiences by leveraging modern technologies
          and frameworks. Utilizing React and Next.js, I build scalable
          front-end interfaces, while MongoDB ensures robust data management.
          JavaScript provides the core functionality, enhanced by HTML and CSS
          for structured and visually appealing content. Tailwind CSS enables
          responsive and attractive designs, and Redux ensures efficient state
          management. My goal is to develop innovative solutions that meet user
          needs and drive business success.
        </p>

        <FreeLancingField />
      </section>
      {/* section_4_end */}

      {/* bottom_section_start */}

      {/* bottom_section_end */}
    </main>
  );
};

export default Home;
