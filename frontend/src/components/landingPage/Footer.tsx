import { FOOTER_LINKS } from "./data";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-between mt-20 px-8 pb-6 text-muted-foreground">
      <h2>&copy; Copyright 2025 Minerva Inc.</h2>
      <div className="flex items-center gap-6">
        <nav className="flex gap-6">
          {FOOTER_LINKS.map((link, idx) => (
            <a href={link.href} target="_blank" key={idx}>
              {link.title}
            </a>
          ))}
        </nav>
        <a
          href="https://github.com/PhantomInTheWire/Minerva"
          target="_blank"
          className="bg-foreground p-1 rounded-full"
        >
          <Github className="fill-background" stroke="none" />
        </a>
      </div>
    </div>
  );
}
