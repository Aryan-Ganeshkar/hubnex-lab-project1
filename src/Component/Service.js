import React from "react";
import Navs from "./Navs";
import { Link } from "react-router-dom";


function Service() {
  return (
    <>
      <Navs></Navs>

      <div className="self-stretch mt-20 mx-8 flex flex-col items-center justify-center text-center text-primary-100 font-semibold">
        <div className="max-w-[1175px] w-full flex flex-col items-center justify-center gap-8 lg:gap-20">
          <h1 className="font-bold text-4xl lg:text-5xl text-left text-purple-700 lg:justify-center lg:items-center lg:text-left">
            Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit
          </h1>
          <div className="text-lg font-normal md:text-center text-left sl:text-center lg:text-left">
             strengths and opportunities in your current hiring
            process. Our comprehensive Hiring Audit evaluates your strategy,
            identifies areas for improvement, and tailors a roadmap for success.
            Elevate your recruitment game with data-driven insights – because
            the right talent deserves the right approach.
          </div>

          <div>
            <Link to='/home'>
            <div className="bg-purple-700 cursor-pointer lg:ml-[-590px] text-white py-2 px-20 rounded-lg text-xl font-medium">
              Request Your Free Hiring Audit
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
