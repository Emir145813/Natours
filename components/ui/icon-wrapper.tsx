import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "cn";
import { IIConWrapper } from "../interfaces";

function IconWrapper({ icon, onClickHandler, fill, className }: IIConWrapper) {
  return (
    <div
      onClick={onClickHandler}
      className={cn(
        `p-2 rounded-full group transition-all duration-300 border`,
        className,
      )}
    >
      <Icon
        icon={icon}
        className={`text-2xl text-foreground group-hover:text-white transition-all duration-300`}
      />
    </div>
  );
}

export default IconWrapper;
