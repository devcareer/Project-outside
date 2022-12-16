import React from 'react'
import { Link } from 'react-router-dom';
const artists = [
	{
		id: 1,
		name: 'Sammy',
		address: '@sammy_sings',
		imageUrl: 'src/assets/Rectangle 2 (4).png'
	},
	{
		id: 2,
		name: 'Olami_Laycon',
		address: '@olami_lekan',
		imageUrl: 'src/assets/Rectangle 2 (6).png'
	},
	{
		id: 3,
		name: 'Richies',
		address: '@richies_',
		imageUrl: 'src/assets/Rectangle 2 (5).png'
	}
];

export default function Artists() {
	return (
		<div className="my-[65px]">
			{artists.map((artist) => (
				<Link
					to="#"
					key={artist.id}
					className="block py-[27px] mb-10 bg-[#F7F8F9] rounded-[60px] md:w-[90%] mx-auto hover:bg-gray-200 transition ease-out duration-500 hover:scale-105 hover:opacity-70"
				>
					<div className="flex flex-col sm:flex-row gap-y-4 gap-x-[30px] items-center justify-start w-[90%] mx-auto">
						<img
							src={artist.imageUrl}
							className="w-[100px] h-[100px] object-cover"
						/>
						<div className="flex justify-center sm:justify-between w-[90%]">
							<div className="text-center sm:text-left">
								<h2 className="text-xl md:text-[24px] font-Manrope mb-2">
									{artist.name}
								</h2>
								<p className="text-base md:text-[18px] font-Manrope text-[#626F86]">
									{artist.address}
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

