import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <h4 className="text-red-500 text-center text-2xl font-bold">Service</h4>
      <p className="text-center text-base text-gray-700">
        the majority have suffered alteration in some form, by injected humour,{" "}
        <br /> or randomised words which don't look even slightly believable.{" "}
      </p>

      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {services.map((e) => {
            return <ServiceCard key={e._id} service={e} />;
          })}
        </div>
      </div>

     <div className="w-40 mx-auto">
     <Link
        to=""
        className="inline-flex items-center justify-center h-12 w-full px-6 font-medium  rounded shadow-md bg-red-500 text-white    text-center"
      >
        More Services
      </Link>
     </div>
    </>
  );
};

export default Service;
