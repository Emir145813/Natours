import React from "react";
import Container from "../container";
import AppButton from "../ui/app-buttom";

function Banner() {
  return (
    <div>
      <Container>
        <div className="bg-[url('/images/banner.png')] bg-cover bg-bottom shadow-soft rounded-4xl p-10 ">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-3xl text-primary font-kameron z-50">
              Ready For Your Next Adventure ?
            </h1>
            <p className="font-semibold text-black/50 text-xl">
              Lets make your dream trip reality.
            </p>
          </div>
          <AppButton className="mt-6">Explore Tours</AppButton>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
