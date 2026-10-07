import useQueryParams from "@/hooks/set-query-params";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const sortOptions = [
  { label: "Newest", value: "-createdAt" },
  { label: "A-z", value: "name" },
  { label: "Z-a", value: "-name" },
  { label: "Rating", value: "-ratingsAverage" },
  { label: "Lowest Price", value: "price" },
  { label: "Highest Price", value: "-price" },
];

export function ToursSort({
  sort,
  className,
}: {
  sort: string;
  className?: string;
}) {
  const { setQueryParams } = useQueryParams();
  return (
    <div
      className={`border w-fit py-1 px-2 rounded-full font-semibold text-foreground/70 ${className}`}
    >
      <span className="flex gap-2">
        Sort By :
        <ul className="flex font-medium">
          {sortOptions.map((item) => (
            <li
              key={item.label}
              className={`cursor-pointer ${sort === item.value ? "bg-primary text-white rounded-full px-3" : "px-3"}`}
              onClick={() => setQueryParams({ sort: `${item.value}` })}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
}

export function TourSortMobile({
  sort,
  className,
}: {
  sort: string;
  className?: string;
}) {
  const { setQueryParams } = useQueryParams();
  const selectedSort = sortOptions.find((item)=>item.value === sort);

  console.log();

  return (
    <div className={`${className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="outline"
              className="rounded-full font-semibold text-foreground/70 py-1 px-2 text-base"
            >
              Sort By : <span className="text-primary">{selectedSort?.label}</span>
            </Button>
          }
        />
        <DropdownMenuContent className="w-32">
          <DropdownMenuGroup>
            <DropdownMenuRadioGroup value={sort}>
              {sortOptions.map((sortItem) => (
                <DropdownMenuRadioItem
                  key={sortItem.label}
                  value="50"
                  onClick={() => setQueryParams({ sort: `${sortItem.value}` })}
                >
                  {sortItem.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
