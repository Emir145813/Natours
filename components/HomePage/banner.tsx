import React from "react";
import Container from "../container";
import AppButton from "../ui/app-buttom";

function Banner() {
  return (
    <div>
      <Container>
        <div className="min-h-48 bg-[url('/images/banner.png')] bg-cover bg-bottom shadow-soft rounded-4xl">
          <div className=" bg-radial-[at_0%_0%] from-background/20 to-60%  p-10">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-3xl text-primary font-kameron">
                Ready For Your Next Adventure ?
              </h1>
              <p className="font-semibold text-black/50 text-xl">
                Lets make your dream trip reality.
              </p>
            </div>
            <AppButton className="mt-6" href="/tours">Explore Tours</AppButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
