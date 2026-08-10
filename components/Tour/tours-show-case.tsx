"use client"
import React from "react";
import Container from "../container";
import { Icon } from "@iconify/react";
import ToursCarousel from "./tours-carousel";

function ToursShowCase() {
  return (
    <div>
      <Container>
        <div className="bg-card border p-6 rounded-4xl w-full flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <span className="font-bold text-primary text-3xl">
              Featured Tours
            </span>
            <div className="flex justify-between items-center gap-1 transition-all duration-300 hover:gap-2 hover:text-primary ">
              <span className="font-medium">View All Tours</span>
              <Icon icon="mingcute:right-fill" className=""/>
            </div>
          </div>
          <div className="h-full">
            <ToursCarousel/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ToursShowCase;
