"use client";
import Style from "./freelancingfield.module.css";
import Image from "next/image";
import { Bitter } from "next/font/google";
import { useEffect, useState } from "react";
const bitter = Bitter({
  weight: ["400", "700"],
  subsets: ["latin"],
});
import { Tiro_Bangla } from "next/font/google";
const tiro_bangla = Tiro_Bangla({
  weight: ["400", "400"],
  subsets: ["latin"],
})
const FreelancerSiteDetails = {
  row1: [
    {
      id: 1,
      image: "/images/upwork.png",
      descriptions:
        "আপওয়ার্ক হল একটি জনপ্রিয় অনলাইন ফ্রিল্যান্স মার্কেটপ্লেস যেখানে ফ্রিল্যান্সাররা বিভিন্ন ধরনের প্রকল্পে কাজ করার সুযোগ পান। এখানে ওয়েব ডেভেলপমেন্ট, লেখালেখি, গ্রাফিক ডিজাইন, মার্কেটিং, এবং আরও অনেক সেবা প্রদান করা হয়। আপওয়ার্ক ফ্রিল্যান্সার এবং ক্লায়েন্টদের মধ্যে একটি নিরাপদ ও দক্ষ প্ল্যাটফর্ম সরবরাহ করে, যেখানে ফ্রিল্যান্সাররা তাদের দক্ষতা ও অভিজ্ঞতার ভিত্তিতে কাজের জন্য দরপত্র দিতে পারেন। এটি বিশ্বব্যাপী ফ্রিল্যান্সারদের জন্য একটি নির্ভরযোগ্য ও সুবিধাজনক প্ল্যাটফর্ম।",
    },
    {
      id: 2,
      image: "/images/fiverr.png",
      descriptions:
        "ফাইভার হল একটি অনলাইন মার্কেটপ্লেস যেখানে ফ্রিল্যান্সাররা তাদের বিভিন্ন ধরনের সেবা প্রদান করে। এখানে গ্রাফিক ডিজাইন, লেখালেখি, প্রোগ্রামিং, ভিডিও এডিটিং, এবং আরও অনেক সেবা পাওয়া যায়। ফাইভার প্ল্যাটফর্মটি ক্রেতা এবং বিক্রেতার মধ্যে সংযোগ স্থাপন করে, যেখানে বিক্রেতারা তাদের কাজের জন্য নির্দিষ্ট মূল্য নির্ধারণ করে। এটি বিশ্বব্যাপী ফ্রিল্যান্সার এবং ক্লায়েন্টদের জন্য একটি জনপ্রিয় প্ল্যাটফর্ম।",
    },
    {
      id: 3,
      image: "/images/peopleperhour.png",
      descriptions:
        "পিপলপারআওয়ার একটি অনলাইন ফ্রিল্যান্সিং প্ল্যাটফর্ম যেখানে ফ্রিল্যান্সাররা ঘণ্টা ভিত্তিতে তাদের সেবা প্রদান করে। এখানে ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন, কন্টেন্ট রাইটিং, ডিজিটাল মার্কেটিং, এবং আরও অনেক সেবা পাওয়া যায়। পিপলপারআওয়ার ফ্রিল্যান্সার এবং ক্লায়েন্টদের মধ্যে সহজে যোগাযোগ স্থাপন করতে সহায়তা করে, যেখানে ক্লায়েন্টরা তাদের প্রকল্পের জন্য দক্ষ ফ্রিল্যান্সার খুঁজে পেতে পারেন এবং ফ্রিল্যান্সাররা তাদের দক্ষতা অনুযায়ী কাজ করতে পারেন। এটি বিশ্বব্যাপী ফ্রিল্যান্সারদের জন্য একটি জনপ্রিয় ও নির্ভরযোগ্য প্ল্যাটফর্ম।",
    },
  ],
  row2: [
    {
      id: 4,
      image: "/images/keywork.png",
      descriptions:
        "কিওয়ার্ক একটি অনলাইন ফ্রিল্যান্সিং প্ল্যাটফর্ম যেখানে ফ্রিল্যান্সাররা বিভিন্ন ধরনের কাজের জন্য নিয়োগ পেতে পারেন। এই প্ল্যাটফর্মে ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন, কন্টেন্ট রাইটিং, এবং অন্যান্য অনেক সেবা প্রদান করা হয়। কিওয়ার্ক ফ্রিল্যান্সার এবং ক্লায়েন্টদের মধ্যে সহজে যোগাযোগ স্থাপন করতে সহায়তা করে, যেখানে ফ্রিল্যান্সাররা তাদের দক্ষতা ও অভিজ্ঞতার ভিত্তিতে কাজের জন্য আবেদন করতে পারেন এবং ক্লায়েন্টরা দক্ষ ফ্রিল্যান্সার খুঁজে পেতে পারেন। এটি একটি নিরাপদ এবং ব্যবহারবান্ধব প্ল্যাটফর্ম, যা বিশ্বব্যাপী ফ্রিল্যান্সারদের জন্য অত্যন্ত জনপ্রিয়।",
    },
    {
      id: 5,
      image: "/images/freelancer.png",
      descriptions:
        "ফ্রিল্যান্সার.কম একটি বৃহত্তম অনলাইন ফ্রিল্যান্সিং প্ল্যাটফর্ম যেখানে ফ্রিল্যান্সাররা বিভিন্ন ধরনের কাজের জন্য নিয়োগ পেতে পারেন। এই প্ল্যাটফর্মে ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন, কন্টেন্ট রাইটিং, ডাটা এন্ট্রি, এবং আরও অনেক সেবা পাওয়া যায়। ফ্রিল্যান্সার.কম ফ্রিল্যান্সার এবং ক্লায়েন্টদের মধ্যে সরাসরি যোগাযোগ স্থাপন করে, যেখানে ক্লায়েন্টরা তাদের প্রকল্পের জন্য দক্ষ ফ্রিল্যান্সার খুঁজে পেতে পারেন এবং ফ্রিল্যান্সাররা তাদের দক্ষতা ও অভিজ্ঞতার ভিত্তিতে কাজের জন্য আবেদন করতে পারেন। এটি বিশ্বব্যাপী ফ্রিল্যান্সার এবং ক্লায়েন্টদের জন্য একটি জনপ্রিয় ও নির্ভরযোগ্য প্ল্যাটফর্ম।",
    },
    {
      id: 6,
      image: "/images/linkedin.png",
      descriptions:
        "লিঙ্কডইন একটি পেশাদার নেটওয়ার্কিং প্ল্যাটফর্ম যেখানে ব্যবহারকারীরা তাদের পেশাদার প্রোফাইল তৈরি করতে, কর্মজীবনের সংযোগ স্থাপন করতে এবং চাকরির সুযোগ খুঁজে পেতে পারেন। এখানে ব্যবহারকারীরা তাদের কর্মজীবনের অভিজ্ঞতা, দক্ষতা এবং শিক্ষাগত যোগ্যতা প্রদর্শন করতে পারেন। লিঙ্কডইন নিয়োগকর্তা এবং চাকরি প্রার্থীদের মধ্যে সহজ যোগাযোগ স্থাপন করে, যেখানে নিয়োগকর্তারা দক্ষ কর্মী খুঁজে পেতে পারেন এবং চাকরি প্রার্থীরা তাদের পছন্দের চাকরির জন্য আবেদন করতে পারেন। এটি পেশাদার উন্নয়ন এবং নেটওয়ার্কিংয়ের জন্য একটি গুরুত্বপূর্ণ এবং জনপ্রিয় প্ল্যাটফর্ম।",
    },
  ],
};

