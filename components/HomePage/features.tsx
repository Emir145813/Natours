import React from "react";
import Container from "../container";
import { Icon } from "@iconify/react";

function Features() {
  const featuresData = [
    {
      icon: "solar:tag-price-linear",
      title: "Best Price Quarantee",
      desc: "We Quarantee Best The Best Price",
    },
    {
      icon: "material-symbols-light:your-trips-outline",
      title: "Handpicked Tours",
      desc: "Carefully Picked For You",
    },
    {
      icon: "tabler:star",
      title: "Top Rated Service",
      desc: "Thousands Of Happy Traverlers",
    },
    {
      icon: "ix:support",
      title: "24/7",
      desc: "We're Here To Help",
    },
  ];

  return (
    <div>
      <Container>
        <div className="w-full py-10 px-20 flex justify-between items-center rounded-xl shadow-md bg-amber-100/40">
          {featuresData.map((item) => (
            <div key={item.title}>
              <div className="flex flex-col justify-center items-center gap-6">
                <Icon
                  icon="solar:tag-price-linear"
                  className="text-primary text-6xl"
                />
                <div className="flex flex-col justify-center items-center gap-1">
                  <span className="font-medium">{item.title}</span>
                  <p className="font-medium text-black/50">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Features;
