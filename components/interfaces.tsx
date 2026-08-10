export interface IChildren {
  children: React.ReactNode;
}

export interface ITour {
  _id: string;
  name: string;
  duration: number;
  startLocation: StartLocation;
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
  locations: Location[];
  guides: IGuide[];
  reviews : IReview[];
  slug: string;
  durationInWeeks: number;
  id: string;
}

export interface StartLocation {
  _id: string;
  description: string;
  coordinates: number[];
  address: string;
  id: string;
}

export interface Location {
  destination: Destination;
  day: number;
  _id: string;
  id: string;
}

export interface Destination {
  _id: string;
  description: string;
  coordinates: number[];
  address: string;
  id: string;
}

export interface IGuide {
  _id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface IReview {
  _id: string
  review: string
  rate: number
  createdAt: string
  tour: string
  user: IUser
  id: string
}

export interface IUser {
  _id: string
  name: string
  email: string
  avatar : string
}
