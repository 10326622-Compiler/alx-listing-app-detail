export interface PropertyProps {
  name: string;
  rating: number;
  image: string;
  address: {
    city: string;
    country: string;
    street?: string;
  };
  description: string;
  category: string[];
  price: number;
  offers?: {
    bed: string;
    shower: string;
    occupants: string;
  };
  reviews?: ReviewProps[];
}

export interface ReviewProps {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date?: string;
}