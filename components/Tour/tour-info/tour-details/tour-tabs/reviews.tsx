import { IReview } from "@/components/interfaces";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

interface IReviewProps {
  reviews: IReview[];
}

function Reviews({ reviews }: IReviewProps) {
  console.log(reviews);

  if (reviews === undefined) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 h-full">
        <Icon icon="mingcute:sad-fill" className="text-5xl text-primary" />
        <span className="text-foreground/50 font-semibold">
          No review found for this tour
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="flex flex-col gap-4 p-4 bg-card rounded-xl shadow-soft">
          <div className="flex gap-2 items-center">
            <Image
              src={review.user.avatar || "/images/users/default.jpg"}
              alt="user-avatar"
              width={60}
              height={60}
              className="rounded-full"
            />

            <div className="  ">
              <span>{review.user.name}</span>
              <div className="flex items-center gap-1">
                <Icon
                  icon="material-symbols:star-rounded"
                  className="text-accent"
                  width={18}
                />
                <span className="text-lg">{review.rate}</span>
              </div>
            </div>
          </div>
          <span>
            {review.review}
          </span>
        </div>
      ))}
      {/* //TODO : Add load more  */}
    </div>
  );
}

export default Reviews;
