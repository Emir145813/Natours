"use client";
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
import useQueryParams from "@/hooks/set-query-params";

function ToursLimit({ limit }: { limit: number }) {
  const { setQueryParams } = useQueryParams();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="outline"
              className="rounded-full font-semibold text-foreground/70 py-1 px-2 text-base"
            >
              Per Page : <span className="text-primary">{limit}</span>
            </Button>
          }
        />
        <DropdownMenuContent className="w-32">
          <DropdownMenuGroup>
            <DropdownMenuRadioGroup value={limit}>
              <DropdownMenuRadioItem
                value="50"
                onClick={() => setQueryParams({ limit: "50" })}
              >
                50
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="100"
                onClick={() => setQueryParams({ limit: "100" })}
              >
                100
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="150"
                onClick={() => setQueryParams({ limit: "150" })}
              >
                150
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ToursLimit;
