"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../ui/product-card";
import api from "@/lib/axion";
import { SlideLeft, SlideRight } from "../ui/Swiper/silder-button";
import { ITour } from "../interfaces";


function ToursCarousel() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    api
      .get("/tours?sort=-ratingAverage&limit=10")
      .then((result) => setTours(result.data.data.doc))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="space-x-2 mb-4">
        <button className={`prev-btn`}>
          <SlideLeft />
        </button>
        <button className={`next-btn`}>
          <SlideRight />
        </button>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={6}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        className=" bg-background rounded-2xl border"
      >
        {tours.map((tour: ITour) => (
          <SwiperSlide key={tour.id} className="p-5">
            <ProductCard props={tour} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ToursCarousel;
