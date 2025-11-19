import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;

  return (
    <div className="card w-full max-w-md bg-base-100 shadow-md  rounded-xl p-6">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-primary mb-3" />

      {/* Message */}
      <p className="mb-4">
        {testimonial}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-primary rounded-full">
            <img src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">{userName}</h3>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
