import React from "react";
import Pagination from "../components/pagination";

export default function Venue() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-2">
        <div className="   hover:bg-gray-200 transition cursor-pointer ease-out duration-500 hover:scale-105 hover:opacity-70 mb-6 flex w-[350px] h-[80px] bg-[#F7F8F9]  border rounded-[60px] md:h-[100px] md:w-[65%]">
          <div className=" h-[80px] md:h-[100px] w-[902px] ml-[5px] flex  items-center ">
            <div>
              <img
                src="src\assets\Rectangle 2.png"
                className=" ml-[25px] w-[45px]   object-cover h-[45px] md:w-[60px] md:h-[60px] md:ml-[40px]"
              />
            </div>
            <div className=" ml-3 md:ml-[30px] ">
              <h1 className=" text-[13px]  leading-5 font-semibold md:[24px] md:leading-8 md:text-base">
                Park Square Live Music & Coffee
              </h1>
              <p className="font-semibold text-[10px] leading-3 md:[18px] md:text-sm text-[#626F86] md:leading-6">
                No.3,Obansanjo rd,Yaba,Lagos State
              </p>
            </div>
            <div>
              <img
                src="src\assets\🧬 chevron-right-circle - Light.svg"
                className="w-[22px] h-[22px] object-cover ml-[25px] md:w-[25px] md:h-[25px]  md:ml-[445px]  "
              />
            </div>
          </div>
        </div>
        <div className="  hover:bg-gray-200 transition cursor-pointer ease-out duration-500 hover:scale-105 hover:opacity-70  mb-6 flex w-[350px] h-[80px] bg-[#F7F8F9]  border rounded-[60px] md:h-[100px] md:w-[65%]">
          <div className=" h-[80px] md:h-[100px] w-[902px] ml-[5px] flex  items-center ">
            <div>
              <img
                src="src\assets\Rectangle 2 (1).png"
                className=" ml-[25px] w-[45px] h-[45px]  object-cover md:w-[60px] md:h-[60px] md:ml-[40px]"
              />
            </div>
            <div className=" ml-3 md:ml-[30px] ">
              <h1 className=" text-[13px]  leading-5 font-semibold md:[24px] md:leading-8 md:text-base">
                Park Square Live Music & Coffee
              </h1>
              <p className="font-semibold text-[10px] leading-3 md:text-sm text-[#626F86] md:[18px] md:leading-6">
                No.3,Obansanjo rd,Yaba,Lagos State
              </p>
            </div>
            <div>
              <img
                src="src\assets\🧬 chevron-right-circle - Light.svg"
                className="w-[22px] h-[22px] ml-[25px]  object-cover md:w-[25px] md:h-[25px]  md:ml-[445px]  "
              />
            </div>
          </div>
        </div>
        <div className="   hover:bg-gray-200 transition cursor-pointer ease-out duration-500 hover:scale-105 hover:opacity-70 mb-6 flex w-[350px] h-[80px] bg-[#F7F8F9]  border rounded-[60px] md:h-[100px] md:w-[65%]">
          <div className=" h-[80px] md:h-[100px] w-[902px] ml-[5px] flex  items-center ">
            <div>
              <img
                src="src\assets\Rectangle 2 (3).png"
                className=" ml-[25px] w-[45px] h-[45px] md:w-[60px] md:h-[60px] md:ml-[40px]"
              />
            </div>
            <div className=" ml-3 md:ml-[30px] ">
              <h1 className=" text-[13px]  leading-5 font-semibold md:[24px] md:leading-8 md:text-base">
                Park Square Live Music & Coffee
              </h1>
              <p className="font-semibold text-[10px] leading-3 md:text-sm text-[#626F86]  md:[18px] md:leading-6">
                No.3,Obansanjo rd,Yaba,Lagos State
              </p>
            </div>
            <div>
              <img
                src="src\assets\🧬 chevron-right-circle - Light.svg"
                className="w-[22px] h-[22px] ml-[25px]  object-cover md:w-[25px] md:h-[25px]  md:ml-[445px]  "
              />
            </div>
          </div>
        </div>
        <div className="   hover:bg-gray-200 transition cursor-pointer ease-out duration-500 hover:scale-105 hover:opacity-70  flex w-[350px] h-[80px] bg-[#F7F8F9]  border rounded-[60px] md:h-[100px] md:w-[65%]">
          <div className=" h-[80px] md:h-[100px] w-[902px] ml-[5px] flex  items-center ">
            <div>
              <img
                src="src\assets\Rectangle 2 (2).png"
                className=" ml-[25px] w-[45px] h-[45px]  object-cover md:w-[60px] md:h-[60px] md:ml-[40px]"
              />
            </div>
            <div className=" ml-3 md:ml-[30px] ">
              <h1 className=" text-[13px]  leading-5 font-semibold md:[24px] md:leading-8 md:text-base">
                Park Square Live Music & Coffee
              </h1>
              <p className="font-semibold text-[10px] leading-3 md:text-sm text-[#626F86] md:[18px] md:leading-6">
                No.3,Obansanjo rd,Yaba,Lagos State
              </p>
            </div>
            <div>
              <img
                src="src\assets\🧬 chevron-right-circle - Light.svg"
                className="w-[22px] h-[22px] ml-[25px]  object-cover md:w-[25px] md:h-[25px]  md:ml-[445px]  "
              />
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
}
