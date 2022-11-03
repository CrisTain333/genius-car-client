import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import bnr from "../../assets/images/checkout/checkout.png";

const ServiceDetails = () => {
  const data = useLoaderData();
  return (
    <div>
          <>
            <div className="flex flex-col text-center w-full mt-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-red-500">
                {data.title}
              </h1>
            </div>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10  mx-auto flex flex-col">
                <div className="lg:w-full px-10 mx-auto">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src={data.img}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                      <div className="py-5 w-full">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                          <div className="flex items-center justify-center mb-3">
                            <h2 className="text-red-500  title-font font-medium">
                              {data.facility[0].name}
                              <div className="w-full h-1 bg-red-500 rounded mt-2 mb-4"></div>
                            </h2>
                          </div>
                          <div className="flex-grow">
                            <p className="leading-relaxed text-base">
                              {data.facility[0].details}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="py-5 w-full">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                          <div className="flex items-center justify-center mb-3">
                            <h2 className="text-red-500  title-font font-medium">
                              {data.facility[1].name}
                              <div className="w-full h-1 bg-red-500 rounded mt-2 mb-4"></div>
                            </h2>
                          </div>
                          <div className="flex-grow">
                            <p className="leading-relaxed text-base">
                              {data.facility[1].details}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="py-5 w-full">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                          <div className="flex items-center justify-center mb-3">
                            <h2 className="text-red-500  title-font font-medium">
                              {data.facility[2].name}
                              <div className="w-full h-1 bg-red-500 rounded mt-2 mb-4"></div>
                            </h2>
                          </div>
                          <div className="flex-grow">
                            <p className="leading-relaxed text-base">
                              {data.facility[2].details}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <div className=" flex items-center justify-center mt-5">
              <div className="w-full  h-36 rounded-lg shadow-2xl overflow-hidden relative">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={bnr}
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                <div className="flex h-full items-center justify-center relative">
                  <h1 className="text-5xl text-white tracking-wider">
                    Service Details
                  </h1>
                </div>
              </div>
            </div>
                      <p className="leading-relaxed text-lg mb-4 mt-10">
                        {data.description}
                      </p>
                      <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-bold title-font mt-4 text-gray-900 text-lg">
                          Price : ${data.price}
                        </h2>
                        <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                       <Link to={`/checkout/${data._id}`}>
                       <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-red-500 text-white   hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                          Proceed Checkout
                        </button>

                       </Link>
                      </div>
                      
          
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
       
    </div>
  );
};

export default ServiceDetails;
