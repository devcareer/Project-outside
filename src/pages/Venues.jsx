import React from 'react';
import { Link } from 'react-router-dom';
// import Pagination from "../components/pagination";

const venues = [
	{
		id: 1,
		name: 'Park Square Live Music & Coffee',
		address: 'No. 3, Obasanjo rd. Yaba, Lagos State',
		imageUrl: 'src/assets/Rectangle 2.png'
	},
	{
		id: 2,
		name: 'Park Square Live Music & Coffee',
		address: 'No. 3, Obasanjo rd. Yaba, Lagos State',
		imageUrl: 'src/assets/Rectangle 2.png'
	},
	{
		id: 3,
		name: 'Park Square Live Music & Coffee',
		address: 'No. 3, Obasanjo rd. Yaba, Lagos State',
		imageUrl: 'src/assets/Rectangle 2.png'
	}
];

export default function Venues() {
	return (
		<div className="my-[65px]">
			{venues.map((venue) => (
				<Link
					to="#"
					key={venue.id}
					className="block py-[27px] mb-10 bg-[#F7F8F9] rounded-[60px] md:w-[90%] mx-auto hover:bg-gray-200 transition ease-out duration-500 hover:scale-105 hover:opacity-70"
				>
					<div className="flex flex-col sm:flex-row gap-y-4 gap-x-[30px] items-center justify-start w-[90%] mx-auto">
						<img
							src={venue.imageUrl}
							className="w-[80px] h-[80px] object-cover"
						/>
						<div className="flex justify-center sm:justify-between w-[90%]">
							<div className="text-center sm:text-left">
								<h2 className="text-xl font-Manrope mb-2">{venue.name}</h2>
								<p className="text-base font-Manrope text-[#626F86]">
									{venue.address}
								</p>
							</div>
							<img
								src="src\assets\🧬 chevron-right-circle - Light.svg"
								className="hidden sm:block"
							/>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
