"use client"
import Rating from "@/Components/UI/Rating";
import React, { useState } from "react"; 
import { FaHeart } from "react-icons/fa";

const page = () => {
  const [rating, setRating] = useState(1.5);

  return (
    <div className="p-4 flex justify-center items-center flex-col h-full">
      <h1 className="text-xl mb-2">Give Your Rating:</h1>
      <Rating
        value={rating}
        onChange={setRating}
        icon={FaHeart}
        iconColor="#e11d48" // rose-600
        iconSize={28}
        allowHalf
      />
      <p className="mt-2 text-gray-600">You rated: {rating} / 5</p>
    </div>
  );
};

export default page;
