import { Icon } from "@iconify/react";
import React from "react";

export function LoadingIndicator() {
  return (
    <div className="p-2 bg-primary rounded-full">
      <Icon
        icon="eos-icons:loading"
        className="text-4xl text-white"
      />
    </div>
  );
}

export function LoadingIndicatorMinimal() {
  return (
    <Icon icon="eos-icons:loading" className="text-white"/>
  );
}
