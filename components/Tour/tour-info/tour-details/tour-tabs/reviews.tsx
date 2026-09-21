"use client";
import { getReviews } from "@/app/services/reviews.services";
import { Button } from "@/components/ui/button";
import LoadingIndicator from "@/components/ui/loading-indicator";
import { Icon } from "@iconify/react";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";

function Reviews({ tourId }: { tourId: string }) {
  const {
    data: reviews,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["reviews", tourId],
    queryFn: ({ pageParam }) => getReviews(tourId, pageParam),
    initialPageParam: 1,
    placeholderData: keepPreviousData,
    staleTime: 60 * 1000,
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage ?? undefined;
    },
  });

  return (
    <div className="space-y-4 soft-transition">
      {reviews?.pages.map((page) =>
        page.data.doc?.map((review, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-4 bg-card rounded-xl shadow-soft soft-transition"
          >
            <div className="flex gap-2 items-center">
              <Image
                src={review.user.avatar || "/images/users/default.jpg"}
                alt="user-avatar"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
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
            <span>{review.review}</span>
          </div>
        )),
      )}
      <div className="flex justify-center items-center transition-all duration-300">
        {isFetchingNextPage ? (
          <LoadingIndicator />
        ) : hasNextPage ? (
          <Button
            className="p-6 bg-primary rounded-full"
            onClick={() => fetchNextPage()}
          >
            Load More
          </Button>
        ) : (
          <div className="font-semibold">No More Review</div>
        )}
      </div>
    </div>
  );
}

export default Reviews;
