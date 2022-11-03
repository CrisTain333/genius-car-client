import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ posts }) => {
  const { title, photoUrl, description, _id } = posts;
  return (
    <Link to={`/blog/${_id}`}>
      <div className="overflow-hidden transition-shadow duration-300  rounded-lg">
        <img
          src={photoUrl}
          className="object-contain w-full h-64 rounded-lg"
          alt=""
        />

        <div className="py-5">
          <p className="text-2xl font-bold leading-5">{title}</p>
          <p className="mb-4 text-gray-700">
            {description?.slice(0, 60)}{" "}
            <span className="text-red-500">Read More....</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
