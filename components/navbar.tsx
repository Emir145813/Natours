"use client";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./navLinks";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import useQueryParams from "@/hooks/set-query-params";
import { useSearchTour } from "@/hooks/get-tour";
import { ProductCardCompact } from "./ui/product-card";
import { usePathname } from "next/navigation";
import IconWrapper from "./ui/icon-wrapper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMe, SignOutUser } from "@/app/services/users.services";

import UserDropDown from "./ui/user-drop-down";
import NavLogo from "./ui/nav-logo";
import SystemTheme from "./ui/system-theme";

function NavBar() {
  const { setQueryParams } = useQueryParams();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  const searchHandler = (search: string) => {
    if (search.length > 0) {
      setQueryParams({ search: search });
      setIsOpen(false);
    }
  };

  const searchSwitchHandler = () => {
    if (isOpen == true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const searchCloseHandler = () => {
    setSearch("");
    setIsOpen(false);
  };

  const { data: tours } = useSearchTour(search, 5);
  const queryClient = useQueryClient();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const { data: userData, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
  });

  const { mutate } = useMutation({
    mutationFn: SignOutUser,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });
    },
  });

  return (
    <div className="w-full pt-4 z-50 fixed">
      <Container>
        <div className="bg-card/80 p-2 backdrop-blur-md rounded-full shadow-soft grid grid-cols-3 items-center justify-between">
          <NavLogo />
          <NavLinks />
          <div className="flex justify-end items-center gap-2">
            <div className="flex gap-1">
              <SystemTheme />
              <IconWrapper
                className="hover:bg-third"
                fill="third"
                icon="akar-icons:search"
                onClickHandler={searchSwitchHandler}
              />
              <Link href="cart">
                <IconWrapper
                  className="hover:bg-third"
                  fill="third"
                  icon="akar-icons:cart"
                />
              </Link>
            </div>
            <UserDropDown
              props={userData}
              logout={() => mutate()}
              isLoading={isLoading}
            />
          </div>
        </div>
      </Container>
      <div
        className={`w-full min-h-screen flex flex-col items-center gap-2 bg-background/20 backdrop-blur-sm fixed top-0 pt-7 ${isOpen ? "" : "hidden"}`}
      >
        <div className="flex justify-center items-center gap-2 w-1/4">
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
        <div className="w-1/4 rounded-2xl bg-card border py-2 px-4">
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
  );
}

export default NavBar;
