"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLinks() {
  const navLinks = [
    {
      title: "Tours",
      href: "/tours",
    },
    {
      title: "Destinations",
      href: "/destinations",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const pathName = usePathname();

  return (
    <ul className="flex gap-8">
      {navLinks.map((item) => (
        <Link href={item.href} key={item.title}>
          <li className={`font-medium ${pathName === item.href ? "text-third" : "text-foreground"} hover:text-third transition-all duration-300`}>
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default NavLinks;
