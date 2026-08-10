import { Icon } from "@iconify/react";
import React from "react";
import { IReview } from "./interfaces";
import Image from "next/image";

interface IReviewCard {
  props: IReview;
}

function ReviewCard({ props }: IReviewCard) {
  return (
    <div className="bg-card shadow-soft max-w-96 h-55 p-4 rounded-xl transition-all duration-300 hover:shadow-primary/20 hover:scale-105 flex flex-col justify-between items-start gap-2">
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
      <span className="font-medium">Tour Name</span>
      <p className="line-clamp-3 opacity-70">{props.review}</p>
    </div>
  );
}

export default ReviewCard;
