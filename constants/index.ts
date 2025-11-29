import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Luxury Villa in Bali",
    rating: 4.8,
    image: "https://via.placeholder.com/800x600",
    address: {
      city: "Bali",
      country: "Indonesia",
      street: "123 Beach Road",
    },
    description:
      "Experience luxury living in this stunning villa with ocean views. Features modern amenities, private pool, and beautiful gardens. Perfect for a relaxing getaway.",
    category: ["WiFi", "Pool", "Kitchen", "Air Conditioning", "Parking"],
    price: 250,
    offers: {
      bed: "3 Bedrooms",
      shower: "2 Bathrooms",
      occupants: "6 Guests",
    },
    reviews: [
      {
        name: "John Doe",
        avatar: "https://via.placeholder.com/150",
        rating: 5,
        comment: "Amazing property! Highly recommended.",
        date: "2024-01-15",
      },
      {
        name: "Jane Smith",
        avatar: "https://via.placeholder.com/150",
        rating: 4,
        comment: "Great location and beautiful views.",
        date: "2024-01-10",
      },
    ],
  },
  {
    name: "Modern Apartment in Tokyo",
    rating: 4.5,
    image: "https://via.placeholder.com/800x600",
    address: {
      city: "Tokyo",
      country: "Japan",
    },
    description:
      "Centrally located modern apartment in the heart of Tokyo. Close to transportation, restaurants, and attractions.",
    category: ["WiFi", "Kitchen", "Washer", "TV"],
    price: 180,
    reviews: [],
  },
];