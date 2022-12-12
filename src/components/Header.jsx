import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <nav className="px-16 py-5 flex justify-between items-center ">
            <span>
                <Link to="/" > <img src={logo} className=" w-28" /> </Link>
            </span>
            <ul className="flex capitalize text-base text-black font-semibold">
                <li className="pr-11">
                    <Link to="/venues">Venues</Link>
                </li>
                <li className="pr-11">
                    <Link to="/artists">Artists</Link>
                </li>
                <li className="pr-6">
                    <Link to="/shows">Shows</Link>
                </li>
            </ul>
        </nav>
    )
}