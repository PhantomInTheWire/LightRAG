"use client";

import { motion } from "framer-motion";
import { ScrollAnimatedContainer, MovingLogos } from "@/components/ui";
import { UNIVERSITIES } from "../data";
// import Text from "./Text";

export default function Introduction() {
  return (
    <div className="pb-40 space-y-20">
      {/* <Text /> */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        className="w-full"
      >
        <ScrollAnimatedContainer>
          <video autoPlay={true} loop muted className="roundex-3xl">
            <source src="./product-demo.mp4" type="video/mp4" />
          </video>
        </ScrollAnimatedContainer>
      </motion.div>

      {/* Moving logos */}
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        className="mt-10 rounded-md flex flex-col antialiase dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden space-y-4"
      >
        <p className="text-xl text-muted-foreground">
          Loved by top students all over the world
        </p>
        <MovingLogos items={UNIVERSITIES} direction="left" speed="normal" />
      </motion.div>
    </div>
  );
}
