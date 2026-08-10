import { Icon } from "@iconify/react";
import React from "react";

export function SlideRight() {
  return (
    <div className="bg-background/50 backdrop-blur-md p-1 border rounded-full flex justify-center items-center pointer">
      <Icon icon="mingcute:right-fill" className="text-primary text-3xl" />
    </div>
  );
}

export function SlideLeft() {
  return (
    <div className="bg-background/50 p-1 backdrop-blur-md border rounded-full flex justify-center items-center pointer ">
      <Icon icon="mingcute:left-fill" className="text-primary text-3xl" />
    </div>
  );
}
