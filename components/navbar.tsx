import React from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import NavLinks from "./navLinks";

function NavBar() {
  

  return (
    <div className="w-full fixed mt-4">
      <Container>
        <div className="bg-background/70 backdrop-blur-md p-2 rounded-full shadow-sm grid grid-cols-3 items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <Image
              src="/images/logo-nav.png"
              alt="Natours"
              width={50}
              height={50}
              className="rounded-full border-2 border-third"
            />
            <span className="text-third font-bold text-lg">NATOURS</span>
          </div>
          <div className="flex justify-center">
            <NavLinks/>
          </div>
          <div className="flex justify-end items-center">
            <div className="hover:bg-third border-2 border-third rounded-full flex flex-row-reverse items-center gap-2 pl-4 transition-all duration-300 group">
              <div className="p-2 rounded-full bg-third group-[]">
                <Icon className="text-background text-2xl" icon="griddy-icons:user-filled"/>
              </div>
              <Link href="/login" className="text-third font-bold group-hover:text-background transition-all duration-300">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
