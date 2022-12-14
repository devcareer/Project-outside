import React from 'react'
import sammy from '../assets/images/sammy.svg'
function Shows() {

    const shows = [
        {
            id: 1,
            date: "Saturday, April 22, 2023",
            performer: "Sammy",
            venue: "Park Square Live Music & Coffee"
        },
        {
            id: 2,
            date: "Saturday, April 22, 2023",
            performer: "Sammy",
            venue: "Park Square Live Music & Coffee"
        },
        {
            id: 3,
            date: "Saturday, April 22, 2023",
            performer: "Sammy",
            venue: "Park Square Live Music & Coffee"
        },
        {
            id: 4,
            date: "Saturday, April 22, 2023",
            performer: "Sammy",
            venue: "Park Square Live Music & Coffee"
        },
        {
            id: 5,
            date: "Saturday, April 22, 2023",
            performer: "Sammy",
            venue: "Park Square Live Music & Coffee"
        },
        {
            id: 6,
            date: "Saturday, April 22, 2023",
            performer: "Sammy",
            venue: "Park Square Live Music & Coffee"
        },
        {
            id: 7,
            date: "Saturday, April 22, 2023",
            performer: "Sammy",
            venue: "Park Square Live Music & Coffee"
        },
        {
            id: 8,
            date: "Saturday, April 22, 2023",
            performer: "Sammy",
            venue: "Park Square Live Music & Coffee"
        },
        {
            id: 9,
            date: "Saturday, April 22, 2023",
            performer: "Sammy",
            venue: "Park Square Live Music & Coffee"
        },
        {
            id: 10,
            date: "Saturday, April 22, 2023",
            performer: "Sammy",
            venue: "Park Square Live Music & Coffee"
        }
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap:16 w-10/12 mx-auto">
            {shows.map((show) => (
                <div key={show.id} className="bg-[#F7F8F9] flex flex-col items-center justify-center rounded-2xl p-7">
                    <img src={sammy} alt="" />
                    <p className="text-[#626F86] my-2">{show.date}</p>
                    <h3 className="text-xl font-medium underline">{show.performer}</h3>
                    <span className="my-2">performing at</span>
                    <h3 className="text-xl text-center font-medium underline">{show.venue}</h3>
                </div>
            ))}
        </div>
    )
}

export default Shows