"use client";

import { useScroll, useSpring } from "framer-motion";
import React, { useRef} from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
}

const Text_Box: React.FC<Props> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="">
      <motion.div ref={ref} style={{ scale: scaleX }}>
        <h1 className=" underline underline-offset-8 max-sm:text-3xl sm:text-4xl md:text-4xl text-center lg:text-5xl ">
          {props.text}
        </h1>
      </motion.div>
    </div>
  );
};

export default Text_Box;
