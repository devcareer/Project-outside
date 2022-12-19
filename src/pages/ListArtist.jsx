import React from 'react'

function ListArtist() {
  return (
    <div className="font-[Manrope] h-[75vh] flex flex-col justify-center w-full max-w-2xl mx-auto">
        <h1 className="my-4 text-3xl md:text-4xl text-left w-full">List an Artist</h1>
        <form className="space-y-3" action="">
            <div>
                <label htmlFor="">Name</label>
                <input 
                    type="text" 
                    placeholder="Name"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <div>
                <label htmlFor="">Phone</label>
                <input 
                    type="text" 
                    placeholder="Phone"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input 
                    type="text" 
                    placeholder="Name"
                    className="rounded-sm w-full border-2 border-gray-300 p-2"
                />
            </div>
            <button className="rounded-xl w-full bg-[#0C66E4] p-3 my-2 text-white">Create Artist</button>
        </form>
    </div>
  )
}

export default ListArtist