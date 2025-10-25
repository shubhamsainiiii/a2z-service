import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaTools, FaBolt, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import { Link } from "react-router-dom";

const slides = [
    {
        image: carousel1,
        title: "Hassle-Free Repairs, Anytime, Anywhere",
        text: "Book skilled technicians in just a few clicks and get your appliances running smoothly again."
    },
    {
        image: carousel2,
        title: "Your Trusted Repair Partner",
        text: "We fix it right the first time! Certified technicians, transparent pricing, and guaranteed satisfaction."
    },
    {
        image: carousel3,
        title: "One Stop Solution for All Repairs",
        text: "Get professional services for AC, fridge, geyser, CCTV, and more — all under one roof."
    }
];

const Hero = () => (
    <section id="home" className="relative w-full overflow-hidden h-[100vh] sm:h-[100vh]">
        <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="w-full h-full"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-center"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-4 sm:p-6 md:p-10">
                            <h3 className="text-sm sm:text-base md:text-2xl font-medium uppercase tracking-wide mb-2">
                                Reliable & Fast Service
                            </h3>

                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight max-w-3xl">
                                {slide.title}
                            </h2>

                            <p className="text-sm sm:text-base md:text-xl mb-5 sm:mb-6 max-w-xl sm:max-w-2xl px-2 sm:px-0">
                                {slide.text}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
                                <Link
                                    to="/contact"
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-md font-semibold transition-all duration-500 text-sm sm:text-base"
                                >
                                    Book Appointment
                                </Link>
                                <Link
                                    to="/services"
                                    className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-5 py-2 sm:px-6 sm:py-3 rounded-md font-semibold transition-all duration-500 text-sm sm:text-base"
                                >
                                    View Services
                                </Link>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mt-2 sm:mt-4 justify-center text-white text-sm sm:text-base mb-4 sm:mb-6">
                                <div className="flex items-center gap-2 justify-center">
                                    <FaTools className="text-indigo-500 text-lg sm:text-xl" />
                                    <span>Expert Technicians</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center">
                                    <FaBolt className="text-indigo-500 text-lg sm:text-xl" />
                                    <span>Quick Service</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center">
                                    <FaShieldAlt className="text-indigo-500 text-lg sm:text-xl" />
                                    <span>100% Guarantee</span>
                                </div>
                            </div>
                            <Link
                                to="/home"
                                className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-2 sm:px-6 sm:py-2.5 rounded-md font-semibold hover:bg-gray-200 transition-all duration-500 text-sm sm:text-base"
                            >
                                Click Here to View More <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
);

export default Hero;