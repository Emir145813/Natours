import Image from "next/image";
import React from "react";
import AppButton from "./ui/app-buttom";

function TourNotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center space-y-4">
        <Image
          src={"/images/tour-not-found.png"}
          alt="404"
          width={400}
          height={400}
        />
        <div className="flex flex-col gap-2">
          <span className="text-6xl font-black text-primary">Error</span>
          <span className="text-2xl text-foreground font-semibold">
            Tour Not Found
          </span>
        </div>
        <AppButton href="/">Go Home</AppButton>
      </div>
    </div>
  );
}

export default TourNotFound;
