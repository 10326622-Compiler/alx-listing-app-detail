import React, { useState } from "react";
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "amenities" | "reviews" | "host"
  >("overview");

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          {property.name}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">{property.rating}</span>
          </div>
          <span>•</span>
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 gap-2 mb-8 h-96">
        <div className="col-span-2 row-span-2">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="col-span-2 row-span-1">
          <img
            src={property.image}
            alt={`${property.name} view 2`}
            className="w-full h-full object-cover rounded-tr-lg"
          />
        </div>
        <div className="col-span-2 row-span-1">
          <img
            src={property.image}
            alt={`${property.name} view 3`}
            className="w-full h-full object-cover rounded-br-lg"
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="lg:col-span-2">
          {/* Property Info */}
          {property.offers && (
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex gap-6 text-gray-700">
                <span>{property.offers.bed}</span>
                <span>•</span>
                <span>{property.offers.shower}</span>
                <span>•</span>
                <span>{property.offers.occupants}</span>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="mb-6">
            <div className="flex gap-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-4 px-2 font-semibold transition-colors ${
                  activeTab === "overview"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("amenities")}
                className={`pb-4 px-2 font-semibold transition-colors ${
                  activeTab === "amenities"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                What We Offer
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-4 px-2 font-semibold transition-colors ${
                  activeTab === "reviews"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab("host")}
                className={`pb-4 px-2 font-semibold transition-colors ${
                  activeTab === "host"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                About Host
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === "overview" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">About this place</h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>
            )}

            {activeTab === "amenities" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  What this place offers
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {property.category.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="font-medium text-gray-800">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <ReviewSection reviews={property.reviews || []} />
            )}

            {activeTab === "host" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">About the host</h2>
                <p className="text-gray-700">
                  Information about the host will be displayed here.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Booking */}
        <div className="lg:col-span-1">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;