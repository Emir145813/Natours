import { Location } from "@/components/interfaces";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";


interface IItineraryProps {
  locations: Location[];
}

function Itinerary({ locations }: IItineraryProps) {
  return (
    <div className="relative flex flex-col gap-8">
      {locations.map((location, index) => (
        <div
          key={index}
          className="flex items-center gap-8  before:absolute before:left-7.5 before:top-0 before:h-full before:w-0.5 before:bg-primary"
        >
          <div className="flex flex-col items-center justify-center h-15 w-15 rounded-full bg-primary z-10">
            <span className="font-medium text-xl text-background">
              {location.day}
            </span>
            <span className="font-medium text-background/60 text-sm">Day</span>
          </div>
          <Icon
            icon="solar:arrow-right-broken"
            className="text-3xl text-foreground"
          />
          <div className="flex items-center gap-2">
            <span className="text-foreground/50 text-lg font-medium">
              {location.destination.description}
            </span>
            <Link
              href={`https://www.google.com/maps?q=${location.destination.coordinates[0]},${location.destination.coordinates[1]}`}
              target="_blank"
            >
              <Icon
                icon="boxicons:location-filled"
                className="text-3xl text-primary"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Itinerary;
