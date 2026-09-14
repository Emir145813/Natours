"use client";
import React from "react";
import { ITour, IToursParams } from "@/components/interfaces";
import { useGetTours } from "@/hooks/get-tour";
import { ProductCard, ProductCardSkeleton } from "@/components/ui/product-card";
import ToursLimit from "@/components/Filtering/tours-limit";
import ToursSort from "@/components/Filtering/tours-sort";
import ToursPagination from "@/components/Filtering/tours-pagination";
import { FetchingError } from "@/components/fetching-data-error";

function ToursPage({
  page,
  limit,
  sort,
  prevPage,
  nextPage,
  search,
}: IToursParams) {
  const {
    data: tours,
    isLoading,
    isError,
    refetch,
    error,
  } = useGetTours({ page, limit, sort, prevPage, nextPage, search });

  if (isError) {
    return <FetchingError error={error} refetch={refetch} />;
  }

  return (
    <div className="pt-36 mb-20">
      <div className="flex gap-2">
        <ToursLimit limit={limit} />
        <ToursSort sort={sort} />
      </div>
      <div className="grid grid-cols-6 gap-9 bg-background rounded-4xl border p-5 my-2">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : tours?.data?.doc.map((tour: ITour) => (
              <ProductCard key={tour._id} props={tour} />
            ))}
      </div>
      <div className="flex items-center justify-center gap-2">
        <ToursPagination
          props={{
            prevPage: tours?.prevPage,
            page: page,
            nextPage: tours?.nextPage,
            lastPage: tours?.lastPage,
          }}
        />
      </div>
    </div>
  );
}

export default ToursPage;
