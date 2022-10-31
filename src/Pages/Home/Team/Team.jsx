import React from "react";
import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";

const Team = () => {
  return (
    <>
      <div className="py-10">
        <p className="text-center  py-2 text-lg font-bold text-red-500">
          Team{" "}
        </p>
        <h3 className="text-center text-3xl font-bold py-2">Meet Our Team</h3>
        <p className="text-base text-center text-gray-400">
          the majority have suffered alteration in some form, <br /> by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <div>
          <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                <article className="overflow-hidden rounded-lg shadow-lg ">
                  <img
                    alt="ServiceImage"
                    className="block h-full w-full"
                    src={img1}
                  />
                  <header className="flex items-center justify-center leading-tight ">
                    <h1 className="text-lg font-bold ">Car Engine Plug</h1>
                  </header>
                  <footer className="flex items-center justify-center leading-none p-1 md:p-2">
                    <p className="ml-2 text-base font-semibold  text-gray-400">
                      Engine Expert
                    </p>
                  </footer>
                </article>
              </div>
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                <article className="overflow-hidden rounded-lg shadow-lg ">
                  <img
                    alt="ServiceImage"
                    className="block h-full w-full"
                    src={img2}
                  />
                  <header className="flex items-center justify-center leading-tight">
                    <h1 className="text-lg font-bold">Car Engine Plug</h1>
                  </header>
                  <footer className="flex items-center justify-center leading-none p-1 md:p-2">
                    <p className="ml-2 text-base font-semibold text-gray-400 ">
                      Engine Expert
                    </p>
                  </footer>
                </article>
              </div>
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                <article className="overflow-hidden rounded-lg shadow-lg ">
                  <img
                    alt="ServiceImage"
                    className="block h-full w-full"
                    src={img3}
                  />
                  <header className="flex items-center justify-center leading-tight">
                    <h1 className="text-lg font-bold">Car Engine Plug</h1>
                  </header>
                  <footer className="flex items-center justify-center leading-none p-1 md:p-2">
                    <p className="ml-2 text-base font-semibold  text-gray-400">
                      Tata Expert
                    </p>
                  </footer>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
