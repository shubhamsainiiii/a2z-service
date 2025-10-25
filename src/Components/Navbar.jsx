import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const paths = ["/home", "/about", "/services", "/contact", "/privacy-policy"];
    const names = ["Home", "About", "Services", "Contact", "Privacy Policy"];

    return (
        <nav className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 fixed w-full top-0 z-50 shadow-sm shadow-gray-700">
            <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-3">
                <div className="flex items-center space-x-2">
                    <Link to="/home">
                        <img src={logo} alt="ASM Logo" className="w-12 h-12 bg-indigo-200 rounded-full" />
                    </Link>
                </div>

                <div className="hidden md:flex space-x-6 font-medium">
                    {paths.map((path, idx) => (
                        <Link
                            key={path}
                            to={path}
                            className={`transition-all duration-300 ${location.pathname === path
                                ? "text-indigo-300 font-medium"
                                : "text-gray-200 hover:text-indigo-300"
                                }`}
                        >
                            {names[idx]}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gradient-to-bl from-gray-950 via-gray-800 to-gray-900 px-6 py-4 space-y-3 shadow-md">
                    {paths.map((path, idx) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setIsOpen(false)}
                            className={`block transition-all duration-300 font-medium ${location.pathname === path
                                ? "text-indigo-300"
                                : "text-white hover:text-orange-400"
                                }`}
                        >
                            {names[idx]}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};
export default Navbar;
