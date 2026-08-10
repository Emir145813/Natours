"use client";
import Image from "next/image";
import React from "react";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { SlideLeft, SlideRight } from "./silder-button";

interface IProps {
  props: string[];
}

function ImageGallery({ props }: IProps) {
  return (
    <div className="rounded-2xl border h-full overflow-hidden relative">
      <Swiper
        modules={[Navigation, A11y]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        className="object-cover h-full"
      >
        {props.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt="tour-image" fill={true} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute w-full top-1/2 flex justify-between px-4 z-20">
        <button className={`prev-btn`}>
          <SlideLeft />
        </button>
        <button className={`next-btn`}>
          <SlideRight />
        </button>
      </div>
    </div>
  );
}

export default ImageGallery;
