import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AppButtonProps } from "../interfaces";


function AppButton({ className, ...props }: AppButtonProps) {
  if (props.href) {
    return (
      <Link href={props.href} className="w-fit">
        <Button className={cn("rounded-full p-6", className)} {...props} />
      </Link>
    );
  }

  return <Button className={cn("rounded-full p-6", className)} {...props} />;
}

export default AppButton;
