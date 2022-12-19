import React from 'react';

function ListShow() {
	return (
		<div className="font-[Manrope] h-[75vh] flex flex-col justify-center w-full max-w-2xl mx-auto">
			<h1 className="my-4 text-3xl md:text-4xl text-left w-full font-semibold">
				List a Show
			</h1>
			<form className="space-y-3" action="">
				<div>
					<label className="text-sm" htmlFor="">
						Artist ID
					</label>
					<small className="text-[#626F86] ml-2">
						ID can be found on the Artist&apos;s
					</small>
					<input
						type="text"
						placeholder="Artist ID"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<div>
					<label className="text-sm" htmlFor="">
						Venue ID
					</label>
					<small className="text-[#626F86] ml-2">
						ID can be found on the Venue&apos;s
					</small>
					<input
						type="text"
						placeholder="Artist ID"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<div>
					<label className="text-sm" htmlFor="">
						Start Time
					</label>
					<input
						type="datetime-local"
						placeholder="22/12/2022"
						className="rounded-sm w-full border-2 border-gray-300 p-2"
					/>
				</div>
				<button className="rounded-xl w-full bg-[#0C66E4] p-3 my-2 text-white">
					Create Show
				</button>
			</form>
		</div>
	);
}

export default ListShow;
