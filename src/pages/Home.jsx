import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/landing-img.png';

export default function Home() {
	return (
		<div className="flex flex-col-reverse md:flex-row items-center  justify-around  mt-10 md:mt-28 mb-16">
			<div>
				<h1 className="text-3xl font-medium font-Manrope text-center md:text-left">
					“Where <span className="font-extrabold">Artist</span> meets{' '}
					<span className="font-extrabold">Venue</span>”
				</h1>

				<div className="flex justify-evenly md:gap-x-16 mt-10">
					<Link
						to="/venues"
						className="bg-[#0C66E4] px-6 md:px-10 py-3 text-white text-base md:text-lg rounded-[20px] font-medium font-Manrope"
					>
						Find a venue
					</Link>
					<Link
						to="/venues/add"
						className="bg-[#E9F2FF] px-6 md:px-10 py-3 text-[#0C66E4] text-base md:text-lg rounded-[20px] font-medium font-Manrope"
					>
						Post a venue
					</Link>
				</div>

				<div className="flex justify-evenly md:gap-x-16 mt-8">
					<Link
						to="/artists"
						className="bg-[#0C66E4] px-6 md:px-10 py-3 text-white text-base md:text-lg rounded-[20px] font-medium font-Manrope"
					>
						Find an artist
					</Link>
					<Link
						to="/artists/add"
						className="bg-[#E9F2FF] px-6 md:px-10 py-3 text-[#0C66E4] text-base md:text-lg rounded-[20px] font-medium font-Manrope"
					>
						Post an artist
					</Link>
				</div>

				<p className="font-medium font-Manrope mt-20 text-center md:text-left">
					Find a show and publicise yours for free
				</p>

				<div className="flex justify-evenly md:gap-x-16 mt-5">
					<Link
						to="/shows"
						className="bg-[#0C66E4] px-6 md:px-10 py-3 text-white text-base md:text-lg rounded-[20px] font-medium"
					>
						Find a show
					</Link>
					<Link
						to="/shows/add"
						className="bg-[#E9F2FF] px-6 md:px-10 py-3 text-[#0C66E4] text-base md:text-lg rounded-[20px] font-medium"
					>
						Post a show
					</Link>
				</div>
			</div>

			<div>
				<img
					src={image}
					alt="hero image"
					className="w-[80%] mx-auto mb-10 md:mb-0 md:mr-0 md:ml-auto"
				/>
			</div>
		</div>
	);
}

// export default function Home() {
//     return (
//         <div className="mx-auto text-center md:max-w-[1400px] md:px-16 md:pt-24 pt-[25px] flex flex-col-reverse lg:flex-row  md:justify-between md:items-center px-6 gap-10">
//             {/* <div > */}
//                 <div className="">
//                     <h1 className=" text-[33px] md:font-medium sm:text-[40px]">“Where <span className="font-extrabold">Artist</span> meets <span className="font-extrabold">Venue</span>”</h1>
//                     <div className="flex justify-center md:gap-16 sm:gap-10 gap-9 md:text-2xl text-[20px] font-semibold xl:pt-14 lg:pt-6 md:pt-14 sm:pt-10 pt-8">
//                         <a href="#" className="bg-[#0C66E4] text-[#ffffff] border rounded-[20px] md:py-[16.5px] md:px-[39px] sm:py-3 sm:px-10 py-2 px-5"><div>Find a venue</div></a>
//                         <a href="#" className="bg-[#E9F2FF] text-[#0C66E4] border rounded-[20px] md:py-[16.5px] md:px-[39px] sm:py-3 sm:px-10 py-2 px-5"><div>Post a venue</div></a>
//                     </div>
//                     <div className="md:text-2xl text-[20px] flex justify-center md:gap-16 sm:gap-10 gap-9 font-semibold xl:pt-14 lg:pt-6 md:pt-14 sm:pt-10 pt-6">
//                         <a href="#" className=" bg-[#0C66E4] text-[#ffffff] border rounded-[20px] md:py-[16.5px] md:px-[35.5px] sm:py-3 sm:px-9 py-2 px-5"><div>Find an artist</div></a>
//                         <a href="#" className=" bg-[#E9F2FF] text-[#0C66E4] border rounded-[20px] md:py-[16.5px] md:px-[35.5px] sm:py-3 sm:px-9 py-2 px-5"><div>Post an artist</div></a>
//                     </div>
//                     <p className="md:text-2xl text-[20px] font-medium md:text-left md:pl-6 xl:pt-14 lg:pt-6 md:pt-14 sm:pt-10 pt-6">Find a show and publicize yours for free</p>
//                     <div className="md:text-2xl text-[18px] flex justify-center md:items-center md:gap-16 sm:gap-10 gap-9 font-semibold md:pt-6 sm:pt-4 pt-3">
//                         <a href="#" className="bg-[#0C66E4] text-[#ffffff] border rounded-[20px] md:py-[16.5px] md:px-11 sm:py-3 sm:px-12 py-2 px-8"><div>Find a show</div></a>
//                         <a href="#" className="bg-[#E9F2FF] text-[#0C66E4] border rounded-[20px] md:py-[16.5px] md:px-11 sm:py-3 sm:px-12 py-2 px-8"><div>Post a show</div></a>
//                     </div>
//                 </div>

//                 <div className=" ">
//                     <img src={image} className=" w-[100%] mx-auto lg:ml-auto xl:w-[100%]  " />
//                 </div>
//                 {/* md:h-[37.325rem]  sm:h-[17.325rem] */}
//             {/* </div> */}
//         </div>
//     )
// }
