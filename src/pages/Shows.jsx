import React from 'react';
import { Link } from 'react-router-dom';
import sammy from '../assets/images/sammy.svg';
function Shows() {
	const shows = [
		{
			id: 1,
			date: 'Saturday, April 22, 2023',
			performer: 'Sammy',
			venue: 'Park Square Live Music & Coffee'
		},
		{
			id: 2,
			date: 'Saturday, April 22, 2023',
			performer: 'Sammy',
			venue: 'Park Square Live Music & Coffee'
		},
		{
			id: 3,
			date: 'Saturday, April 22, 2023',
			performer: 'Sammy',
			venue: 'Park Square Live Music & Coffee'
		},
		{
			id: 4,
			date: 'Saturday, April 22, 2023',
			performer: 'Sammy',
			venue: 'Park Square Live Music & Coffee'
		},
		{
			id: 5,
			date: 'Saturday, April 22, 2023',
			performer: 'Sammy',
			venue: 'Park Square Live Music & Coffee'
		},
		{
			id: 6,
			date: 'Saturday, April 22, 2023',
			performer: 'Sammy',
			venue: 'Park Square Live Music & Coffee'
		},
		{
			id: 7,
			date: 'Saturday, April 22, 2023',
			performer: 'Sammy',
			venue: 'Park Square Live Music & Coffee'
		},
		{
			id: 8,
			date: 'Saturday, April 22, 2023',
			performer: 'Sammy',
			venue: 'Park Square Live Music & Coffee'
		},
		{
			id: 9,
			date: 'Saturday, April 22, 2023',
			performer: 'Sammy',
			venue: 'Park Square Live Music & Coffee'
		},
		{
			id: 10,
			date: 'Saturday, April 22, 2023',
			performer: 'Sammy',
			venue: 'Park Square Live Music & Coffee'
		}
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 md:gap-y-6 lg:gap-[136px] lg:gap-y-[40px] w-10/12 mx-auto my-24">
			{shows.map((show) => (
				<div
					key={show.id}
					className="bg-[#F7F8F9] w-full lg:max-w-[492px] flex flex-col items-center justify-center rounded-[60px] p-[33px] mx-auto md:mx-0"
				>
					<img
						className=" rounded-[20px] w-[144px] h-[144px] object-cover"
						src={sammy}
						alt=""
					/>
					<p className="font-Manrope text-lg text-[#626F86] mt-8 ">
						{show.date}
					</p>
					<Link to="#" className="text-2xl font-medium underline my-[14px]">
						{show.performer}
					</Link>
					<span className="font-Manrope text-lg my-2 text-[#626F86] mb-[14px]">
						performing at
					</span>
					<Link
						to="#"
						className="font-Manrope text-2xl text-center font-medium underline"
					>
						{show.venue}
					</Link>
				</div>
			))}
		</div>
	);
}

export default Shows;
