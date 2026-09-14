import { ITour, ItourResponse } from "@/components/interfaces";
import api from "@/lib/axion";

export async function getTours(page: number ,limit : number , sort : string , search : string): Promise<ItourResponse> {
  const result = await api.get("/tours",{
    params : {
      page : page,
      limit : limit,
      sort : sort,
      search : search,
    }
  });
  return result.data;
}
export async function searchTour(search : string , limit: number): Promise<ItourResponse> {
  const result = await api.get("/tours",{
    params : {
      search : search,
      limit : limit
    }
  });
  return result.data;
}
export async function getFeaturedTours(): Promise<ITour[]> {
  const result = await api.get("/tours",{
    params : {
      sort : "-ratingAverage",
      limit : 10
    }
  });
  return result.data.data.doc;
}

export async function getTour(slug: string): Promise<ITour> {
  const result = await api.get(`/tours/slug/${slug}`);
  return result.data.data.doc;
}
