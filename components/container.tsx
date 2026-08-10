import React from "react";
import { IChildren } from "./interfaces";


function Container({children} : IChildren) {
  return <div className="w-[90%] mx-auto">{children}</div>;
}

export default Container;
