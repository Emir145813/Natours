"use client";
import { getRecentReviews } from "@/app/services/reviews.services";
import { useQuery } from "@tanstack/react-query";

export function useGetRecentReviews() {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: getRecentReviews,
  });
}
