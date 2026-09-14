import Container from "@/components/container";
import ToursPage from "./tours-page";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/providers/make-query-client";
import { getTours } from "../services/tours.services";
import { IParams } from "@/components/interfaces";

async function Tours(props: IParams) {
  const queryClient = getQueryClient();

  const params = await props.searchParams;
  const page = params.page || 1;
  const prevPage = page * 1 - 1;
  const NextPage = page * 1 + 1;
  const limit = params.limit || 50;
  const sort = params.sort || "-createdAt";
  const search = params.search || "";

  queryClient.prefetchQuery({
    queryKey: ["getTours", page, limit, sort, prevPage, NextPage, search],
    queryFn: () => getTours(page, limit, sort, search),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container>
        <ToursPage
          page={page}
          limit={limit}
          sort={sort}
          prevPage={prevPage}
          nextPage={NextPage}
          search={search}
        />
      </Container>
    </HydrationBoundary>
  );
}

export default Tours;
