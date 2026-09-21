import React from "react";
import { IChildren } from "./interfaces";
import { cn } from "cn";

function Container({ className, children }: IChildren) {
  return <div className={cn("w-[90%] mx-auto", className)}>{children}</div>;
}

export default Container;
