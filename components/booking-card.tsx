import React from "react";
import { ITour } from "./interfaces";
import { Icon } from "@iconify/react";
import { DatePickerInput } from "./ui/date-picker";
import AppButton from "./ui/app-buttom";

interface ITourProps {
  tourInfo: ITour;
}

function Bookingcard({ tourInfo }: ITourProps) {

  const benefitsList = [
    {
      title : "Free cancelation upto 20 hours"
    },
    {
      title : "Instant confirmation"
    },{
      title : "Secure online payment"
    },{
      title : "Local expert guides"
    },{
      title : "Top-rated experience"
    }
  ]

  return (
    <div className="bg-card p-4 space-y-4 rounded-xl w-full shadow-soft ">
      <div className="flex items-center justify-between">
        <span className="text-primary text-xl font-semibold">Tour Summary</span>
        <Icon
          icon="material-symbols:map-outline"
          className="text-primary text-5xl p-2 bg-primary/20 rounded-full"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <span>
              <Icon
                width={36}
                icon="boxicons:dollar"
                className="text-primary"
              />
            </span>
            <span className="text-4xl text-primary">
              {tourInfo.price.toLocaleString()}
            </span>
          </div>
          <span className="text-sm text-foreground/50 font-medium ml-2">
            Per Person
          </span>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center">
            <Icon
              width={18}
              icon="material-symbols:star-rounded"
              className="text-accent"
            />
            <span className="text-lg font-medium">
              {tourInfo.ratingsAverage}
            </span>
          </div>
          <span className="opacity-50 text-sm">
            ({tourInfo.ratingsQuantity} Reviews)
          </span>
        </div>
      </div>
      <DatePickerInput />
      <AppButton className="w-full rounded-xl">Book Tour</AppButton>
      <div>
        <span className="mb-2 block font-medium">Why book with us ?</span>
        <ul className="space-y-2">
          {
            benefitsList.map((benefit , index)=>(
              <li key={index} className="flex items-center gap-1">
                <Icon icon="reicon:shield-tick-filled" className="text-primary text-xl"/>
                <span className="text-foreground/50 text-sm ">{benefit.title}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Bookingcard;
