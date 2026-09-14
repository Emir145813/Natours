import Image from "next/image";
import React from "react";
import AppButton from "./ui/app-buttom";
import { IError } from "./interfaces";

export function FetchingError({ error, refetch }: IError) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="gap-4 flex flex-col justify-center items-center text-center">
        <Image src={"/images/error.png"} alt="404" width={400} height={400} />
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-black text-primary">
            {error.message}
          </span>
        </div>
        <AppButton onClick={refetch}>Reload Page</AppButton>
      </div>
    </div>
  );
}

export function FetchingErrorSimple({ error, refetch }: IError) {
  return (
    <div className="flex flex-col justify-center gap-2 items-center py-6">
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="text-destructive font-bold text-lg">
          Error while geting data
        </span>
        <span className="text-foreground/60 text-base">{error.message}</span>
      </div>
      <AppButton onClick={refetch}>Reload data</AppButton>
    </div>
  );
}
