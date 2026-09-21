"use client";
import {
  getFeaturedTours,
  getTour,
  getTours,
  searchTour,
} from "@/app/services/tours.services";
import { ITour, IUseGetTours } from "@/components/interfaces";
import { useQuery } from "@tanstack/react-query";

export const useGetTours = ({
  page,
  limit,
  sort,
  prevPage,
  nextPage,
  search,
}: IUseGetTours) => {
  return useQuery({
    queryKey: ["getTours", page, limit, sort, prevPage, nextPage, search],
    queryFn: () => getTours(page, limit, sort, search),
  });
};

export const useSearchTour = (search: string, limit: number) => {
  return useQuery({
    queryKey: ["searchTour", search, limit],
    queryFn: () => searchTour(search, limit),
  });
};

export const useGetFeaturedTours = () => {
  return useQuery<ITour[]>({
    queryKey: ["getFeaturedTours"],
    queryFn: getFeaturedTours,
  });
};

export const useGetTour = ({ slug }: { slug: string }) => {
  return useQuery<ITour>({
    queryKey: ["getTour", slug],
    queryFn: () => getTour(slug),
  });
};
