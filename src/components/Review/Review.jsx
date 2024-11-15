// File: src/components/UserReviews.js
import React from "react";



const reviews = [
    {
        author: "Emily Johnson",
        rating: 5,
        text: "Growvyn has completely transformed my daily routine. Highly recommend!",
    },
    {
        author: "Michael Brown",
        rating: 4,
        text: "Great app for staying productive. Just wish it had more integration options.",
    },
];

const UserReviews = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <p className="text-gray-900 font-semibold">{review.author}</p>
          <p className="text-yellow-500">Rating: {review.rating}/5</p>
          <p className="text-gray-700 mt-2">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default UserReviews;
