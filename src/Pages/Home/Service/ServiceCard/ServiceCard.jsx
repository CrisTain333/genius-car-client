import React from "react";
import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {
    const {img, price, title} = service;
  return(

    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  py-5  ">
    <article className="overflow-hidden rounded-lg shadow-lg ">
        <img
          alt="ServiceImage"
          className="block h-56 w-full"
          src={img}
        />
      <header className="flex items-center justify-between leading-tight p-1 md:p-2">
        <h1 className="text-lg font-bold">
        {title}
          
        </h1>
      </header>
      <footer className="flex items-center justify-between leading-none p-1 md:p-2">
        
          <p className="ml-2 text-xl font-semibold text-red-500">Price: ${price}</p>
        
        <Link
          className="no-underline text-grey-darker hover:text-red-dark"
          to=""
        >
          <span className="flex text-red-500">Buy Now  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg></span>
          <i className="fa fa-heart"></i>
        </Link>
      </footer>
    </article>
  </div>
  );
};

export default ServiceCard;
