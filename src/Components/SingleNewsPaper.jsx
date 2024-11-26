 import React, { useState } from 'react';
import { FaStarHalfAlt, FaEye, FaStar, FaRegStar, FaShareAlt } from 'react-icons/fa';

// Dynamic Rating Component
const DynamicRating = ({ ratingNumber = 0 }) => {
  const totalStars = 5;
  
  // Generate an array of stars based on ratingNumber
  const stars = Array.from({ length: totalStars }, (_, index) => {
    if (ratingNumber >= index + 1) {
      return <FaStar key={index} />;
    } else if (ratingNumber >= index + 0.5) {
      return <FaStarHalfAlt key={index} />;
    } else {
      return <FaRegStar key={index} />;
    }
  });

  return (
    <div className="flex items-center text-yellow-500">
      {stars} {/* Dynamically render the stars */}
      <span className="ml-2 text-sm font-medium text-gray-700">{ratingNumber.toFixed(1)}</span>
    </div>
  );
};

const SingleNewsPaper = ({ singleNews }) => {
  const {
    author = {},
    title = "No Title Available",
    details = "Details not available.",
    image_url,
    rating = { number: 0 },
    total_view = 0,
  } = singleNews;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="card w-full h-auto bg-white shadow-lg rounded-lg border p-4">
      {/* Header Section */}
      <div className="flex bg-gray-100 items-center p-4 border-b">
        <img
          src={author.img || "https://via.placeholder.com/40"}
          alt={author.name || "Unknown Author"}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h3 className="text-sm font-semibold">{author.name || "Anonymous"}</h3>
          <p className="text-xs text-gray-500">{author.published_date || "Unknown Date"}</p>
        </div>
        <button className="ml-auto text-gray-400 hover:text-gray-600">
          <FaShareAlt />
        </button>
      </div>

      {/* Title Section */}
      <h2 className="text-lg my-4 font-semibold text-gray-800">{title}</h2>

      {/* Image Section */}
      <figure>
        <img
          src={image_url || "https://via.placeholder.com/400x200"}
          alt="News"
          className="w-full h-auto object-cover"
        />
      </figure>

      {/* Content Section */}
      <div className="mt-4">
        {/* Details */}
        <p className="text-sm text-gray-600 mt-2">
          {isExpanded ? details : `${details.slice(0, 220)}...`}
          <span
            className="text-red-400 cursor-pointer"
            onClick={toggleReadMore}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </span>
        </p>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-4">
          {/* Rating */}
          <DynamicRating ratingNumber={rating.number} />

          {/* Views */}
          <div className="flex items-center text-gray-500">
            <FaEye />
            <span className="ml-2 text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsPaper;
