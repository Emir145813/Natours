import { Icon } from "@iconify/react";
import React from "react";

function LoadingIndicator() {
  return (
    <div className="p-2 bg-primary rounded-full">
      <Icon
        icon="line-md:loading-twotone-loop"
        className="text-4xl text-white"
      />
    </div>
  );
}

export default LoadingIndicator;
