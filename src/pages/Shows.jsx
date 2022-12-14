import React from 'react'
import { Link } from 'react-router-dom'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-14 lg:gap-[136px] w-10/12 mx-auto my-24 max-w-4xl xl:max-w-5xl">
            {shows.map((show) => (
                <div key={show.id} className="bg-[#F7F8F9] flex flex-col items-center justify-center rounded-[60px] p-7">
                    <img className="rounded-[20px] w-[144px] h-[144px] object-cover" src={sammy} alt="" />
                    <p className="text-[#626F86] my-2">{show.date}</p>
                    <Link to="/shows" className="text-xl font-medium underline">{show.performer}</Link>
                    <span className="my-2 text-[#626F86]">performing at</span>
                    <Link to="/shows" className="text-xl text-center font-medium underline">{show.venue}</Link>
                </div>
            ))}
        </div>
    )
}

export default Shows