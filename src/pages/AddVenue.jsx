import React from 'react'

function AddVenue() {
  return (
    <div className="font-[Manrope] flex flex-col justify-center w-full max-w-2xl mx-auto">
        <h1 className="my-4 text-3xl md:text-4xl text-left w-full font-semibold">List a new Venue</h1>
        <form className="space-y-3 grid grid-cols-1 sm:grid-cols-2 w-full gap-x-4 mb-5" action="">
            <div className="w-full col-span-2">
                <label classname="text-sm" htmlFor="">Name</label>
                <input 
                    type="text" 
                    placeholder="Name"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <div className="col-span-2 sm:col-span-1">
                <label classname="text-sm" htmlFor="">Phone</label>
                <input 
                    type="number" 
                    placeholder="Phone"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <div className="col-span-2 sm:col-span-1">
                <label classname="text-sm" htmlFor="">Email</label>
                <input 
                    type="email" 
                    placeholder="Email"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <div  className="col-span-2 sm:col-span-1">
                <label classname="text-sm" htmlFor="">City</label>
                <input 
                    type="text" 
                    placeholder="City"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <div  className="col-span-2 sm:col-span-1">
                <label classname="text-sm" htmlFor="">State</label>
                <input 
                    type="text" 
                    placeholder="State"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <div  className="col-span-2 sm:col-span-1">
                <label classname="text-sm" htmlFor="">Genres</label>
                <input 
                    type="text" 
                    placeholder="Genres"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <div className="col-span-2 sm:col-span-1">
                <label classname="text-sm" htmlFor="">Website</label>
                <input 
                    type="text" 
                    placeholder="Website"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <div className="col-span-2 sm:col-span-1">
                <label classname="text-sm" htmlFor="">Image</label>
                <input 
                    type="text" 
                    placeholder="Upload"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <div className="col-span-2 sm:col-span-1">
                <label classname="text-sm" htmlFor="">Instagram URL</label>
                <input 
                    type="text" 
                    placeholder="Instagram URL"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <div className="col-span-2">
                <label classname="text-sm" htmlFor="">Seeking Talent</label>
                <input 
                    type="text" 
                    placeholder="Yes"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <div className="col-span-2">
                <label classname="text-sm" htmlFor="">Talent description</label>
                <textarea 
                    name=""
                    placeholder="Type your description here..."
                    className="rounded-sm w-full border-2 border-gray-300 p-2" 
                    id="" rows="5"></textarea>
            </div>
            <button className="col-span-2 rounded-xl w-full bg-[#0C66E4] p-3 my-3 text-white">Create Venue</button>
        </form>
    </div>
  )
}

export default AddVenue