import Image from "next/image";
import Style from "./scrollSkill.module.css";
const ScrollSkills = () => {
  return (
    <div id={Style.main} className=" mainD relative overflow-hidden ">
      <div id={Style.ScrollDiv} className={`scrolldiv`}>
        <ul id={Style.slideUl} className=" ">
          <li>
            <Image
              src={"/images/react.png"}
              alt="react"
              width={500}
              height={500}
              className=" object-cover"
            />
          </li>
          <li>
            <Image
              src={"/images/nextjs.png"}
              alt="react"
              width={500}
              height={500}
              className=" object-cover"
            />
          </li>
          <li>
            <Image
              src={"/images/mongodb.png"}
              alt="react"
              width={500}
              height={500}
              className=" object-cover"
            />
          </li>
          <li>
            <Image
              src={"/images/redux.png"}
              alt="react"
              width={500}
              height={500}
              className=" object-cover"
            />
          </li>
          <li>
            <Image
              src={"/images/javascript.png"}
              alt="react"
              width={500}
              height={500}
              className=" object-cover"
            />
          </li>
          <li>
            <Image
              src={"/images/html.png"}
              alt="react"
              width={500}
              height={500}
              className=" object-cover"
            />
          </li>
          <li>
            <Image
              src={"/images/css.png"}
              alt="react"
              width={500}
              height={500}
              className=" object-cover"
            />
          </li>
          <li>
            <Image
              src={"/images/tailwind.png"}
              alt="react"
              width={500}
              height={500}
              className=" object-cover"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScrollSkills;
