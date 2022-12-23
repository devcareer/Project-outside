import React from 'react';
import { useRef, useState } from 'react';
// import { useApiPostRequest } from '../hooks/useApiRequest';
// import { FormData } from 'form-data';
import axios from 'axios';

function ListArtist() {
	const [formValues, setFormValues] = useState({
		name: '',
		phone: '',
		email: '',
		city: '',
		state: '',
		image: '',
		instagram: ''
	});
	console.log(formValues);

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(
				'https://project-outside.onrender.com/api/v1/api/artists/create',
				formValues
			)
			.then((response) => console.log(response.data))
			.catch((error) => console.error(error));
	};

	const handleFileInputChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			const base64Data = reader.result;
			// Send the base64 data to the backend
			setFormValues({ ...formValues, image: base64Data });
		};

		reader.readAsDataURL(file);
	};

	const fileInputRef = useRef();

	return (
		<div className="font-[Manrope] flex flex-col justify-center w-full max-w-2xl mx-auto">
			<h1 className="my-4 text-3xl md:text-4xl text-left w-full font-semibold">
				List an Artist
			</h1>
			<form
				onSubmit={handleSubmit}
				className="space-y-3 grid grid-cols-1 sm:grid-cols-2 w-full gap-x-4 mb-5"
				action=""
			>
				<div className="w-full col-span-2">
					<label className="text-sm" htmlFor="">
						Name
					</label>
					<input
						onChange={(e) =>
							setFormValues({ ...formValues, name: e.target.value })
						}
						type="text"
						placeholder="Name"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<label className="text-sm" htmlFor="">
						Phone
					</label>
					<input
						onChange={(e) =>
							setFormValues({ ...formValues, phone: e.target.value })
						}
						type="text"
						placeholder="Phone"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<label className="text-sm" htmlFor="">
						Email
					</label>
					<input
						onChange={(e) =>
							setFormValues({ ...formValues, email: e.target.value })
						}
						type="email"
						placeholder="Email"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<label className="text-sm" htmlFor="">
						City
					</label>
					<input
						onChange={(e) =>
							setFormValues({ ...formValues, city: e.target.value })
						}
						type="text"
						placeholder="City"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<label className="text-sm" htmlFor="">
						State
					</label>
					<input
						onChange={(e) =>
							setFormValues({ ...formValues, state: e.target.value })
						}
						type="text"
						placeholder="State"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<label className="text-sm" htmlFor="">
						Genres
					</label>
					<input
						type="text"
						placeholder="Genres"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<label className="text-sm" htmlFor="">
						Website
					</label>
					<input
						type="text"
						placeholder="Website"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<label className="text-sm" htmlFor="">
						Image
					</label>
					<input
						type="file"
						ref={fileInputRef}
						onChange={handleFileInputChange}
						placeholder="Upload"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<div className="col-span-2 sm:col-span-1">
					<label className="text-sm" htmlFor="">
						Instagram URL
					</label>
					<input
						onChange={(e) =>
							setFormValues({ ...formValues, instagram: e.target.value })
						}
						type="text"
						placeholder="Instagram URL"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<div className="col-span-2">
					<label className="text-sm" htmlFor="">
						Seeking Talent
					</label>
					<input
						type="text"
						placeholder="Yes"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<div className="col-span-2">
					<label className="text-sm" htmlFor="">
						Talent description
					</label>
					<textarea
						name=""
						placeholder="Type your description here..."
						className="rounded-sm w-full border-2 border-gray-300 p-2"
						id=""
						rows="5"
					></textarea>
				</div>
				<button className="col-span-2 rounded-xl w-full bg-[#0C66E4] p-3 my-3 text-white">
					Create Artist
				</button>
			</form>
		</div>
	);
}

export default ListArtist;
