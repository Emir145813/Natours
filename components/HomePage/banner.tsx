import React from "react";
import { Button } from "../ui/button";
import Container from "../container";

function Banner() {
  return (
    <div>
      <Container>
        <div className="bg-[url('/images/banner-2.png')] bg-cover bg-center shadow-lg rounded-4xl p-10 ">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-3xl text-primary font-kameron z-50">
              Ready For Your Next Adventure ?
            </h1>
            <p className="font-semibold text-black/50 text-xl">
              Lets make your dream trip reality.
            </p>
          </div>
          <Button className="mt-4">Explore Tours</Button>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
