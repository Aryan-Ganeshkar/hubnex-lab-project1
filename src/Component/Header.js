import React from 'react'
import homeimage from "../assets/homeimage.png";
import Group from "../assets/Group.png";
import Groups from "../assets/Groups.png";
import Groupss from "../assets/Groupss.png";
import { Link } from 'react-router-dom';
import Navs from './Navs';

function Header() {
  return (
    <>

    <Navs></Navs>

<div className="flex flex-wrap gap-10 justify-around  content-center items-center">
        <div className="mt-20 lg:mt-20 lg:ml-24">
          <span
            className="lg:text-6xl text-2xl md:text-4xl sm:text-left
          text-[#5C27C0] text-bold font-bold"
          >
            {" "}
            Power Up Your Hiring
          </span>
          <br></br>
          <span className="text-[#5C27C0] text-2xl md:text-3xl lg:-ml-72 lg:text-6xl">
            {" "}
            with Rework{" "}
          </span>
          <p className="mt-8 text-black sm:text-left">
            Empower your business with cutting-edge A.I. technology, simplified
            processes,and<br></br> top-tier talent connections. Rework is your
            strategic partner in redefining how you hire
          </p>
          <br></br>
          <div className="flex flex-wrap flex-col justify-center items-center md:items-start lg:items-start">
            <div>
             <Link to={"/card"}>
             <button className=" sm:text-left py-3 px-12 rounded-xl bg-[#5C27C0] shadow-md md:justify-center flex flex-row items-start justify-start text-white">
                {" "}
                Book A Demo{" "}
              </button>
             </Link>
            </div>
            <br></br>
            <div className=" flex flex-wrap">
              <img className="cursor-pointer" src={Group} />
              <p className="text-black ml-4">No credit Required</p>
            </div>
            <br></br>
            <div className="flex flex-wrap">
              <img className="cursor-pointer" src={Group} />
              <p className="text-blace ml-4">Streamlined Recruitment Process</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:mt-56 lg:-ml-96 justify-center">
          <div>
            <img
              className="lg:relative top-48 lg:left-64 z-[-1]"
              src={Groups}
            />
          </div>
          <div className="relative rounded-8xs bg-primary-300 ">
            <img
              className="lg:relative top-80 lg:left-40 ms-2 lg:ms-0"
              src={Groupss}
            />
          </div>
          <div></div>
          <img className="cursor-pointer rounded-full" src={homeimage} />
        </div>
      </div>

    </>
  )
}

export default Header