import { getMe, SignOutUser } from "@/app/services/users.services";
import { Icon } from "@iconify/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { NavLinksMobile } from "./navLinks";
import Link from "next/link";
import SystemTheme from "./ui/system-theme";

function UserProfile() {
  const queryClient = useQueryClient();
  const { data: userData } = useQuery({
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
    <div>
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          {userData?.avatar ? (
            <Image
              src={userData?.avatar}
              alt="Natours"
              width={72}
              height={72}
              className="rounded-full border-third"
            />
          ) : (
            <Icon
              className="text-foreground/80 text-7xl p-3 bg-foreground/10 rounded-full"
              icon="griddy-icons:user-filled"
            />
          )}
          <div className="flex flex-col">
            <span className="font-bold">{userData?.name}</span>
            <span className="text-foreground/60 font-medium">
              {userData?.email}
            </span>
          </div>
        </div>
        <SystemTheme className="w-fit" />
      </div>
      <hr className="my-3" />
      <div className="space-y-2">
        {userData ? (
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => mutate()}
          >
            <Icon icon="charm:sign-out" className="text-primary" />
            <span className="font-medium text-foreground/70">Sign Out</span>
          </div>
        ) : (
          <Link href="/signin" className="flex items-center gap-2">
            <Icon icon="charm:sign-in" className="text-primary" />
            <span className="font-medium text-foreground/70">Sign In</span>
          </Link>
        )}
        <Link
          href={userData ? "/dashboard" : "/signin"}
          className="flex items-center gap-2"
        >
          <Icon icon="akar-icons:dashboard" className="text-primary" />
          <span className="font-medium text-foreground/70">Dashboard</span>
        </Link>
      </div>
      <hr className="my-3" />
      <NavLinksMobile />
    </div>
  );
}

export default UserProfile;
