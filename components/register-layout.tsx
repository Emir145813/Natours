import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IChildren {
  children: React.ReactNode;
  layout: "signin" | "signup";
}

function RegisterLayout({ children, layout }: IChildren) {
  return (
    <div className="h-screen bg-[url('/images/register/register-bg.png')] bg-cover bg-right">
      <div className="bg-linear-to-b from-background/30 to-black/0 h-full flex flex-col items-center justify-center">
        <div className="bg-card rounded-2xl border p-5 w-1/3 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col leading-[130%]">
              <span className="text-2xl text-foreground/50 font-kameron font-bold leading-[120%]">
                The world is waiting for YOU.
              </span>
              <span className="text-2xl text-primary font-kameron leading-[140%] font-bold">
                Lets explore it together
              </span>
            </div>
            <Link href="/">
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={70}
                height={70}
              />
            </Link>
          </div>
          <hr />
          <div className="space-y-2 w-full">
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <span className="text-2xl font-semibold font-playwrite text-primary block ">
                  {layout === "signin"
                    ? "Wellcome Back"
                    : "Create your account"}
                </span>
                <span className="text-foreground/50 font-medium">
                  {layout === "signin"
                    ? "Sign in to continue our adventure"
                    : "Lets get you started"}
                </span>
              </div>
              <Icon
                icon={
                  layout === "signin"
                    ? "ic:round-login"
                    : "mingcute:user-add-line"
                }
                className="text-primary text-5xl bg-primary/30 p-2 rounded-full"
              />
            </div>
          </div>
          <hr />
          {children}
        </div>
      </div>
    </div>
  );
}

export default RegisterLayout;
