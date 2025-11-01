
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import ACPage from "../assets/ACPage.jpg";
import Footer from "./Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const AboutUs = () => {
    const cities = ["Jaipur", "Chomu", "Ajeetgarh", "Amarsar", "Sikar", "Shahpura", "Ajmer"];

    return (
        <section id="about" className="mt-18 bg-gradient-to-b from-[#A3CCDA] via-indigo-200 to-[#E7F2EF]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700 to-gray-800 bg-clip-text text-transparent mb-5 p-2">
                        A2Z Mechanical Service
                    </h2>
                    <p className="text-lg md:text-xl text-gray-900 text-center">
                        Providing reliable and expert mechanical services to keep your home and appliances running smoothly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <LazyLoadImage
                            src={ACPage}
                            alt="Mechanical Services"
                            effect="blur"
                            wrapperProps={{ style: { transitionDelay: "1s" } }}
                            className="w-full rounded-lg shadow-sm shadow-gray-400"
                        />
                    </div>

                    <div className="space-y-4 text-justify">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                            Who We Are
                        </h3>
                        <p className="text-gray-900 text-base md:text-lg">
                            A2Z Mechanical Service is your trusted partner for all mechanical repairs and maintenance. With years of experience in AC repair, water purifier service, washing machine maintenance, and other household appliances, we ensure top-quality service delivered right at your doorstep.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                            Our Mission
                        </h3>
                        <p className="text-gray-900 text-base md:text-lg">
                            To provide fast, reliable, and professional mechanical services that enhance comfort, convenience, and satisfaction for every customer.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                            Our Vision
                        </h3>
                        <p className="text-gray-900 text-base md:text-lg">
                            To be the most trusted and accessible mechanical service provider in the city, known for quality work, integrity, and customer care.
                        </p>

                        <div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                                Our Service Areas
                            </h3>
                            <p className="text-gray-900 text-base md:text-lg mb-6">
                                We proudly offer doorstep repair services in the following cities:
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {cities.map((city, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center gap-2 bg-[#FAF7F3] shadow-sm rounded-xl py-4 px-2 hover:shadow-md shadow-gray-600 hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                                    >
                                        <FaMapMarkerAlt className="text-indigo-500 text-xl" />
                                        <span className="text-gray-800 font-medium text-lg ">
                                            {city}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <a
                                href="tel:+919251288005"
                                className="flex items-center gap-2 justify-center md:justify-start bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-fit"
                            >
                                <FaPhoneFlip className="text-white text-lg" />
                                <span>Get in Touch</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default AboutUs;
