import React from 'react'
import unsplash from "../assets/unsplash.png";
import unsplash1 from "../assets/unsplash1.png";
import unsplash2 from "../assets/unsplash2.png";
import Navs from './Navs';

function Succes() {
  return (
    <>
      <Navs></Navs>

        <div className=''>
        <div>
        <h1 className="">
          <span className="text-4xl text-[#5C27C0] justify-cente font-bold">
            {" "}
            Success
          </span>{" "}
          <span className="text-[#5C27C0] text-4xl">Stories</span>
        </h1>
      </div>

      <div className="m-12 flex flex-wrap gap-10 rounded-2xl justify-center content-center items-center">
        {/* card-1 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full cursor-pointer" src={unsplash} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Rework has been a great way to make the hiring process easier and
              faster.
            </div>
            <p className="text-gray-700 text-base">
              “We've been able to save money and time, and the recruiters have
              been able to find the best employers leads. Highly recommend! “
            </p>
          </div>
        </div>
        {/* card-2 */}
        <div className="max-w-sm rounded overflow-hidden  shadow-lg">
          <img className="w-full cursor-pointer" src={unsplash1} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Rework has been a great way to make the hiring process easier and
              faster.
            </div>
            <p className="text-gray-700 text-base">
              “We've been able to save money and time, and the recruiters have
              been able to find the best employers leads. Highly recommend! “
            </p>
          </div>
        </div>
        {/* card-3 */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full cursor-pointer" src={unsplash2} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {" "}
              Rework has been a great way to make the hiring process easier and
              faster.
            </div>
            <p className="text-gray-700 text-base">
              “We've been able to save money and time, and the recruiters have
              been able to find the best employers leads. Highly recommend! “
            </p>
          </div>
        </div>
      </div>
        </div>
    </>
  )
}

export default Succes