<<<<<<< HEAD
export interface IUser {
  _id: string
  name: string
  email: string
  avatar: string
  password: string
  role: string
  __v: number
}
=======
import { Button } from "./ui/button";

export interface IChildren {
  children: React.ReactNode;
  className?: string;
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
  reviews: IReview[];
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
export interface tourData {
  doc: ITour[];
}

export interface ItourResponse {
  status: string;
  count: number;
  prevPage: number;
  page: number;
  nextPage: number;
  lastPage: number;
  data: tourData;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface ITourSimple {
  _id: string;
  slug: string;
  name: string;
  imageCover: string;
}

export interface IReview {
  _id: string;
  review: string;
  rate: number;
  createdAt: string;
  tour: ITourSimple;
  user: IUser;
  id: string;
}

export interface IreviewResponse {
  status: string;
  count: number;
  prevPage: number;
  page: number;
  nextPage: number;
  data: Data;
}

export interface Data {
  doc: IReview[];
}

export interface IToursParams {
  prevPage: number | undefined;
  page: number;
  nextPage: number | undefined;
  limit: number;
  sort: string;
  search: string;
}

export interface IParams {
  searchParams: Promise<{
    page: number;
    limit: number;
    sort: string;
    search: string;
  }>;
}

export interface IToursPaginationProps {
  props: {
    prevPage: number | undefined;
    page: number | undefined;
    nextPage: number | undefined;
    lastPage: number | undefined;
  };
}

export interface IGuidesProps {
  guides?: IGuide[];
}

export interface IItineraryProps {
  locations: Location[];
}

export interface ITourInfoProps {
  summary: string;
  description: string;
}

export interface ITourDetails {
  tour: ITour;
}

export interface Itour {
  tour: ITour;
}

export interface IProps {
  images: string[] | undefined;
  isLoading: boolean;
}

export type AppButtonProps = React.ComponentProps<typeof Button> & {
  href?: string;
};

export interface IIConWrapper{
  className ?: string
  fill : string
  icon : string
  onClickHandler ?: ()=> void
}

export interface TourCard {
  props: ITour;
}

export interface ITourProps {
  tourInfo?: ITour;
}

export interface IError {
  refetch: () => void;
  error: Error;
}

export interface IReviewCard {
  props: IReview;
}

export interface IUseGetTours{
  page : number,
  limit : number,
  sort : string,
  prevPage : number | undefined,
  nextPage : number | undefined,
  search : string
}
>>>>>>> 001-home-page
