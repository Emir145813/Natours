"use client";
import React, { useEffect, useState } from "react";
import Container from "../container";
import ReviewCard from "../review-card";
import api from "@/lib/axion";
import { IReview } from "../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function RecentReviews() {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    api
      .get("/reviews?sort=-createdAt&limit=10")
      .then((result) => setReview(result.data.data.doc))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full">
      <Container>
        <div className="bg-card p-6 rounded-4xl border ">
          <p className="font-bold text-primary text-3xl text-center mb-6">
            Recently Added Reviews
          </p>
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={4}
            pagination={{ clickable: true }}
            className=" bg-background rounded-2xl border"
          >
            {reviews.map((review: IReview) => (
              <SwiperSlide key={review.id} className="p-5 mb-6">
                <ReviewCard props={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default RecentReviews;
