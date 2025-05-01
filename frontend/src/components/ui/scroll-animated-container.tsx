"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimatedContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    gsap.set(element, {
      opacity: 0.8,
      rotateX: 60,
      scale: 0.6,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "80% 80%",
        scrub: 0.5,
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    tl.to(element, {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className="w-3/5 rounded-3xl"
      style={{
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        willChange: "transform",
        perspective: "1000px",
      }}
    >
      <div
        ref={containerRef}
        className="rounded-2xl overflow-hidden origin-bottom"
      >
        {children}
      </div>
    </div>
  );
}
