import React from "react";
import Header from "../../components/Header";
import image from '../../assets/landing-img.png';
import '../../pages/Home/Homepage.css';


export default function Home() {
    return (
        <div className="mx-auto text-center md:max-w-screen-2xl md:px-16 md:pt-24 pt-[25px] md:flex md:justify-between md:items-center px-6">
            {/* <div > */}
                <div className="">
                    <h1 className="md:text-[40px] text-[33px] md:font-medium">“Where <span className="font-extrabold">Artist</span> meets <span className="font-extrabold">Venue</span>”</h1>
                    <div className="flex justify-center md:gap-16 gap-9 md:text-2xl text-[20px] font-semibold md:pt-14 pt-6">
                        <a href="#" className="bg-[#0C66E4] text-[#ffffff] border rounded-[20px] md:py-[16.5px] md:px-[39px] py-2 px-5"><div>Find a venue</div></a>
                        <a href="#" className="bg-[#E9F2FF] text-[#0C66E4] border rounded-[20px] md:py-[16.5px] md:px-[39px] py-2 px-5"><div>Post a venue</div></a>
                    </div>
                    <div className="md:text-2xl text-[20px] flex justify-center md:gap-16 gap-9 font-semibold md:pt-14 pt-6">
                        <a href="#" className=" bg-[#0C66E4] text-[#ffffff] border rounded-[20px] md:py-[16.5px] md:px-[35.5px] py-2 px-5"><div>Find an artist</div></a>
                        <a href="#" className=" bg-[#E9F2FF] text-[#0C66E4] border rounded-[20px] md:py-[16.5px] md:px-[35.5px] py-2 px-5"><div>Post an artist</div></a>
                    </div>
                    <p className="md:text-2xl text-[20px] font-medium md:text-left md:pl-3 md:pt-14 pt-6">Find a show and publicize yours for free</p>
                    <div className="md:text-2xl text-[18px] flex justify-center md:items-center md:gap-16 gap-9 font-semibold md:pt-6 pt-6">
                        <a href="#" className="bg-[#0C66E4] text-[#ffffff] border rounded-[20px] md:py-[16.5px] md:px-11 py-2 px-8"><div>Find a show</div></a>
                        <a href="#" className="bg-[#E9F2FF] text-[#0C66E4] border rounded-[20px] md:py-[16.5px] md:px-11 py-2 px-8"><div>Post a show</div></a>
                    </div>
                </div>

                <div className="hidden md:block">
                    <img src={image} className="landing-image w-[40.25rem] h-[37.325]" />
                </div>
            {/* </div> */}
        </div>
    )
}