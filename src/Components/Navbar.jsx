import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../assets/optimized/logo.webp";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={isOpen ? "close" : "open"}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-gradient-to-bl from-gray-950 via-gray-800 to-gray-900 shadow-md"
                    >
                        <div className="px-6 py-4 space-y-1">
                            {paths.map((path, idx) => (
                                <motion.div
                                    key={path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.07, duration: 0.3 }}
                                >
                                    <Link
                                        to={path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block py-2 px-3 rounded-lg transition-all duration-300 font-medium ${location.pathname === path
                                            ? "text-indigo-300 bg-white/10"
                                            : "text-white hover:text-indigo-300 hover:bg-white/5"
                                            }`}
                                    >
                                        {names[idx]}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;