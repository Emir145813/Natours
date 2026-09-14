import { Icon } from "@iconify/react";
import React from "react";
import { TourCard } from "../interfaces";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "./skeleton";

export function ProductCard({ props }: TourCard) {
  return (
    <Link
      href={`tours/${props.slug}`}
      className="h-80 w-60 bg-card rounded-xl shadow-soft flex flex-col items-center justify-between p-2 transition-color duration-300 hover:scale-101 hover:shadow-soft hover:shadow-primary/30"
    >
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

export function ProductCardSkeleton() {
  return (
    <div className="h-80 w-60 bg-card rounded-xl shadow-soft flex flex-col items-center justify-between p-2 transition-color duration-300 hover:scale-101 hover:shadow-soft hover:shadow-primary/30">
      <Skeleton className="h-1/2 w-full rounded-xl" />
      <div className="w-full py-2 flex-1 flex flex-col justify-between">
        <Skeleton className="w-3/4 h-6 rounded-full" />
        <div className="flex justify-start items-center">
          <Skeleton className="w-1/4 h-6 rounded-full" />
        </div>
        <div className="flex items-center gap-1">
          <Skeleton className="w-1/4 h-6 rounded-full" />
        </div>
        <div className="flex items-center">
          <Skeleton className="w-2/5 h-9 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function ProductCardCompact({ props }: TourCard) {
  return (
    <Link
      href={`/tours/${props.slug}`}
      className="flex gap-4 my-2 border p-2 rounded-lg transition-all duration-300 hover:border-primary"
    >
      <Image
        src={props.imageCover}
        alt="Tour cover"
        width={80}
        height={100}
        className="rounded-lg"
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-start gap-1">
          <span className="text-primary text-sm font-semibold">
            {props.name}
          </span>
          <div className="flex justify-center items-center">
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
