"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

export default function CallToValue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
      whileInView={{ opacity: 1 }}
      className="w-[70%] flex flex-col items-center mt-28 py-16 px-8 bg-muted rounded-2xl"
    >
      <h1 className="text-[2rem] font-semibold mt-4">
        Learn smarter, faster, easier.
      </h1>
      <p className="text-muted-foreground text-lg">
        Upload your content, and start your learning journey.
      </p>
      <Button
        variant={"default"}
        className="w-60 rounded-full mt-8 py-6 text-lg font-medium"
      >
        Get Started
      </Button>
    </motion.div>
  );
}
