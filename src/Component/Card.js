import React from "react";
import Vector from "../assets/Vector.png";
import Vectors from "../assets/Vectors.png";
import Rectangles from "../assets/Rectangles.png";
import { Link } from "react-router-dom";
import Navs from "./Navs";

function Card() {
  return (
    <>
      {/* container 1 */}

      <Navs></Navs>
     <div className="">

     <h1 className="mt-20">
        <span className="text-4xl font-bold text-[#5C27C0]">
          {" "}
          Choose Your Simple,
        </span>{" "}
        <span className="text-4xl  text-[#5C27C0]">Transparent Pricing</span>
      </h1>

      <div className="mt-5 flex flex-wrap gap-2 justify-center content-center items-center">
        {/* card - 1 */}
        <div className="max-w-xs rounded-2xl cursor-pointer hover:bg-blue-400 shadow-2xl m-10">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-blue-700">1 Month</div>
            <h1 className="text-2xl font-bold"> ₹ 199.00/month</h1>
          </div>
          <div>
            <p className="text-blue-700 mt-10 justify-center content-center items-center font-bold">
              Suitable for companies with 5-10 openings
            </p>

            <div className=" flex flex-wrap mt-4 ">
              <img className="" src={Vector} />
              <p className="text-black ml-4">10 interview-ready candidates</p>
            </div>
            <div className="flex flex-wrap">
              <img className="" src={Vector} />
              <p className="text-blace ml-4">Unlimited job postings</p>
            </div>

            <div className="flex flex-wrap">
              <img className="" src={Vector} />
              <p className="text-black ml-4">
                Receive pre-vetted profiles 48 hours
              </p>
            </div>

            <div className="flex flex-wrap">
              <img className="" src={Vectors} />
              <p className="text-blace ml-4"> Dedicated account manager </p>
            </div>

            <div className=" flex flex-wrap">
              <img className="" src={Vectors} />
              <p className="text-black ml-4">
                Assistance with interview scheduling
              </p>
            </div>
            <div className="flex flex-wrap">
              <img className="" src={Vectors} />
              <p className="text-blace ml-4">Custom reports </p>
            </div>
          </div>

          <div className="mt-10 px-6 py-4">
            <Link to='/home'>
            <button className="bg-[#5C27C0] hover:bg-blue-700 text-white font-bold py-2 px-14 rounded-lg">
              Get Started
            </button>
            </Link>
          </div>
        </div>

        {/* card - 2 */}
        <div className="max-w-xs rounded-2xl cursor-pointer hover:bg-blue-700 bg-[#5C27C0] shadow-2xl m-10">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">3 Month</div>
            <h1 className="text-2xl font-bold text-white"> ₹ 149.00/month</h1>
          </div>
          <div>
            <p className="text-white mt-10 justify-center content-center items-center font-bold">
              Suitable for companies with 5-10 openings
            </p>

            <div className=" flex flex-wrap mt-4 ">
              <img className="" src={Vector} />
              <p className="text-white ml-4">10 interview-ready candidates</p>
            </div>
            <div className="flex flex-wrap">
              <img className="" src={Vector} />
              <p className="text-white ml-4">Unlimited job postings</p>
            </div>

            <div className="flex flex-wrap">
              <img className="" src={Vector} />
              <p className="text-white ml-4">
                Receive pre-vetted profiles 48 hours
              </p>
            </div>

            <div className="flex flex-wrap">
              <img className="" src={Vectors} />
              <p className="text-white ml-4"> Dedicated account manager </p>
            </div>

            <div className=" flex flex-wrap">
              <img className="" src={Vectors} />
              <p className="text-white ml-4">
                Assistance with interview scheduling
              </p>
            </div>
            <div className="flex flex-wrap">
              <img className="" src={Vectors} />
              <p className="text-white ml-4">Custom reports </p>
            </div>
          </div>

          <div className="mt-4 px-6 py-4">
            <Link to='/home'>
            <button className="bg-white mt-10 hover:bg-blue-700 text-[#5C27C0] font-bold py-2 px-14 rounded-lg">
              Get Started
            </button>
            </Link>
          </div>
        </div>
        {/* card-3 */}
        <div className="max-w-xs rounded-2xl cursor-pointer hover:bg-blue-400 shadow-2xl m-10">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-blue-700">6 Month</div>
            <h1 className="text-2xl font-bold"> ₹ 169.00/month</h1>
          </div>
          <div>
            <p className="text-blue-700 mt-10 justify-center content-center items-center font-bold">
              Suitable for companies with 5-10 openings
            </p>

            <div className=" flex flex-wrap mt-4 ">
              <img className="" src={Vector} />
              <p className="text-black ml-4">10 interview-ready candidates</p>
            </div>
            <div className="flex flex-wrap">
              <img className="" src={Vector} />
              <p className="text-blace ml-4">Unlimited job postings</p>
            </div>

            <div className="flex flex-wrap">
              <img className="" src={Vector} />
              <p className="text-black ml-4">
                Receive pre-vetted profiles 48 hours
              </p>
            </div>

            <div className="flex flex-wrap">
              <img className="" src={Vectors} />
              <p className="text-blace ml-4"> Dedicated account manager </p>
            </div>

            <div className=" flex flex-wrap">
              <img className="" src={Vectors} />
              <p className="text-black ml-4">
                Assistance with interview scheduling
              </p>
            </div>
            <div className="flex flex-wrap">
              <img className="" src={Vectors} />
              <p className="text-blace ml-4">Custom reports </p>
            </div>
          </div>

          <div className="mt-4 px-6 py-4">
            <Link to='/home'>
            <button className="bg-[#5C27C0] mt-10 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded-lg">
              Get Started
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Link to='/home'>
        <button className="mt-10 text-[#5C27C0] font-bold py-2 px-5 border-2 border-[#5C27C0] rounded-lg">
          Book a Demo
        </button>
        </Link>
      </div>

      {/* //container 2 */}

      <div className="flex flex-wrap m-10  justify-around content-center items-center space-around">
        <div>
          <h1 className="text-[#5C27C0] text-4xl text-left">
            <span className=" font-bold">Discover the Future of </span>
            Talent <br></br> Assessment!
          </h1>
          <br></br>
          <p className=" text-black text-left">
            Facing challenges in traditional hiring?<br></br>
            Uncover the costs, pitfalls, and the game-changing role of
            Generative AI in <br></br>recruitment.
          </p>
          <br></br>

          <div className="text-left">
            <h2 className="font-bold"> 🔍 Inside this Whitepaper:</h2>
            <li> Manual vs. Machine-based hiring: Costs & Challenges.</li>
            <li> The truth about "Interview as a Service."</li>
            <li>
              {" "}
              Generative AI: The simple explanation. Optimize Your Hiring
              Process Today!
            </li>
          </div>
          <div className="text-left lg:mt-12 md:justify-center">
            <br></br>
            <button className="rounded-xl gap-10 bg-[#5C27C0] flex items-start justify-start text-white py-3 px-12">
              Download Now for Smarter Recruitment
            </button>
          </div>
        </div>
        <div className="md:mt-10 mt-5 lg:w-80">
          <img src={Rectangles} />
        </div>
      </div>
     </div>
    </>
  );
}

export default Card;
