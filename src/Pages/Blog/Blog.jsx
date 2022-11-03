import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blog = () => {
  const data = useLoaderData();

  return (
    <div>
     
     
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <h1 className="text-xl text-start font-bold leading-none  text-red-500">
        Featured Blogs
        </h1>
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {data.map((posts) => {
            return <BlogCard key={posts._id} posts={posts} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
