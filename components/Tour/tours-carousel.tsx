"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlideLeft, SlideRight } from "../ui/Swiper/silder-button";
import { ITour } from "../interfaces";
import { useGetFeaturedTours } from "@/hooks/get-tour";
import { ProductCard, ProductCardSkeleton } from "../ui/product-card";
import { FetchingErrorSimple } from "../fetching-data-error";

function ToursCarousel() {
  const {
    data: tours,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetFeaturedTours();

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
      <div className=" bg-background rounded-2xl border">
        {isError && <FetchingErrorSimple error={error} refetch={refetch} />}
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={6}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
        >
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide key={index} className="p-5">
                  <ProductCardSkeleton />
                </SwiperSlide>
              ))
            : tours?.map((tour: ITour) => (
                <SwiperSlide key={tour.id} className="p-5">
                  <ProductCard props={tour} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ToursCarousel;
