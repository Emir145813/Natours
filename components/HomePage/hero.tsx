import React from "react";
import Container from "../container";
import AppButton from "../ui/app-buttom";

function Hero() {
  return (
    <div className="bg-[url('/images/hero-page/hero-page-3.jpg')] bg-cover bg-center min-h-[90vh] rounded-b-3xl">
      <div className="min-h-[90vh] bg-radial-[at_25%_25%] from-white/90 to-50% flex justify-center items-center">
        <Container>
          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-8xl text-center leading-[120%] font-kameron font-medium">
              <span className="text-primary">Explore</span>
              <br />
              the world <br /> differently
            </h1>
            <div className="text-center text-lg font-medium">
              <span className="text-primary font-semibold underline decoration-2 underline-offset-6">
                Unique
              </span>{" "}
              Tours for{" "}
              <span className="text-primary font-semibold underline decoration-2 underline-offset-6">
                Unique
              </span>{" "}
              User .
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <AppButton href="/tours">Explore Tours</AppButton>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Hero;
