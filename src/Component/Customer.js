import React from "react";
import Ellipse from "../assets/Ellipse.png";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Navs from "./Navs";

function Customer() {
  return (
    <>

      <Navs></Navs>

      <div className="">
      <div>
        <div className="text-left lg:ml-44">
          <div className="lg:text-left lg:text-4xl text-3xl md:text-center text-center  text-[#5C27C0]">
            <span className=" font-bold ">Customer</span>
            <span className="lg:text-left text-black">Testimonials</span>
          </div>
          <p className="lg:text-left text-center ">
            {" "}
            What others has say About Us{" "}
          </p>
        </div>
      </div>  

        <div className="flex flex-wrap mx-6 justify-around lg:mx-36 mt-10 items-center gap-4">

        <a
        href="#"
        class="block max-w-sm p-6 text-left border rounded-2xl shadow-lg bg-[#EFE5FF]"
      >
        <p class="font-normal">
        “Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “
        </p>

        <div className="flex flex-wrap ml-4 mt-5">
                <div className="">
                  <img className="" src={Ellipse} />
                </div>
                <div className="sm:text-left ml-4">
                  <h2>Theresa Webb</h2>
                  <p> HR Manager, Amazon </p>
                </div>
              </div>
      </a>

      <a
        href="#"
        class="block max-w-sm p-6 border lg:mt-12 text-left rounded-2xl shadow-lg bg-[#EFE5FF]"
      >
        <p class="font-normal">
        “Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! ““ Rework has been a great way to make the hiring process easier and faster. Highly recommend! “
        </p>

        <div className="flex flex-wrap ml-4 mt-5">
                <div className="">
                  <img className="" src={Ellipse1} />
                </div>
                <div className="sm:text-left ml-4">
                  <h2>Savannah Nguyen</h2>
                  <p> HR Manager, Microsoft </p>
                </div>
              </div>
      </a>


      <a
        href="#"
        class="block max-w-sm text-left p-6 border rounded-2xl shadow-lg bg-[#EFE5FF]"
      >
        <p class="font-normal">
        “Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “
        </p>

        <div className="flex flex-wrap ml-4 mt-5">
                <div className="">
                  <img className="" src={Ellipse} />
                </div>
                <div className="sm:text-left ml-4">
                  <h2>Theresa Webb</h2>
                  <p> HR Manager, Amazon </p>
                </div>
              </div>
      </a>


      <a
        href="#"
        class="block text-left max-w-sm p-6 lg:-mt-24 border rounded-2xl shadow-lg bg-[#EFE5FF]"
      >
        <p class="font-normal">
        “ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster. Highly recommend! “
        </p>

        <div className="flex flex-wrap ml-4 mt-5">
                <div className="">
                  <img className="" src={Ellipse2} />
                </div>
                <div className="sm:text-left ml-4">
                  <h2>Ronald Richards</h2>
                  <p> HR Manager, Google </p>
                </div>
              </div>
      </a>

     
      <a
        href="#"
        class="block text-left max-w-sm lg:mt-2 p-6 border rounded-2xl shadow-lg bg-[#EFE5FF]"
      >
        <p class="font-normal">
        “Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! 
        </p>

        <div className="flex flex-wrap ml-4 mt-5">
                <div className="">
                  <img className="" src={Ellipse} />
                </div>
                <div className="sm:text-left ml-4">
                     <h2>Ronald Richards</h2>
                  <p> HR Manager, Google </p>
                </div>
              </div>
      </a>

      <a
        href="#"
        class="block max-w-sm text-left lg:-mt-24 p-6 border rounded-2xl shadow-lg bg-[#EFE5FF]"
      >
        <p class="font-normal">
        “ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster. Highly recommend! “
        </p>

        <div className="flex flex-wrap ml-4 mt-5">
                <div className="">
                  <img className="" src={Ellipse} />
                </div>
                <div className="sm:text-left ml-4">
                <h2>Ronald Richards</h2>
                  <p> HR Manager, Google </p>
                </div>
              </div>
      </a>



        </div>

      <div className="lg:mt-44 mt-10 bg-[#F6F6F6] flex flex-wrap justify-around content-center items-center text-black">
        <div className="flex flex-wrap justify-around gap-20">
          <div className="lg:text-4xl text-2xl mx-2 lg:h-72 lg:max-w-sm lg:text-left">
            <span className="text-[#5C27C0] font-bold">
              How Rework AI has been a good
            </span>{" "}
            <span className="text-[#5C27C0]">
              Hiring platform for Companies
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center text-center lg:-mt-20 lg:gap-10">
            <div className="w-56 h-56">
              <h1 className="text-6xl text-[#5C27C0] font-bold justify-center items-center">
                80%
              </h1>
              <p className="lg:mt-6 mt-4 text-xl">
                Reduction in your recruitment TAT with the access to a wider
                talent pool on the platform
              </p>
            </div>

            <div className="w-64 h-60 md:mt-2">
              <h1 className="text-6xl text-[#5C27C0] font-bold justify-center items-center">
                50%
              </h1>
              <p className="lg:mt-7 mt-6 text-xl">
                Streamline your budgeting and save money while finding the top
                candidates
              </p>
            </div>

            <div className="w-56 h-56">
              <h1 className="text-6xl text-[#5C27C0] font-bold justify-center items-center">
                10k
              </h1>
              <p className="mt-5 text-xl">
                Certified sourcing partners’ expertise
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Customer;
