import useQueryParams from "@/hooks/set-query-params";
import React from "react";

function ToursSort({ sort }: { sort: string }) {
  const { setQueryParams } = useQueryParams();

  const sortOptions = [
    { label: "Newest", value: "-createdAt" },
    { label: "A-z", value: "name" },
    { label: "Z-a", value: "-name" },
    { label: "Rating", value: "-ratingsAverage" },
    { label: "Lowest Price", value: "price" },
    { label: "Highest Price", value: "-price" },
  ];

  return (
    <div className="border w-fit py-1 px-2 rounded-full font-semibold text-foreground/70">
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

export default ToursSort;
