import { Icon } from "@iconify/react";
import React from "react";
import { IReview } from "./interfaces";

interface IReviewCard{
  props : IReview
}

function ReviewCard({props} : IReviewCard) {
  return (
    <div className="bg-card shadow-md max-w-96 h-40 p-4 rounded-xl transition-all duration-300 hover:shadow-primary/20 hover:scale-105 flex flex-col justify-between items-start">
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
      {/* TODO: Add tour name virtual property to backend */}
      <span className="font-medium">Tour Name</span>
      <p className="line-clamp-3 opacity-70">
        {props.review}
      </p>
    </div>
  );
}

export default ReviewCard;
