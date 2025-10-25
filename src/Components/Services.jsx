import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import RO from '../assets/RO.png';
import AC from '../assets/AC.png'
import cctv from '../assets/CCTV.png'
import chimney from '../assets/chimney.png'
import geyser from '../assets/geyser.png'
import fridge from '../assets/fridge.png'
import washingmachine from '../assets/washingmachine.png';
import microwave from '../assets/microwave.png';
import GPS from '../assets/GPS.png';
import { Link } from "react-router-dom";
import Footer from "./Footer";


const services = [
    { path: "/service/ac", name: "Split & Window AC Repairing", img: AC },
    { path: "/service/fridge", name: "Fridge Repairing", img: fridge },
    { path: "/service/geyser", name: "Geyser Repairing Service", img: geyser },
    { path: "/service/washing-machine", name: "Washing Machine Repairing", img: washingmachine },
    { path: "/service/microwave", name: "Microwave Repairing", img: microwave },
    { path: "/service/ro", name: "R.O Repairing", img: RO },
    { path: "/service/chimney", name: "Kitchen Chimney Repairing", img: chimney },
    { path: "/service/cctv", name: "CCTV Installation", img: cctv },
    { path: "/service/gps", name: "GPS Tracker Repairing", img: GPS },
];

const Services = () => {
    return (
        <section id="services" className="mt-18 bg-gradient-to-b from-[#A3CCDA] via-indigo-200 to-[#E7F2EF]">
            <div className="max-w-6xl mx-auto text-center px-6 mt-18">
                <h2 className="text-5xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700  to-gray-800 bg-clip-text text-transparent mb-4">Our Services</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <div key={i} className="bg-[#FAF7F3] shadow-sm rounded-xl hover:shadow-md shadow-gray-700 transition flex flex-col items-center">
                            <div className="w-full h-full mb-4 rounded-t-lg overflow-hidden">
                                <LazyLoadImage
                                    src={s.img}
                                    alt={s.name}
                                    effect="blur"
                                    wrapperProps={{ style: { transitionDelay: "1s" } }}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-4">{s.name}</h3>
                            <Link to={s.path} className="mb-6">
                                <button className="bg-indigo-500 text-white px-5 py-2 rounded hover:bg-indigo-600 transition-all duration-300 cursor-pointer">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </section>
    );
};
export default Services;
