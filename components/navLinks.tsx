"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  {
    title: "Tours",
    href: "/tours",
    icon: "material-symbols:tour-outline-rounded",
  },
  {
    title: "Destinations",
    href: "/destinations",
    icon: "majesticons:map-simple-destination-line",
  },
  {
    title: "About",
    href: "/about",
    icon: "ix:about",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: "eva:phone-call-outline",
  },
];

export function NavLinks() {
  const pathName = usePathname();
  return (
    <div className="flex md:justify-center">
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
        {navLinks.map((item) => (
          <Link href={item.href} key={item.title}>
            <li
              className={`font-medium ${pathName === item.href ? "text-third" : "text-foreground"} hover:text-third transition-all duration-300`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export function NavLinksMobile() {
  const pathName = usePathname();
  return (
    <div className="flex md:justify-start py-4">
      <ul className="flex flex-col xl:flex-row justify-start items-start gap-4 md:gap-8">
        {navLinks.map((item) => (
          <Link href={item.href} key={item.title}>
            <li
              className={`font-medium ${pathName === item.href ? "text-third" : "text-foreground"} hover:text-third transition-all duration-300 flex gap-2 items-center text-foreground/70`}
            >
              <Icon icon={item.icon} className="text-xl text-primary" />
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
