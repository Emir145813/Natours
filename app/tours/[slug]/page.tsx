import { getTour } from "@/app/services/tours.services";
import Container from "@/components/container";
import React from "react";
import TourPage from "./tour-page";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/providers/make-query-client";

interface IParams {
  params: Promise<{ slug: string }>;
}

async function Tour(props: IParams) {
  const { slug } = await props.params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post", slug],
    queryFn: () => getTour(slug),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <TourPage slug={slug} />
      </Container>
    </HydrationBoundary>
  );
}

export default Tour;
