"use client";

import { useState } from "react";

const Descriptions = () => {
  const [translatorflag, setTranslatorFlag] = useState(false);

  return (
    <div className="">
      <div className=" flex items-center justify-center gap-5 p-5">
        Click Here for translating
        <input
          onClick={() => setTranslatorFlag(!translatorflag)}
          type="checkbox"
          name="translator"
          id="translate"
        />
      </div>
      <div>
        {!translatorflag ? (
          <p>
            Our team is composed of expert programmers proficient in Next.js,
            MongoDB, HTML, CSS, Tailwind CSS, and Redux. Leveraging the power of
            Next.js for server-side rendering and static site generation, we
            build high-performance web applications that are both scalable and
            efficient. Our proficiency with MongoDB ensures robust, flexible
            database solutions tailored to complex data needs. Utilizing HTML
            and CSS for structure and style, we enhance our projects with
            Tailwind CSS, bringing in highly customizable and responsive design
            elements. Additionally, our expertise in Redux guarantees state
            management is handled seamlessly, providing a smooth user experience
            across our applications. Together, we deliver innovative and
            high-quality web solutions that meet and exceed client expectations.
          </p>
        ) : (
          <p className="">
            আমাদের দলটি Next.js, MongoDB, HTML, CSS, Tailwind CSS, এবং Redux-এ
            দক্ষ প্রোগ্রামারদের নিয়ে গঠিত। সার্ভার-সাইড রেন্ডারিং এবং স্ট্যাটিক
            সাইট জেনারেশনের জন্য Next.js-এর শক্তি ব্যবহার করে, আমরা উচ্চ-দক্ষতা
            এবং স্কেলযোগ্য ওয়েব অ্যাপ্লিকেশন তৈরি করি। MongoDB-তে আমাদের দক্ষতা
            জটিল ডেটার প্রয়োজন অনুযায়ী দৃঢ়, নমনীয় ডাটাবেস সমাধান নিশ্চিত
            করে। HTML এবং CSS ব্যবহার করে কাঠামো এবং স্টাইল তৈরি করার পাশাপাশি,
            আমরা Tailwind CSS দিয়ে আমাদের প্রকল্পগুলিকে উন্নত করি, যাতে অত্যন্ত
            কাস্টমাইজযোগ্য এবং প্রতিক্রিয়াশীল ডিজাইন উপাদানগুলি যুক্ত হয়।
            এছাড়াও, Redux-এ আমাদের দক্ষতা স্টেট ম্যানেজমেন্টকে নিরবচ্ছিন্নভাবে
            পরিচালনা করে, আমাদের অ্যাপ্লিকেশনগুলিতে একটি মসৃণ ব্যবহারকারীর
            অভিজ্ঞতা প্রদান করে। একসাথে, আমরা উদ্ভাবনী এবং উচ্চ-মানের ওয়েব
            সমাধান প্রদান করি যা ক্লায়েন্টদের প্রত্যাশা পূরণ এবং অতিক্রম করে।
          </p>
        )}
      </div>
    </div>
  );
};

export default Descriptions;
