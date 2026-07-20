import { Icon } from "@iconify/react";
import React from "react";

function ProductCard() {
  return (
    <div className="h-72 w-56 bg-card rounded-xl shadow-md flex flex-col items-center justify-between p-2">
      <div className="h-1/2 w-full rounded-xl bg-gray-200"></div>
      <div className="w-full py-2 flex-1 flex flex-col justify-between">
        <h1 className="text-primary font-semibold text-lg line-clamp-1">
          The Snow Adventurer
        </h1>
        <div className="flex justify-start items-center">
          <div className="flex items-center gap-1">
            <span>
              <Icon
                width={18}
                icon="mingcute:time-duration-line"
                className="text-ring"
              />
            </span>
            <span className="text-lg">6</span>
          </div>
          <Icon icon="bi:dot" className="text-xl text-ring" />
          <div className="flex items-center gap-1">
            <span>
              <Icon
                width={18}
                icon="material-symbols:star-rounded"
                className="text-accent"
              />
            </span>
            <span className="text-lg">5</span>
          </div>
        </div>
        <div className="flex items-center">
          <span>
            <Icon width={24} icon="boxicons:dollar" className="text-primary" />
          </span>
          <span className="text-2xl text-primary">1200</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
