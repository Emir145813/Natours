"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { IUser } from "../interfaces";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import Link from "next/link";
import { BadgeCheckIcon, LogOutIcon } from "lucide-react";

interface IUserDropDown {
  props?: IUser;
  logout?: () => void;
  isLoading: boolean;
}

function UserDropDown({ props, logout, isLoading }: IUserDropDown) {
  return (
    <div>
      {isLoading || !props ? (
        <Link
          href={"/signin"}
          className="hover:bg-third border-2 border-third rounded-full flex flex-row-reverse items-center gap-2 pl-4 transition-all duration-300 group"
        >
          <div className="p-2 rounded-full bg-third">
            <Icon
              className="text-white text-2xl"
              icon="griddy-icons:user-filled"
            />
          </div>
          <span className="text-third font-bold group-hover:text-white transition-all duration-300">
            Sign in
          </span>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button className="hover:bg-third border-2 border-third rounded-full flex flex-row-reverse items-center gap-2 pl-4 transition-all duration-300 group">
                <div
                  className={`${props?.avatar ? "" : "p-2"} rounded-full bg-third`}
                >
                  {props?.avatar ? (
                    <Image
                      src={props?.avatar}
                      alt="Natours"
                      width={40}
                      height={40}
                      className="rounded-full border-third"
                    />
                  ) : (
                    <Icon
                      className="text-white text-2xl"
                      icon="griddy-icons:user-filled"
                    />
                  )}
                </div>
                <span className="text-third font-bold group-hover:text-white transition-all duration-300">
                  {props?.name ? props?.name : "Sign in"}
                </span>
              </button>
            }
          />
          <DropdownMenuContent align="end" className="w-40 mt-3">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link className="flex justify-center items-center gap-1.5" href="/dashboard">
                  <BadgeCheckIcon />
                  Account
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={logout} className="text-error">
                <LogOutIcon />
                Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}

export default UserDropDown;

{
  /* <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <div className="hover:bg-third border-2 border-third rounded-full flex flex-row-reverse items-center gap-2 pl-4 transition-all duration-300 group">
            <div
              className={`${props?.avatar ? "" : "p-2"} rounded-full bg-third`}
            >
              {props?.avatar ? (
                <Image
                  src={props?.avatar}
                  alt="Natours"
                  width={40}
                  height={40}
                  className="rounded-full border-third"
                />
              ) : (
                <Icon
                  className="text-background text-2xl"
                  icon="griddy-icons:user-filled"
                />
              )}
            </div>
            <span className="text-third font-bold group-hover:text-background transition-all duration-300">
              {props?.name ? props?.name : "Sign in"}
            </span>
          </div>
        }
      />
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Dashboard</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu> */
}
