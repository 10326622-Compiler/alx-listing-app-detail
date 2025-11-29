import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find property by name
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Property Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The property you're looking for doesn't exist.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </button>
      </div>
    );
  }
  
  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}