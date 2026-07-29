export interface IChildren {
  children: React.ReactNode;
}

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


export interface IReview {
  _id?: string
  review?: string
  rate?: number
  createdAt?: string
  tour?: string
  user?: User
  id?: string
}

export interface User {
  _id: string
  name: string
  email: string
}
