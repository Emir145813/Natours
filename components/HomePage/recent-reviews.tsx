"use client";
import Container from "../container";
import { ReviewCard, ReviewCardSkeleton } from "../review-card";
import { IReview } from "../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useGetRecentReviews } from "@/hooks/get-review";
import { FetchingErrorSimple } from "../fetching-data-error";

function RecentReviews() {
  const {
    data: reviews,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetRecentReviews();

  return (
    <div className="w-full">
      <Container>
        <div className="bg-card p-6 rounded-4xl border ">
          <p className="font-bold text-primary text-3xl text-center mb-6">
            Recently Added Reviews
          </p>
          <div className=" bg-background rounded-2xl border">
            {isError && <FetchingErrorSimple error={error} refetch={refetch} />}
            <Swiper
              modules={[Pagination, A11y]}
              spaceBetween={0}
              slidesPerView={4}
              pagination={{ clickable: true }}
            >
              {isLoading
                ? Array.from({ length: 10 }).map((_, index) => (
                    <SwiperSlide key={index} className="p-5 mb-6">
                      <ReviewCardSkeleton />
                    </SwiperSlide>
                  ))
                : reviews?.map((review: IReview) => (
                    <SwiperSlide key={review.id} className="p-5 mb-6">
                      <ReviewCard props={review} />
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default RecentReviews;
