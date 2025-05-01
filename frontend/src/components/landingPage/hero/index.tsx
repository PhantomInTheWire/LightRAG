"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PEOPLE } from "../data";
import { AnimatedTooltip, AnimatedGridPattern } from "../../ui";

type Action = {
  href: string;
  label: string;
  variant?:
    | "link"
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | null;
};

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  gradient?: boolean;
  blur?: boolean;
  title: string;
  subtitle?: React.ReactNode;
  actions?: Action[];
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
}

const HeroSection = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      gradient = true,
      blur = true,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref
  ) => {
    const containerVariants = {
      hidden: {
        opacity: 1, // Keeps the container visible
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.4, // Delay between child animations
        },
      },
    };

    // Variants for individual elements
    const itemVariants = {
      hidden: {
        opacity: 0,
        y: 100,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          ease: "easeInOut",
        },
      },
    };

    return (
      <section
        id="home"
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[40rem] w-full py-16 flex-col items-center justify-end bg-background",
          className
        )}
        {...props}
      >
        {gradient && (
          <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center pt-16">
            {blur && (
              <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />
            )}

            {/* Main glow */}
            <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-brand/60 opacity-80 blur-3xl" />

            {/* Lamp effect */}
            <motion.div
              initial={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "16rem" }}
              className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-brand/60 blur-2xl"
            />

            {/* Top line */}
            <motion.div
              initial={{ width: "15rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "30rem" }}
              className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-brand/60"
            />

            {/* Left gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-brand/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
            >
              <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            {/* Right gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-brand/60 [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>
          </div>
        )}

        {/* Contents */}
        <div className="relative z-50 pt-40 container flex justify-end flex-1 flex-col px-5 md:px-10 gap-4">
          {/* <div
            className={cn(
              "group mx-auto rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedGradientText>
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                ✨ Introducing Minerva
              </span>
            </AnimatedGradientText>
          </div> */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            <motion.h1
              variants={itemVariants}
              // initial={{ y: 100, opacity: 0.5 }}
              viewport={{ once: true }}
              // transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              // whileInView={{ y: 0, opacity: 1 }}
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
                titleClassName
              )}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                variants={itemVariants}
                // initial={{ opacity: 0.5 }}
                viewport={{ once: true }}
                // transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
                // whileInView={{ opacity: 1 }}
                className={cn(
                  "mt-4 text-xl text-muted-foreground",
                  subtitleClassName
                )}
              >
                {subtitle}
              </motion.p>
            )}
            {actions && actions.length > 0 && (
              <motion.div
                variants={itemVariants}
                className={cn("buttons flex gap-4", actionsClassName)}
              >
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant || "default"}
                    asChild
                  >
                    <Link className="nav-link" href={action.href}>
                      {action.label}
                    </Link>
                  </Button>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Animated tooltip */}
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 1.6, duration: 0.8 }}
          whileInView={{ opacity: 1 }}
          className="relative z-50 container flex justify-center flex-col px-5 md:px-10 pt-24 gap-4"
        >
          <div className="flex flex-col items-center gap-4">
            <AnimatedTooltip items={PEOPLE} />
            <p className="text-muted-foreground">Loved by 10,000+ learners</p>
            {/* <p className="text-muted-foreground">
              from 200+ Universities worldwide
            </p> */}
          </div>
        </motion.div>

        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatdelay={1}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-40%] h-[200%] skew-y-12 -z-10"
          )}
        />
        {/* <div className="-z-20 w-full absolute">
          <ParticlesBg />
        </div> */}
      </section>
    );
  }
);
HeroSection.displayName = "HeroSection";

export { HeroSection };
