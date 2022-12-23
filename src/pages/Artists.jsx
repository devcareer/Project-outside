import React from 'react';
import { Link } from 'react-router-dom';
import { useApiGetRequest } from '../hooks/useApiRequest';

// const artists = [
// 	{
// 		id: 1,
// 		name: 'Sammy',
// 		address: '@sammy_sings',
// 		imageUrl: 'src/assets/Rectangle 2 (4).png'
// 	},
// 	{
// 		id: 2,
// 		name: 'Olami_Laycon',
// 		address: '@olami_lekan',
// 		imageUrl: 'src/assets/Rectangle 2 (6).png'
// 	},
// 	{
// 		id: 3,
// 		name: 'Richies',
// 		address: '@richies_',
// 		imageUrl: 'src/assets/Rectangle 2 (5).png'
// 	}
// ];

export default function Artists() {
	const {
		error,
		isLoaded,
		items: { artists }
	} = useApiGetRequest('/artists');

	console.log(error, isLoaded);

	if (error && error.message) {
		return (
			<div className="flex justify-center h-[calc(100vh-78.5px)] items-center">
				Something went wrong! 😣
			</div>
		);
	}

	return (
		<div className="my-[65px]">
			{!isLoaded ? (
				<div>loading.....</div>
			) : (
				artists.map((artist) => (
					<Link
						to="#"
						key={artist.id}
						className="block py-[27px] mb-10 bg-[#F7F8F9] rounded-[60px] md:w-[90%] mx-auto hover:bg-gray-200 transition ease-out duration-500 hover:scale-105 hover:opacity-70"
					>
						<div className="flex flex-col sm:flex-row gap-y-4 gap-x-[30px] items-center justify-start w-[90%] mx-auto">
							<img
								src={artist.image_link}
								className="w-[80px] h-[80px] object-cover border rounded-[20px]"
							/>
							<div className="flex justify-center sm:justify-between w-[90%]">
								<div className="text-center sm:text-left">
									<h2 className="text-xl font-Manrope mb-2">{artist.name}</h2>
									<p className="text-base font-Manrope text-[#626F86]">
										{artist.instagram_handle || 'Nill'}
									</p>
								</div>
								<img
									src="src\assets\🧬 chevron-right-circle - Light.svg"
									className="hidden sm:block"
								/>
							</div>
						</div>
					</Link>
				))
			)}
		</div>
	);
}
