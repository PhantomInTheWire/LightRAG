"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TestimonialCard from "./testimonial-card";

export const Testimonials = ({
  title,
  desc,
  testimonials,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  title: string;
  desc: string;
  testimonials: {
    avatar: string;
    name: string;
    handle: string;
    url: string;
    text: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div className="flex flex-col items-center pt-20">
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        className="text-[2.5rem] font-semibold"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        className=" text-muted-foreground"
      >
        {desc}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        ref={containerRef}
        className={cn(
          "mt-12 scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            " w-max min-w-full flex gap-4 shrink-0 flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {testimonials.map((testimonial, idx) => (
            <li
              className="max-w-[440px] relative flex-shrink-0 px-8 border-[1px] border-border rounded-2xl"
              key={idx}
            >
              <TestimonialCard person={testimonial} />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
