"use client";

import { Button } from "@/components/ui";
import { motion } from "framer-motion";
import { PRICES } from "./data";

export default function Pricing() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        className="text-[2.5rem] font-semibold"
      >
        Save hours, learn smarter.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        className=" text-muted-foreground"
      >
        Enjoy endless content uploads, chats, recorded lectures, and more.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        className="w-[50%] flex items-center justify-center gap-6 mt-12"
      >
        {PRICES.map((price, idx) => (
          <div
            key={idx}
            className={`1/3 flex flex-col px-8 py-10 ${
              price.isPrimary
                ? "bg-foreground dark:bg-muted text-background"
                : "bg-background"
            } border-2 border-border rounded-3xl space-y-3`}
          >
            <p>{price.title}</p>
            <p>
              <span className="text-[3rem] font-semibold">
                &#8377;&nbsp;{price.price}
              </span>
              /month
            </p>
            <p className="text-muted-foreground">{price.desc}</p>
            <ul
              className={`border-t-2 mt-2 py-4 space-y-2 ${
                price.isPrimary
                  ? "border-muted-foreground text-muted-foreground"
                  : "border-border text-"
              }`}
            >
              {price.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Button
              variant={"default"}
              className={`rounded-full py-6 text-lg font-medium ${
                price.isPrimary
                  ? "bg-background text-foreground hover:bg-muted"
                  : ""
              }`}
            >
              {price.button}
            </Button>
          </div>
        ))}
      </motion.div>
    </>
  );
}
