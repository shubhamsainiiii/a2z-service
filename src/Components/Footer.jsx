import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-gray-200 mt-10 relative">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-6 mt-5">
                    <div className="flex flex-col items-start ml-4">
                        <h2 className="text-xl font-bold mb-5 text-indigo-400">Info About Us</h2>
                        <p className="flex items-center gap-3 mt-2 text-sm">
                            <FaClock className="text-indigo-300" />
                            Opening Hours : <span className="font-semibold">24x7</span>
                        </p>
                        <a href="tel:9251288005" className="flex items-center gap-3 mt-3 text-sm hover:text-indigo-300 transition-colors duration-300">
                            <FaPhoneAlt className="text-indigo-300" />
                            +91-9251288005
                        </a>
                        <a href="mailto:manishsaini965@gmail.com" className="flex items-center gap-3 mt-3 text-sm hover:text-indigo-300 transition-colors duration-300">
                            <FaEnvelope className="text-indigo-300" />
                            manishsaini965@gmail.com
                        </a>
                        <p className="flex items-center gap-3 mt-3 text-sm">
                            <FaMapMarkerAlt className="text-indigo-300" />
                            VKI Road No. 02, Sikar Road, Jaipur, Rajasthan, 302013
                        </p>

                    </div>

                    <div className="flex flex-col items-start ml-4 mr-4">
                        <h2 className="text-xl font-bold mb-5 text-indigo-400">Our Services</h2>
                        <div className="relative w-full">
                            <select
                                className="p-3 w-full rounded-lg bg-gray-800 text-gray-300 border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 appearance-none pr-10"
                                onChange={(e) => {
                                    const selectedPath = e.target.value;
                                    if (selectedPath) {
                                        window.location.href = selectedPath;
                                    }
                                }}
                            >
                                <option value="" className="text-gray-400 bg-gray-800">
                                    Select a Service
                                </option>
                                {[
                                    { name: "Split & Window AC Repairing", path: "/service/ac" },
                                    { name: "Fridge Repairing", path: "/service/fridge" },
                                    { name: "Geyser Repairing Service", path: "/service/geyser" },
                                    { name: "Washing Machine Repairing", path: "/service/washing-machine" },
                                    { name: "Microwave Repairing", path: "/service/microwave" },
                                    { name: "R.O Repairing", path: "/service/ro" },
                                    { name: "Kitchen Chimney Repairing", path: "/service/chimney" },
                                    { name: "CCTV Installation", path: "/service/cctv" },
                                    { name: "GPS Tracker Repairing", path: "/service/gps" },
                                ].map((service, index) => (
                                    <option key={index} value={service.path} className="text-gray-200 bg-gray-800 hover:bg-gray-700">
                                        {service.name}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start ml-4">
                        <h2 className="text-xl font-bold mb-5 text-indigo-400">Quick Links</h2>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", path: "/home" },
                                { name: "About Us", path: "/about" },
                                { name: "Our Services", path: "/services" },
                                { name: "Contact Us", path: "/contact" },
                                { name: "Privacy Policy", path: "/privacy-policy" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-indigo-300 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-700">
                    <div className="fixed bottom-6 left-6 z-50">
                        <a href="https://wa.me/9251288005" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="block p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-pulse-slow">
                            <FaWhatsapp className="text-white text-3xl" />
                        </a>
                    </div>
                    <div className="fixed bottom-6 right-6 z-50">
                        <a href="tel:9251288005" aria-label="Call Us Now" className="block p-3 bg-indigo-500 rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-300 animate-pulse-slow">
                            <FaPhone className="text-white text-3xl" />
                        </a>
                    </div>

                    <div className="w-full flex flex-col items-center px-6">
                        <p className="text-sm text-gray-400 mt-4 font-normal">
                            &copy; {new Date().getFullYear()} A2Z Service Mechanical - All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
