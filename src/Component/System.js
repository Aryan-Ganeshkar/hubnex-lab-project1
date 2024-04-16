import React from "react";
import mingcute from "../assets/mingcute.png";
import Navs from "./Navs";
import { Link } from "react-router-dom";

function System() {
  return (
    <>

      {/* *Second Component* */}

      <Navs></Navs>

     <div className="">
     <div>
        <h2>
          {" "}
          <span className="mt-10 text-2xl  md:text-3xl lg:text-4xl font-bold text-[#5C27C0]">
            {" "}
            How Our System
          </span>{" "}
          <span className="text-2xl md:text-3xl lg:text-4xl text-[#5C27C0]">
            Operates
          </span>
        </h2>
        <div className="mt-20 flex flex-wrap justify-center content-center cursor-pointer items-center text-black">
          <div className="w-72 h-64">
            <div className="flex flex-wrap gap-5">
              <h2 className="font-bold text-xl">Upload Documents</h2>
              <img className="content-center items-center -mt-16 ml-52 h-20" src={mingcute} />
            </div>
            <p className="text-gray-700 text-base mt-8 float-start">
              Shortlist the most qualified candidate<br></br> and upload their
              details for the top<br></br> companies
            </p>
          </div>

          <div className="bg-[#EFE5FF] w-72 h-72">
            <div className="px-6 py-4 -mt-5">
              <div className="font-bold text-xl mt-4 mb-2 float-start">Sign Up</div>
            </div>
            <div className="flex flex-wrap mt-24 -ml-20 float-start">
              <p className="text-gray-700">
                Follow the link below to sign up and<br></br> get access of the
                current job<br></br> postings
              </p>
            </div>
            <div className="mt-52">
              <img
                className="content-center items-center float-end h-20 "
                src={mingcute}
              />
            </div>
          </div>

          <div>
            ``{" "}
            <div className="w-72 h-64 mt-16">
              <div className="flex flex-wrap gap-10">
                <h2 className="font-bold text-xl -mt-4 ml-8">Get Rewards</h2>
                <img className="content-center items-center -mt-8 h-20" src={mingcute} />
              </div>
              <p className="text-gray-700 mt-8 ">
                As soon as the candidate gets <br></br>selected you get your
                benefits
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Link to='/home'>
        <button className="mt-20 text-[#5C27C0] font-bold py-2 px-5 border-2 border-[#5C27C0] rounded-lg">
          Get Started
        </button>
        </Link>
      </div>

     </div>
    </>
  );
}

export default System;
