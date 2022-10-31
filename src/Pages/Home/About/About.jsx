import React from "react";
import aboutimage from "../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div>
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-20 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src={aboutimage}
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full rounded-lg"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-2xl font-bold tracking-wider text-red-500 uppercase rounded-full">
                  About Us
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                We are qualified
                <br className="hidden md:block" />&{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  of experience in this field
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
             <div className="py-10">
             <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get More Info
              </a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
