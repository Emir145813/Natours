"use client";
import React, { useState } from "react";
import SummaryTab from "./summary";
import { ITour } from "@/components/interfaces";
import Itinerary from "./itinerary";
import Guides from "./guides";
import Bookingcard from "@/components/booking-card";
import Reviews from "./reviews";

interface ITourDetails {
  tour: ITour;
}

function TourDetails({ tour }: ITourDetails) {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = [
    {
      name: "Overview",
    },
    {
      name: "Itinerary",
    },
    {
      name: "Guides",
    },
    {
      name: "Reviews",
    },
  ];

  let tabContent;

  switch (activeTab) {
    case "Overview":
      tabContent = (
        <SummaryTab summary={tour.summary} description={tour.description} />
      );
      break;
    case "Itinerary":
      tabContent = <Itinerary locations={tour.locations} />;
      break;
    case "Guides":
      tabContent = <Guides guides={tour.guides} />;
      break;
    case "Reviews" :
      tabContent = <Reviews reviews={tour.reviews}/>
  }

  console.log(tour);
  

  return (
    <div className="mt-10 space-y-8">
      <div
        className={`flex items-center gap-4 text-xl text-foreground/50 font-medium `}
      >
        {tabs.map((tab, index) => (
          <div
            className={
              activeTab === tab.name
                ? "text-primary transmition-color duration-300"
                : ""
            }
            onClick={() => setActiveTab(tab.name)}
            key={index}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[1fr_360px] mb-10 items-stretch">
        <div className="pr-10">{tabContent}</div>
        <div>
          <aside className=" sticky top-28">
            <Bookingcard tourInfo={tour} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