const FreeLancingField = () => {
  const Row_1 = FreelancerSiteDetails.row1;
  const Row_2 = FreelancerSiteDetails.row2;
  const [description, setDescription] = useState({ descrip: "", flag: false });
  
  const PopupData = (des: any) => {
    if (!description.flag) {
      setDescription({ ...description, descrip: des, flag: true });
    } else {
      setDescription({ ...description, descrip: "" });
    }
  };

  const windowEvent = () => {
    const popupDiv = document.querySelector("#popup") as HTMLElement;
    const row1Div = document.querySelector("#row1") as HTMLElement;
    const row2Div = document.querySelector("#row2") as HTMLElement;
    document.addEventListener("click", (e: any) => {
      if (
        !popupDiv.contains(e.target) &&
        !row1Div.contains(e.target) &&
        !row2Div.contains(e.target)
      ) {
        setDescription({ ...description, flag: false });
      }
    });
  };
  useEffect(() => {
    windowEvent();
  }, []);

  return (
    <div
      id={Style.main}
      className={`${bitter.className} pr-10 pl-10 max-sm:pr-5 max-sm:pl-5`}
    >
      <div className=" mt-5">
        <h1 className=" text-center text-2xl">Freelancing Fields</h1>
        <div className="  relative mt-5 flex flex-col items-center gap-5 justify-center">
          {/* popup_start */}
          <div
            id="popup"
            className={`${
              !description.flag ? "invisible" : "visible"
            } z-50 bg-slate-900  rounded-md absolute top-0 h-full w-full lg:w-3/5 flex items-center justify-center `}
          >
            <div>
              <p className={`${Style.popupDiv} ${tiro_bangla.className}  p-5 md:text-xl `}>
                {description.descrip}
              </p>
            </div>
          </div>
          {/* popup_end */}

          <div id="row1" className="  flex justify-around items-center gap-5">
            {Row_1.map((item: any) => (
              <div
                key={item.id}
                id="commonAnimationleft"
                className=" field object-cover  bg-white cursor-pointer p-2 flex items-center justify-center rounded-md overflow-hidden max-sm:w-20 max-sm:h-20 md:w-40 sm:w-40 sm:h-40 md:h-40 lg:w-52 lg:h-52 "
                onClick={() => PopupData(item.descriptions)}
              >
                <Image
                  src={item.image}
                  alt="img"
                  width={500}
                  height={500}
                  className=" "
                />
              </div>
            ))}
          </div>

          <div id="row2" className=" flex justify-around items-center gap-5">
            {Row_2.map((item: any) => (
              <div
                key={item.id}
                id="commonAnimationright"
                className=" field object-cover bg-white cursor-pointer  p-2 flex items-center justify-center rounded-md overflow-hidden max-sm:w-20 max-sm:h-20 md:w-40 sm:w-40 sm:h-40 md:h-40 lg:w-52 lg:h-52 "
                onClick={() => PopupData(item.descriptions)}
              >
                <Image
                  src={item.image}
                  alt="img"
                  width={500}
                  height={500}
                  className=" "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeLancingField;
