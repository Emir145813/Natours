import { ITour } from "@/components/interfaces";
import api from "@/lib/axion";

export async function getTours(): Promise<ITour[]> {
  const result = await api.get("/tours");
  return result.data.data.doc;
}

export async function getTour(slug: string): Promise<ITour[]> {
  const result = await api.get(`/tours/slug/${slug}`);
  return result.data.data.doc;
}
