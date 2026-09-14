import { Icon } from "@iconify/react";
import React from "react";
import { IReviewCard } from "./interfaces";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

export function ReviewCard({ props }: IReviewCard) {
  return (
    <div className="bg-card shadow-soft max-w-96 h-55 p-4 rounded-xl transition-all duration-300 hover:shadow-soft hover:shadow-primary/20 hover:scale-102 flex flex-col justify-between items-start gap-2">
      <div className="flex gap-2">
        <Image
          src={props.user?.avatar || "/images/users/default.jpg"}
          alt="user avatar"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-primary font-semibold">{props.user?.name}</span>
          <div className="flex items-center gap-1">
            <span>
              <Icon
                width={18}
                icon="material-symbols:star-rounded"
                className="text-accent"
              />
            </span>
            <span className="text-lg">{props.rate}</span>
          </div>
        </div>
      </div>
      <Link
        href={`tours/${props.tour.slug}`}
        className="flex justify-center items-center gap-2"
      >
        <div className="w-7 h-7 rounded-full overflow-hidden flex justify-center items-center">
          <Image
            src={props.tour.imageCover}
            alt="tour cover"
            width={80}
            height={80}
            className="bg-cover scale-180"
          />
        </div>
        <span className="font-medium text-foreground/70 text-sm">
          {props.tour.name}
        </span>
      </Link>
      <p className="line-clamp-3 opacity-70">{props.review}</p>
    </div>
  );
}

export function ReviewCardSkeleton() {
  return (
    <div>
      <div className="bg-card shadow-soft max-w-96 h-55 p-4 rounded-xl transition-all duration-300 hover:shadow-soft hover:shadow-primary/20 hover:scale-102 flex flex-col justify-between items-start gap-2">
        <div className="flex gap-2">
          <Skeleton className="w-12.5 h-12.5 rounded-full" />
          <div className="flex flex-col justify-between">
            <Skeleton className="w-36 h-6 rounded-full" />
            <Skeleton className="w-12 h-6 rounded-full" />
          </div>
        </div>
        <Skeleton className="w-36 h-6 rounded-full" />
        <div className="w-full space-y-1">
          <Skeleton className="w-full h-6 rounded-full" />
          <Skeleton className="w-full h-6 rounded-full" />
          <Skeleton className="w-3/4 h-6 rounded-full" />
        </div>
      </div>
    </div>
  );
}
