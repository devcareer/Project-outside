import React from "react";
import _logo from '../assets/_logo.svg';
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <nav className="md:px-[69px] px-6 py-5 flex justify-between items-center ">
            <span>
                <Link to="/" > <img src={_logo} className="md:h-[77px] w-14 md:w-28" /> </Link>
            </span>
            <ul className="flex capitalize text-sm md:text-base leading-[21.86px] text-black font-semibold">
                <li className="md:pr-11 pr-5 hover:font-extrabold active:font-extrabold">
                    <Link to="/venues">Venues</Link>
                </li>
                <li className="md:pr-11 pr-5 hover:font-extrabold active:font-extrabold">
                    <Link to="/artists">Artists</Link>
                </li>
                <li className="md:pr-6 hover:font-extrabold active:font-extrabold">
                    <Link to="/shows">Shows</Link>
                </li>
            </ul>
        </nav>
    )
}