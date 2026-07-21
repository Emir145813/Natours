import React from "react";
import { Icon } from "@iconify/react";
import Container from "../container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import AppButton from "../ui/app-buttom";

function SearchBar() {
  return (
    <Container>
      <div className="w-full h-40 bg-background/70 shadow-lg backdrop-blur-md rounded-4xl -mt-20 flex justify-between items-center p-8">
        <div className="flex justify-between items-center gap-2">
          <Icon
            width={50}
            icon="tabler:star"
            className="text-primary"
          />
          <div className="space-y-2">
            <p>Rating</p>
            <Input placeholder="Search By Rate" className="bg-background" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Icon width={50} icon="mingcute:time-duration-line" className="text-primary" />
          <div className="space-y-2">
            <p>Duration</p>
            <Input
              placeholder="How Long You Want a Break"
              className="bg-background"
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Icon width={50} icon="solar:tag-price-linear" className="text-primary" />
          <div className="space-y-2">
            <p>Price ?</p>
            <Input
              placeholder="What Is Your Price Point"
              className="bg-background"
            />
          </div>
        </div>
        <AppButton>Search Now</AppButton>
      </div>
    </Container>
  );
}

export default SearchBar;
