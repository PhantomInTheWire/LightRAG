"use client";

import { useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const LINKS = [
  { title: "Home", href: "#home" },
  { title: "Features", href: "#features" },
  { title: "Getting Started", href: "#getting-started" },
  { title: "Pricing", href: "#pricing" },
];

export default function NavLinks() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId!);

        if (targetElement) {
          gsap.to(window, {
            scrollTo: { y: targetElement, autoKill: true },
            duration: 1.5,
            ease: "power2.out",
          });
        }
      });
    });

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveLink(section.id),
        onEnterBack: () => setActiveLink(section.id),
        onLeave: () => setActiveLink(""),
      });
    });

    const setActiveLink = (id: string) => {
      links.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("text-foreground");
          link.classList.remove("text-muted-foreground");
        } else {
          link.classList.remove("text-foreground");
          link.classList.add("text-muted-foreground");
        }
      });
    };

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      links.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);

  return (
    <nav className="flex items-center gap-8">
      {LINKS.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className="nav-link font-medium text-muted-foreground hover:text-primary transition-all duration-300"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
