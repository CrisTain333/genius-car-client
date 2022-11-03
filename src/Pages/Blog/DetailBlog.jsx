import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const DetailBlog = () => {
  const data = useLoaderData();
  const {photoUrl,description,title} = data
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-col px-5 py-14 justify-center items-center">
          <img
            class="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg"
            alt="hero"
            src={photoUrl}
          />
          <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-start">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {title}
            </h1>
            <p class="mb-8 text-start">
            {description}
            </p>
            <Link
                  to="/blog"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-red-500 text-white   hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Go Back
                </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailBlog;
