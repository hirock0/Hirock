"use client";

import { useScroll, useSpring } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Autoplay, Navigation, Pagination, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import slice, { AllbackendData } from "@/redux/slices/slice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import Style from "./infocard.module.css";
interface Props {
  text: string;
}
const InfoCard: React.FC<Props> = (props) => {
  const ref: any = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 1"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });
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

  const AllanimationRight = () => {
    const Text1 = document.querySelectorAll("#commonAnimationright");
    const windowHeight = window.outerHeight - 200;
    Text1.forEach((item: any, idx: any) => {
      document.addEventListener("scroll", (e: any) => {
        const ScrollHeight = item.getBoundingClientRect().top;
        if (windowHeight > ScrollHeight) {
          item.style.transform = `translateX(${0})`;
          item.style.transition = "1s";
          item.style.opacity = "1";
        } else {
          item.style.transform = `translateX(${100}%)`;
          item.style.opacity = "0";
        }
      });
    });
  };

  const AllanimationLeft = () => {
    const Text1 = document.querySelectorAll("#commonAnimationleft");
    const windowHeight = window.outerHeight - 200;
    Text1.forEach((item: any, idx: any) => {
      document.addEventListener("scroll", (e: any) => {
        const ScrollHeight = item.getBoundingClientRect().top;
        if (windowHeight > ScrollHeight) {
          item.style.transform = `translateX(${0})`;
          item.style.transition = "1s";
          item.style.opacity = "1";
        } else {
          item.style.transform = `translateX(${-100}%)`;
          item.style.opacity = "0";
        }
      });
    });
  };

  const useselector = useSelector((state: any) => state.slice.data);
  const dispatch = useDispatch();

  useEffect(() => {
    AllslideTopAnimation();
    AllanimationRight();
    AllanimationLeft();
    dispatch(AllbackendData());
  }, []);

  return (
    <div className={`  w-full  mt-5 p-5 `}>
      <motion.section
        id="ProjectDiv"
        ref={ref}
        style={{ scale: scaleX }}
        className=" max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-full   "
      >
        {/* slide_1_start */}
        <div className="hidden lg:block">
          <div className=" max-sm:w-96 sm:w-96 md:w-full ">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              autoplay={{
                delay: 5000,
                reverseDirection: true,
              }}
              modules={[Pagination, Navigation, Autoplay]}
            >
              {useselector.Allprojects !== undefined ? (
                useselector.Allprojects.map((item: any) => (
                  <SwiperSlide key={item._id}>
                    <div className="rounded-md relative overflow-hidden h-96 w-96 max-sm:w-72 max-sm:h-72">
                      <Image
                        src={item.projectImage}
                        alt="img"
                        width={500}
                        height={500}
                        className=" object-cover hover:scale-95"
                      />
                      <div className=" absolute bottom-0 left-0 w-full opacity-90 h-2/5 max-sm:h-3/5 backdrop:filter backdrop-blur-3xl  ">
                        <div className="mt-2">
                          <h1 className=" text-center underline underline-offset-4">
                            {item.projectName}
                          </h1>
                          <p className="p-5 ">{item.projectTitle}</p>
                          <div className=" flex items-center justify-center mt-2">
                            <Link href={item.projectLink}>
                              <button
                                id="SeeItBtn"
                                className="  w-52 h-8 rounded-md"
                              >
                                See It
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <h1>Please wait...</h1>
              )}
            </Swiper>
          </div>
        </div>

        {/* slide_1_end */}

        {/* slide_2_start */}

        <div className=" hidden md:block lg:hidden">
          <div className=" max-sm:w-96 sm:w-96 md:w-full  ">
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 5000,
                reverseDirection: true,
              }}
              modules={[Pagination, Navigation, Autoplay]}
            >
              {useselector.Allprojects !== undefined ? (
                useselector.Allprojects.map((item: any) => (
                  <SwiperSlide key={item._id}>
                    <div className=" rounded-md relative overflow-hidden h-96 w-96 max-sm:w-72 max-sm:h-72">
                      <Image
                        src={item.projectImage}
                        alt="img"
                        width={500}
                        height={500}
                        className="  hover:scale-95 object-cover"
                      />
                      <div className=" absolute bottom-0 left-0 w-full opacity-90 h-2/5 max-sm:h-3/5 backdrop:filter backdrop-blur-3xl ">
                        <div className="mt-2">
                          <h1 className=" text-center underline underline-offset-4">
                            {item.projectName}
                          </h1>
                          <p className="p-5 ">{item.projectTitle}</p>
                          <div className=" flex items-center justify-center mt-2">
                            <Link href={item.projectLink}>
                              <button
                                id="SeeItBtn"
                                className="w-52 h-8 rounded-md"
                              >
                                See It
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <h1 className=" text-center">Please wait...</h1>
              )}
            </Swiper>
          </div>
        </div>
        {/* slide_2_end */}

        {/* slide_3_start */}

        <div className="sm:block max-sm:block md:hidden">
          <div className=" max-sm:w-96 sm:w-96 md:w-full sm:ml-32  max-sm:ml-24 ">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {useselector.Allprojects !== undefined ? (
                useselector.Allprojects.map((item: any) => (
                  <SwiperSlide key={item._id}>
                    <div className=" max-sm:text-xs rounded-md relative overflow-hidden h-96 w-96 max-sm:w-72 max-sm:h-72 bg-emerald-600">
                      <Image
                        src={item.projectImage}
                        alt="img"
                        width={500}
                        height={500}
                        className=" object-cover hover:scale-95"
                      />
                      <div className=" absolute bottom-0 left-0 w-full  max-sm:h-2/5 sm:h-2/6 backdrop:filter backdrop-blur-3xl opacity-90   ">
                        <div className="mt-2">
                          <h1 className=" text-center underline underline-offset-4">
                            {item.projectName}
                          </h1>
                          <p className=" pr-5 pl-5 pt-2 pb-2">
                            {item.projectTitle}
                          </p>
                          <div className=" flex items-center justify-center mt-2">
                            <Link href={item.projectLink}>
                              <button
                                id={Style.SmallBtn}
                                className="  w-48 h-6 rounded-md"
                              >
                                See It
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <h1>Please wait...</h1>
              )}
            </Swiper>
          </div>
        </div>

        {/* slide_3_end */}
      </motion.section>
    </div>
  );
};

export default InfoCard;
