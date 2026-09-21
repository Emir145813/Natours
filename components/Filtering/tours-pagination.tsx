"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import useQueryParams from "@/hooks/set-query-params";
import { IToursPaginationProps } from "../interfaces";

function ToursPagination({ props }: IToursPaginationProps) {
  const { setQueryParams } = useQueryParams();
  console.log(props.lastPage);

  return (
    <div className="border w-fit py-1 px-2 rounded-full font-semibold text-foreground/70">
      <Pagination>
        <PaginationContent>
          <PaginationItem onClick={() => setQueryParams({ page: "1" })}>
            <span
              className={`rounded-full text-sm cursor-default px-2 py-1 hover:bg-foreground/5 ${props.page == 1 ? "opacity-50" : ""}`}
              aria-disabled={Number(props.page) === 1}
            >
              First Page
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => setQueryParams({ page: `${props.prevPage}` })}
              className={`${props.prevPage === null ? "hidden" : "rounded-full "}`}
            >
              {props.prevPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="rounded-full hover:bg-primary hover:text-background hover:border-primary"
              onClick={() => setQueryParams({ page: `${props.page}` })}
              isActive
            >
              {props.page}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => setQueryParams({ page: `${props.nextPage}` })}
              className={`${props.nextPage === null ? "hidden" : "rounded-full "}`}
            >
              {props.nextPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem
            onClick={() => setQueryParams({ page: `${props.lastPage}` })}
          >
            <span
              className={`rounded-full text-sm cursor-default px-2 py-1 hover:bg-foreground/5 ${props.page == props.lastPage ? "opacity-50" : ""}`}
              aria-disabled={props.page === props.lastPage}
            >
              Last Page
            </span>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default ToursPagination;
