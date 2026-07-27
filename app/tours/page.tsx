"use client";
import api from "@/lib/axion";
import React, { useEffect, useState } from "react";

export interface ITour {
  _id: string;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  createdAt: string;
  startDates: string[];
  secretTour: boolean;
  guides: Guide[];
  slug: string;
  durationInWeeks: number;
  id: string;
}

export interface Guide {
  _id: string;
  name: string;
  email: string;
  password: string;
  changedPasswordAt?: string;
  role: string;
}

function Tours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    api
      .get("/tours/?sort=-ratingsAverage&limit=5")
      .then((result) => setTours(result.data.data.doc))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {tours.map((item: ITour) => (
        <div key={item._id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Tours;
