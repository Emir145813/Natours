import { ITour } from "@/components/interfaces";
import { Icon } from "@iconify/react";
import React from "react";

interface Itour {
  tour: ITour;
}

function ImportantInfo({ tour }: Itour) {
  const InfoList = [
    {
      name: "Duration",
      amount: tour.duration,
      icon: "mingcute:time-duration-line",
      suffix: "Days",
    },
    {
      name: "Max Group Size",
      amount: tour.maxGroupSize,
      icon: "ri:group-line",
      suffix: "People",
    },
    {
      name: "Difficulty",
      amount:
        tour.difficulty.charAt(0).toUpperCase() + tour.difficulty.slice(1),
      icon: "streamline-plump:ok-hand-remix",
      suffix: "",
    },
  ];

  return (
    <div className="flex gap-40">
      {InfoList.map((item) => (
        <div key={item.name}>
          <div className="text-foreground text-3xl flex items-center gap-1">
            <Icon icon={item.icon} />
            <span>{item.amount}</span>
            <span className="text-sm text-ring">{item.suffix}</span>
          </div>
          <span className="text-ring">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default ImportantInfo;
