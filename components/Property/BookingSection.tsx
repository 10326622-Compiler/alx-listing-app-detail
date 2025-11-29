import React, { useState } from "react";

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const nights = Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      return nights > 0 ? nights : 0;
    }
    return 0;
  };

  const nights = calculateNights();
  const totalPrice = nights * price;

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 sticky top-6">
      <div className="flex items-baseline gap-2 mb-6">
        <h3 className="text-3xl font-bold">${price}</h3>
        <span className="text-gray-600">/ night</span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Check-in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Check-out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {nights > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">
              ${price} × {nights} nights
            </span>
            <span className="font-semibold">${totalPrice}</span>
          </div>
          <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t border-gray-200">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      )}

      <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
        Reserve Now
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        You won't be charged yet
      </p>
    </div>
  );
};

export default BookingSection;