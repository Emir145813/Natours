import AppButton from "@/components/ui/app-buttom";
import Image from "next/image";
import React from "react";

function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center space-y-4">
        <Image src={"/images/404.png"} alt="404" width={400} height={400} />
        <div className="flex flex-col gap-2">
          <span className="text-9xl font-black text-primary">404</span>
          <span className="text-2xl text-foreground font-semibold">
            Opps! Are you lost ?
          </span>
        </div>
        <AppButton href="/">Go Home</AppButton>
      </div>
    </div>
  );
}

export default NotFound;
