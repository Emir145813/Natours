import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-start gap-2 cursor-pointer w-fit"
    >
      <Image
        src="/images/logo-nav.png"
        alt="Natours"
        width={50}
        height={50}
        className="rounded-full  border-2 border-third"
      />
      <span className="text-third font-bold text-lg">NATOURS</span>
    </Link>
  );
}

export default NavLogo;
