import { getTour } from "@/app/services/tours.services";
import Container from "@/components/container";
import { ITour } from "@/components/interfaces";
import ImportantInfo from "@/components/Tour/tour-info/important-info";
import TourDetails from "@/components/Tour/tour-info/tour-details/tour-tabs/tour-details";
import ImageGallery from "@/components/ui/Swiper/tours-images-gallery";
import { Icon } from "@iconify/react";
import React from "react";

interface IParams {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function Tour(props: IParams) {
  const { id } = await props.params;
  const tour: ITour = await getTour(id);

  return (
    <div className="pt-32">
      <Container>
        <div className="w-full min-h-screen space-y-8">
          <div className="h-162 w-full">
            <ImageGallery props={tour.images} />
          </div>
          <div className="px-16 space-y-10">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold">{tour.name}</h1>
                <div className="flex gap-1 items-center">
                  <div className="flex items-center gap-1">
                    <span>
                      <Icon
                        width={18}
                        icon="material-symbols:star-rounded"
                        className="text-accent"
                      />
                    </span>
                    <div>
                      <span className="text-lg font-medium">
                        {tour.ratingsAverage}{" "}
                      </span>
                      <span className="opacity-50 text-base">
                        ({tour.ratingsQuantity} Reviews)
                      </span>
                    </div>
                  </div>
                  <Icon
                    width={24}
                    icon="lucide:dot"
                    className="text-foreground/50"
                  />
                  <div className="flex items-center gap-1">
                    <Icon
                      width={18}
                      icon="boxicons:location-filled"
                      className="text-primary"
                    />
                    <span className="text-foreground">
                      {tour.startLocation.description}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <span>
                    <Icon
                      width={36}
                      icon="boxicons:dollar"
                      className="text-primary"
                    />
                  </span>
                  <span className="text-4xl text-primary">
                    {tour.price.toLocaleString()}
                  </span>
                </div>
                <span className="text-sm text-foreground/50 font-medium ml-2">
                  Per Person
                </span>
              </div>
            </div>
            <ImportantInfo tour={tour} />
          </div>
          <hr className="mt-10" />
          <TourDetails tour={tour} />
        </div>
      </Container>
    </div>
  );
}

export default Tour;
