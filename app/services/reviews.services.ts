import { IReview, IreviewResponse } from "@/components/interfaces";
import api from "@/lib/axion";

export async function getReviews(
  tourId: string,
  pageParam: number,
): Promise<IreviewResponse> {
  const result = await api.get(`/tours/${tourId}/reviews`, {
    params: {
      page: pageParam,
      limit: 3,
    },
  });
  return result.data;
}

export async function getRecentReviews(): Promise<IReview[]> {
  const result = await api.get(`/reviews`,{
    params : {
      limit : 10
    }
  });
  return result.data.data.doc;
}
