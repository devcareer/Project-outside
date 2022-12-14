import React from "react";

export default function Pagination() {
  return (
    <div className="flex justify-around mt-[62px] ">
      <div className=" text-[10px] md:text-[14px] leading-5 font-medium">
        Showing 10 of 30
      </div>
      <div className="flex  ">
        <div className=" mr-6 text-[13px] h-[30px] w-[70px]  md:h-[41px] md:w-[132px]  hover:bg-gray-600 cursor-pointer transition ease-out duration-500 hover:scale-105 hover:opacity-50 text-white border rounded-[20px] flex items-center justify-center bg-[#0C66E4] md:text-[16px] md:leading-8 md:font-semibold">
          Prev
        </div>
        <div className=" text-[13px] h-[30px] w-[70px] hover:bg-gray-300  cursor-pointer transition ease-out duration-500 hover:scale-105 hover:opacity-80 md:h-[41px] md:w-[132px] text-[#0C66E4] border rounded-[20px] flex items-center justify-center bg-[#E9F2FF]  md:text-[16px] md:leading-8 md:font-semibold">
          Next
        </div>
      </div>
    </div>
  );
}
