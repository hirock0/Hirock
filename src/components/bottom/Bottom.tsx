import Link from "next/link";
import Style from "./bottom.module.css";
import { Bitter } from "next/font/google";
import Image from "next/image";
const bitter = Bitter({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const Bottom = () => {
  return (
    <section id={Style.main} className={`${bitter.className} `}>
      <div
        id={Style.bottomBottom}
        className={`mt-5 backdrop:filter backdrop-blur-3xl opacity-90 pr-10 pl-10 max-sm:pr-5 max-sm:pl-5 max-md:text-sm`}
      >
        <div className="  flex h-full justify-between max-md:flex-col ">
          <div className=" flex items-center justify-center  w-full max-md:h-full">
            <p className="p-3">
              Bahadurpur,Maniramur,Jashore. Kiltia,Road,Manirampur Support:
              hirockdutta0@gmail.com Mobile:01700554293
            </p>
          </div>
          <div className=" flex items-center justify-center  w-full max-md:h-full">
            <ul className=" max-md:flex-row max-md:gap-2 max-md:text-nowrap max-md:flex-wrap max-md:items-center max-md:justify-center flex flex-col gap-4 ">
              <li className=" max-md:border-l-2 max-md:pl-2">
                <Link href={"/"}>
                  <button>Home</button>
                </Link>
              </li>
              <li className=" max-md:border-l-2 max-md:pl-2">
                <Link href={"/"}>
                  <button>About Us</button>
                </Link>
              </li>
              <li className=" max-md:border-l-2 max-md:pl-2">
                <Link href={"/"}>
                  <button>Success Page</button>
                </Link>
              </li>
              <li className=" max-md:border-l-2 max-md:pl-2">
                <Link href={"/"}>
                  <button>Termas And Conditions</button>
                </Link>
              </li>
              <li className=" max-md:border-l-2 max-md:pl-2">
                <Link href={"/"}>
                  <button>Privacy Policy</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="  w-full max-md:h-full">
            <div>
              <h1 id={Style.followusText} className=" text-center mt-5  text-xl">Follow Us</h1>
              <ul id={Style.ContactIcon} className=" flex items-center justify-between p-5 ">
                <li>
                  <Link href={""}>
                    <Image
                      src={"/all_svg/facebook-circle-fill.svg"}
                      alt="facebook"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Image
                      src={"/all_svg/instagram-line.svg"}
                      alt="instagram"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Image
                      src={"/all_svg/linkedin-box-fill.svg"}
                      alt="linkedin"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Image
                      src={"/all_svg/youtube-fill.svg"}
                      alt="youtube"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
