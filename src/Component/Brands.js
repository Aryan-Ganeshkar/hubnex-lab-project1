import React from 'react'
import google from "../assets/google.png";
import google1 from "../assets/google1.png";
import google2 from "../assets/google2.png";
import google3 from "../assets/google3.png";
import google4 from "../assets/google4.png";
import google5 from "../assets/google5.png";
import Frame from "../assets/Frame.png";
import eos from "../assets/eos.png";
import eoss from "../assets/eoss.png";
import eosss from "../assets/eosss.png";
import eosicon from "../assets/eosicon.png";
import eosicons from "../assets/eosicons.png";
import eosiconss from "../assets/eosiconss.png";
import Navs from './Navs';

function Brands() {
  return (
    <>
      <Navs></Navs>

       <div className=''>
       <div className="lg:mt-10 flex-col flex-wrap lg:h-44 bg-[#EFE5FF]">
        <div className="text-2xl text-[#5C27C0] py-8">
          <h3>Hire for 1000+ Brands Including</h3>
        </div>

        <div className="lg:m-20 sm:py-1">
          <div className="flex flex-wrap Sm:flex-col justify-center md:mt-[-25px] sm:flex gap-10 lg:justify-around lg:items-center  lg:mt-[-75px]">
            <div>
              <img className="" src={google} />
            </div>
            <div>
              <img className="" src={google1} />
            </div>
            <div>
              <img className="" src={google2} />
            </div>
            <div>
              <img className="" src={google3} />
            </div>
            <div>
              <img className="" src={google4} />
            </div>
            <div>
              <img className="" src={google5} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="mt-20 md:text-2xl lg:text-4xl ">
          <span className="font-bold text-blue-600">Our Amazing Benefits</span>{" "}
          <span className="text-blue-600">Helpful For Your Hiring</span>
        </h1>
      </div>

      <div className="m-20 gap-8 flex flex-wrap cursor-pointer justify-center content-center items-center text-black">
        <div className="max-w-sm rounded text-left overflow-hidden shadow-lg">
          <img className="content-center items-center ml-5" src={eos} />
          <div className="px-6 py-4">
            <h1>
              <span className="text-[#5C27C0] font-bold text-2xl">60%</span>{" "}
              <br></br>
              <span className=" text-xl mb-2 text-[#5C27C0]"> Cost Reduse</span>
            </h1>
            <p className="mt-4">
              Zero overhead in the hiring process - promise! Source top quality
              candidates for some of the best companies
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded text-left overflow-hidden shadow-lg">
          <img className="content-center items-center ml-5" src={eoss} />
          <div className="px-6 py-4">
            <h1>
              <span className="text-[#5C27C0] text-2xl font-bold">
                {" "}
                50% Faster
              </span>{" "}
              <br></br>
              <span className="text-xl mb-2 text-[#5C27C0]">
                {" "}
                Recruitment by TAT
              </span>
            </h1>
            <p className="mt-4">
              Zero overhead in the hiring process - promise! Source top quality
              candidates for some of the best companies
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden text-left shadow-lg">
          <img className="content-center items-center ml-6" src={eosss} />
          <div className="px-6 py-4">
            <h1>
              <span className="text-2xl font-bold text-[#5C27C0]">
                Highly Contextualized{" "}
              </span>{" "}
              <br></br>
              <span className=" text-xl mb-2 text-[#5C27C0]"> Interview</span>
            </h1>
            <p className="mt-4">
              Zero overhead in the hiring process - promise! Source top quality
              candidates for some of the best companies
            </p>
          </div>
        </div>
      </div>

      <div className="m-20 flex flex-wrap gap-8 justify-center cursor-pointer content-center items-center text-black">
        <div className="max-w-sm rounded overflow-hidden text-left shadow-lg">
          <img className="content-center items-center ml-6" src={eosicon} />
          <div className="px-6 py-4">
            <h1>
              <span className="text-2xl font-bold text-[#5C27C0] ">
                Automated{" "}
              </span>
              <br></br>
              <span className="text-xl mb-2 text-[#5C27C0]"> Scheduling</span>
            </h1>
            <p className="mt-4">
              Zero overhead in the hiring process - promise! Source top quality
              candidates for some of the best companies
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden text-left shadow-lg">
          <img className="content-center items-center ml-6" src={eosicons} />
          <div className="px-6 py-4">
            <h1>
              <span className="text-2xl font-bold text-[#5C27C0]">
                {" "}
                AI generated Interviews
              </span>{" "}
              <br></br>{" "}
              <span className=" text-2xl mb-2 text-[#5C27C0]">
                {" "}
                On what matters
              </span>
            </h1>
            <p className="mt-4">
              Zero overhead in the hiring process - promise! Source top quality
              candidates for some of the best companies
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden text-left shadow-lg">
          <img className="content-center items-center ml-4" src={eosiconss} />
          <div className="px-6 py-4">
            <h1>
              <span className="text-2xl font-bold text-[#5C27C0] ">
                in-built
              </span>{" "}
              <br></br>
              <span className=" text-xl mb-2 text-[#5C27C0]"> ATS </span>
            </h1>
            <p className="mt-4">
              To manage all of your candidates & Credo verified CVs.
              Integrations with other ATS coming soon.
            </p>
          </div>
        </div>
      </div>

       </div>
    </>
  )
}

export default Brands