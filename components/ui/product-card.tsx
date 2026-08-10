import { Icon } from "@iconify/react";
import React from "react";
import { ITour } from "../interfaces";
import Link from "next/link";
import Image from "next/image";

interface TourCard {
  props: ITour;
}

function ProductCard({ props }: TourCard) {
  return (
    <Link href={`tours/${props.slug}`} className="h-80 w-60 bg-card rounded-xl shadow-soft flex flex-col items-center justify-between p-2 transition-all duration-300 hover:scale-105 hover:shadow-primary/20">
      <div className="h-1/2 w-full rounded-xl bg-gray-200 relative overflow-hidden">
        <Image
        src={props.imageCover}
        alt="tour-image"
        fill={true}
        className="object-cover "
        />
      </div>
      <div className="w-full py-2 flex-1 flex flex-col justify-between">
        <h1 className="text-primary font-semibold text-lg line-clamp-1">
          {props.name}
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
            <span className="text-lg">{props.duration} days</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span>
            <Icon
              width={18}
              icon="material-symbols:star-rounded"
              className="text-accent"
            />
          </span>
          <span className="text-lg">
            {props.ratingsAverage}{" "}
            <span className="opacity-50 text-base">
              ({props.ratingsQuantity})
            </span>
          </span>
        </div>
        <div className="flex items-center">
          <span>
            <Icon width={24} icon="boxicons:dollar" className="text-primary" />
          </span>
          <span className="text-2xl text-primary">
            {props.price.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
