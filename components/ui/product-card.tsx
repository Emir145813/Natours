import { Icon } from "@iconify/react";
import React from "react";

function ProductCard() {
  return (
    <div className="w-60 rounded-2xl bg-card shadow-lg p-2 flex-col gap-2">
      <div className="h-40 bg-gray-200 w-full rounded-2xl">
        {/* Tour Image */}
      </div>
      <div>
        <h1 className="text-lg text-primary font-semibold py-3">The City Wanderer</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Icon
              width={18}
              icon="material-symbols:star-rounded"
              className="text-accent"
            />
            <span className="text-sm font-medium">4.7</span>
          </div>
          <Icon width={18} icon="mdi:dot" className="text-ring"/>
          <div className="flex items-center gap-1">
            <Icon
              width={18}
              icon="mingcute:time-duration-line"
              className="text-ring"
            />
            <span className="text-sm font-medium">6</span>
          </div>
        </div>
        <div className="flex items-center gap-0.5 mt-3">
          <Icon width={24} icon="boxicons:dollar" className="text-primary" />
          <span className="text-2xl text-primary font-medium">1,197</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
