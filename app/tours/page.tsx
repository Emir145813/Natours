import Container from "@/components/container";
import React from "react";
import { getTours } from "../services/tours.services";
import { ITour } from "@/components/interfaces";
import ProductCard from "@/components/ui/product-card";
import { Icon } from "@iconify/react";

async function Tours() {
  try {
    const tours = await getTours();
    return (
      <div>
        <Container>
          <div className="mt-32 mb-20 grid grid-cols-6 gap-4 bg-background rounded-4xl border p-5">
            {tours.map((tour: ITour) => (
              <ProductCard key={tour._id} props={tour} />
            ))}
          </div>
        </Container>
      </div>
    );
  } catch {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <Icon icon="fluent-color:error-circle-48" className="text-9xl" />
          <p className="text-center text-foreground/50">
            An error accured while getting tours<br />
            Please refresh page to try again
          </p>
        </div>
      </div>
    );
  }
}

export default Tours;
