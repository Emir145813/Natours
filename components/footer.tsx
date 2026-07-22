import React from "react";
import Container from "./container";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

function Footer() {
  const socialLinks = [
    {
      name: "Telegram",
      icon: "basil:telegram-solid",
      href: "/",
      color: "text-blue-500",
      border: "border-blue-500",
    },
    {
      name: "Instagram",
      icon: "ri:instagram-fill",
      href: "/",
      color: "text-pink-600",
      border: "border-pink-600",
    },
    {
      name: "Gmail",
      icon: "streamline:gmail-remix",
      href: "/",
      color: "text-yellow-500",
      border: "border-yellow-500",
    },
  ];

  const supportLinks = [
    {
      title: "Contact US",
      href: "/contact",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Terms of services",
      href: "/terms-of-service",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
  ];

  const companyLinks = [
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Our Story",
      href: "/our-story",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Careers",
      href: "/careers",
    },
  ];

  const exploreLinks = [
    {
      title: "Tours",
      href: "/",
    },
    {
      title: "Destinations",
      href: "/destinations",
    },
    {
      title: "Travel Guides",
      href: "/travel-guides",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Offers",
      href: "/offers",
    },
  ];

  const footerSection = [
    {
      title: "Company",
      links: companyLinks,
    },
    {
      title: "Explore",
      links: exploreLinks,
    },
    {
      title: "Support",
      links: supportLinks,
    },
  ];

  return (
    <div className="bg-background border-t shadow-lg pt-10 mt-56">
      <Container>
        <div className="pb-10 flex space-x-20">
          <div className=" max-w-1/3 space-y-6">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
            <p className="font-medium text-black/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ipsa nam illum, ratione architecto excepturi. Earum
              suscipit, qui nisi illo ex id sint atque mollitia, impedit
              eligendi cum iste facilis.
            </p>
            <ul className="flex gap-2">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} className="hover:scale-105 transition-all">
                  <li
                    className={`border-2 w-fit ${item.color} rounded-full p-2 ${item.border}`}
                  >
                    <Icon
                      icon={item.icon}
                      className={`${item.color} text-2xl`}
                    />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 w-full">
            {footerSection.map((section) => (
              <div key={section.title} className="space-y-6">
                <h2 className="font-bold text-lg text-primary">
                  {section.title}
                </h2>
                <ul className="flex flex-col space-y-3">
                  {section.links.map((item) => (
                    <Link
                      key={item.title}
                      className="text-black/50 font-medium text-sm hover:text-primary"
                      href={item.href}
                    >
                      <li className="">{item.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-black/10 py-1">
          <div className="font-medium text-black/50 text-center flex justify-between">
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
            <div className="flex items-center gap-2">
              <span>Made With</span>
              <span>
                <Icon
                  className="text-red-500"
                  icon="solar:heart-bold-duotone"
                />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
