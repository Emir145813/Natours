import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type AppButtonProps = React.ComponentProps<typeof Button> & {
  href?: string;
};

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
