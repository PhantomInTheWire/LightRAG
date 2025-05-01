"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RotatingText from "@/components/ui/rotating-text";

gsap.registerPlugin(ScrollTrigger);

export default function Text() {
  const containerRef = useRef(null);

  useEffect(() => {
    const paragraphs = containerRef.current.querySelectorAll(".paragraph");

    paragraphs.forEach((para: Element) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: para,
          start: "top 30%",
          end: "top -20%",
          scrub: 1,
          // markers: true,
          pin: true,
          toggleActions: "start pause reverse reset",
        },
      });
      tl.from(para, { opacity: 0 });

      // Fade-in animation
      tl.fromTo(para, { opacity: 0 }, { opacity: 1 });

      // Fade-out animation
      tl.fromTo(para, { opacity: 1 }, { opacity: 0 });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[170vh] flex flex-col items-center gap-64"
    >
      <div className="paragraph text-[3rem] text-center opacity-0">
        <RotatingText
          text="Do you find your learning resources"
          titles={[
            "boring",
            "uninteractive",
            "generic",
            "unsatisfying",
            "incomplete",
          ]}
        />
      </div>
      <p className="paragraph text-[3rem] text-center opacity-0">
        We heard you!
      </p>
      <p className="paragraph text-[3rem] text-center opacity-0">Introducing</p>
    </div>
  );
}
