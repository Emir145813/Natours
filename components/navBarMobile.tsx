"use client";
import React, { useEffect, useState } from "react";
import NavLogo from "./ui/nav-logo";
import IconWrapper from "./ui/icon-wrapper";
import Link from "next/link";
import { totalQuantityCount, useCartStore } from "@/app/store/cart.store";
import UserProfile from "./user-profile";
import useQueryParams from "@/hooks/set-query-params";
import { useSearchTour } from "@/hooks/get-tour";
import { usePathname } from "next/navigation";
import { ProductCardCompact } from "./ui/product-card";
import { Input } from "./ui/input";

function NavBarMobile() {
  const totalQuantity = useCartStore(totalQuantityCount);
  const { setQueryParams } = useQueryParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  const searchHandler = (search: string) => {
    if (search.length > 0) {
      setQueryParams({ search: search }, "/tours");
      setSearch("")
      setIsSearching(false);
    }
  };

  const searchSwitchHandler = () => {
    if (isSearching == true) {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
  };

  const searchCloseHandler = () => {
    setSearch("");
    setIsSearching(false);
  };

  const { data: tours } = useSearchTour(search, 5);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="fixed z-50 w-full xl:hidden">
      <div className="w-full border p-4 bg-card/80 backdrop-blur-md rounded-b-3xl flex justify-between items-center">
        <div className="grid grid-cols-3 w-full items-center">
          <IconWrapper
            className="hover:bg-third w-fit"
            fill="third"
            icon="basil:menu-outline"
            onClickHandler={() => setIsOpen(true)}
          />
          <div className="flex justify-center">
            <NavLogo />
          </div>
          <div className="flex gap-2 justify-end">
            <IconWrapper
              className="hover:bg-third"
              fill="third"
              icon="akar-icons:search"
              onClickHandler={searchSwitchHandler}
            />
            <Link href="/cart" className="flex relative">
              <IconWrapper
                className="hover:bg-third"
                fill="third"
                icon="akar-icons:cart"
              />
              <span
                className={`bg-primary absolute -top-1 -right-1 rounded-full text-[10px] min-w-5 h-5 flex justify-center items-center text-white ${totalQuantity === 0 ? "hidden" : ""}`}
              >
                {totalQuantity}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`h-screen bg-black/40 w-full fixed z-50 top-0 left-0 ${isOpen ? "visible" : "invisible"}`}
        onClick={() => setIsOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-1/2 md:w-1/4 h-full bg-card rounded-r-3xl border p-4 transition-transform duration-200 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <UserProfile />
        </div>
      </div>
      <div
        onClick={() => searchCloseHandler()}
        className={`w-full min-h-screen flex flex-col items-center gap-2 bg-background/20 backdrop-blur-sm fixed top-0 pt-7 soft-transition ${isSearching ? "" : "hidden"}`}
      >
        <div className="w-full flex flex-col gap-4 items-center"
        onClick={(e)=>e.stopPropagation()}>
          <div className="flex justify-center items-center gap-2 w-[90%]">
            <IconWrapper
              className="bg-card hover:bg-error"
              fill="error"
              icon="ci:close-md"
              onClickHandler={searchCloseHandler}
            />
            <Input
              placeholder="Search Tour"
              className="bg-card rounded-full p-5"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconWrapper
              className="bg-card hover:bg-third"
              fill="third"
              icon="akar-icons:search"
              onClickHandler={() => searchHandler(search)}
            />
          </div>
          <div className="w-[90%] rounded-2xl bg-card border py-2 px-4">
            <span className="block text-sm text-primary font-semibold py-2">
              Search Results
            </span>
            <hr />
            <div>
              {search == "" ? (
                <div className="text-center py-4 font-medium text-foreground/50">
                  No Result
                </div>
              ) : (
                tours?.data.doc.map((tour) => (
                  <ProductCardCompact key={tour._id} props={tour} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarMobile;
