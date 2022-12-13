import React from "react";
import _logo from '../assets/logo.png';
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <nav className="md:px-[69px] px-6 py-5 flex justify-between items-center ">
            <span>
                <Link to="/" > <img src={_logo} className=" md:w-28 md:h-[77px] w-14" /> </Link>
            </span>
            <ul className="flex capitalize text-sm md:text-base leading-[21.86px] text-black font-semibold">
                <li className="md:pr-11 pr-5">
                    <Link to="/venues">Venues</Link>
                </li>
                <li className="md:pr-11 pr-5">
                    <Link to="/artists">Artists</Link>
                </li>
                <li className="md:pr-6">
                    <Link to="/shows">Shows</Link>
                </li>
            </ul>
        </nav>
    )
}