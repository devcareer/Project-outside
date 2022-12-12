import React from "react";
import Header from "../../components/Header";
import image from '../../assets/landing-img.png';
import '../../pages/Home/Homepage.css';


export default function Home() {
    return (
        <div className="mx-auto text-center max-w-screen-2xl px-16 pt-24 flex justify-between items-center">
            {/* <div > */}
            <div className="">
                    <h1 className="big font-medium">“Where <span className="font-extrabold">Artist</span> meets <span className="font-extrabold">Venue</span>”</h1>
                    <div className="flex gap-16 text-2xl font-semibold pt-14">
                        <a href="#" className="find py-4 px-10"><div>Find a venue</div></a>
                        <a href="#" className="post py-4 px-10"><div>Post a venue</div></a>
                    </div>
                    <div className="text-2xl flex gap-16 font-semibold pt-14">
                        <a href="#" className="find py-4 px-9"><div>Find an artist</div></a>
                        <a href="#" className="post py-4 px-9"><div>Post an artist</div></a>
                    </div>
                    <p className="text-2xl font-medium pl-2 pt-14">Find a show and publicize yours for free</p>
                    <div className="text-2xl flex items-center gap-16 font-semibold pt-6">
                        <a href="#" className="find py-4 px-11"><div>Find a show</div></a>
                        <a href="#" className="post py-4 px-11"><div>Post a show</div></a>
                    </div>
                </div>
                <div>
                    <img src={image} className="landing-image" />
                </div>
            {/* </div> */}
        </div>
    )
}