import React from 'react';
import { Link } from 'react-router-dom';
import singlevenue from '../assets/Rectangle.svg';
import link from '../assets/link.svg';
import mail from '../assets/mail.svg';
import phone from '../assets/phone.svg';
import gram from '../assets/gram.svg';
import location from '../assets/location.svg';

function SingleVenue() {
	return (
		<div className="flex flex-col gap-10 items-center sm:flex-row sm:justify-around sm:items-stretch pt-1 text-sm">
			<div className="w-[35%] h-[auto] sm:w-[38%] md:w-[34%] ">
				<img src={singlevenue} alt="a nice venue" />
			</div>

			<div className="text-center sm:text-justify">
				<div className="font-black text-l sm:text-xl">
					<h1>Park Square Live Music & Coffee</h1>
				</div>
				<div className="mt-1 text-[#172B4D] text-xs sm:text-sm">
					<p>ID: 6391f28d531c042836e8a320</p>
				</div>

				<div className="text-[#172B4D] flex flex-row gap-6 mt-3 font-2 justify-center sm:inline-flex">
					<p className="bg-slate-200 pr-1.5 pl-1.5 text-xs sm:text-sm rounded-full">
						HipHop
					</p>
					<p className="bg-slate-200 pr-1.5 pl-1.5 text-xs sm:text-sm rounded-full">
						Karaoke
					</p>
					<p className="bg-slate-200 pr-1.5 pl-1.5 text-xs sm:text-sm rounded-full">
						Afro Beat
					</p>
				</div>
				<div className="mt-5">
					<div className="flex gap-5 text-[#172B4D] text-xs sm:hover:scale-x-110 sm:text-sm">
						<img src={link} alt="link" />
						<Link to="https://www.parksquare.com">
							https://www.parksquare.com
						</Link>
					</div>
					<div className="flex mt-3 gap-5 text-[#172B4D] text-xs sm:text-sm sm:hover:scale-x-110">
						<img src={mail} alt="mail" />
						<Link to="parksquare@gmail.com">parksquare@gmail.com</Link>
					</div>
					<div className="flex mt-3 gap-5 text-[#172B4D] text-xs sm:text-sm sm:hover:scale-x-110">
						<img src={phone} alt="phone" />
						<p>
							<a href="tel:+2347063346262">0706 3346 262</a>
						</p>
					</div>
					<div className="flex mt-3 gap-5 text-[#172B4D] text-xs sm:text-sm sm:hover:scale-x-110">
						<img src={gram} alt="gram" />
						<Link to="https://www.instagram.com/parksquare">
							https://www.instagram.com/parksquare
						</Link>
					</div>
					<div className="flex mt-3 gap-5 text-[#172B4D]  text-xs sm:text-sm">
						<img src={location} alt="location" />
						<p>No. 3, Obasanjo rd. Yaba, Lagos State</p>
					</div>
				</div>

				<div className="mt-8 sm:mt-6">
					<div>
						<h1 className="font-black text-l sm:text-xl">Upcoming Shows</h1>
						<p className="text-[#172B4D] text-xs mt-3 sm:hover:scale-x-110 sm:mt-1 sm:text-sm">
							<Link to="#">Karaoke Untammed</Link>
						</p>

						<p className="text-[#172B4D] mt-1 text-xs sm:hover:scale-x-110 sm:text-sm">
							<Link to="#">A night with Burna boy</Link>
						</p>
					</div>
					<div className="mt-6 sm:mt-4">
						<h1 className="font-black text-l sm:text-xl">Past Shows</h1>
						<p className="text-[#172B4D] mt-3 text-xs sm:hover:scale-x-110 sm:text-sm sm:mt-1">
							<Link to="#">Let them hear</Link>
						</p>
						<p className="text-[#172B4D] mt-1 text-xs sm:hover:scale-x-110 sm:text-sm">
							<Link to="#">A night with Fireboy</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleVenue;
