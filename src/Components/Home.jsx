import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaTools, FaBolt, FaShieldAlt, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";
import service1 from "../assets/carousel1.jpg";
import service2 from "../assets/carousel2.jpg";
import service3 from "../assets/carousel3.jpg";
import { Link } from "react-router-dom";
import Footer from './Footer';
import { LazyLoadImage } from "react-lazy-load-image-component";
const slides = [
    {
        image: service1,
        title: "Hassle-Free Repairs, Anytime, Anywhere",
        text: "Book skilled technicians in just a few clicks and get your appliances running smoothly again."
    },
    {
        image: service2,
        title: "Your Trusted Repair Partner",
        text: "We fix it right the first time! Certified technicians, transparent pricing, and guaranteed satisfaction."
    },
    {
        image: service3,
        title: "One Stop Solution for All Repairs",
        text: "Get professional services for AC, fridge, geyser, CCTV, and more — all under one roof."
    }
];

const services = [
    {
        title: "AC & Fridge Repair",
        image: service1,
        description: "Professional repair services for split/window ACs, refrigerators, and more."
    },
    {
        title: "Geyser & Washing Machine",
        image: service2,
        description: "Quick maintenance for geysers, washing machines, and water purifiers."
    },
    {
        title: "CCTV & Chimney Services",
        image: service3,
        description: "Installation and repair of CCTV cameras and kitchen chimneys at your doorstep."
    }
];

const Home = () => {
    return (
        <div className="bg-gradient-to-b from-[#A3CCDA] via-indigo-200 to-[#E7F2EF]">
            <section id="slider" className="relative w-full overflow-hidden h-[500px] mt-18">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop
                    className="w-full h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[500px]">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-fill"
                                />
                                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
                                    <h3 className="text-lg md:text-2xl font-medium uppercase tracking-wide mb-2">
                                        Reliable & Fast Service
                                    </h3>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                                    <p className="text-md md:text-xl mb-6 max-w-2xl">{slide.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <section className="py-15">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700  to-gray-800 bg-clip-text text-transparent mb-8">Our Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-[#FAF7F3] rounded-lg shadow-sm p-6 hover:shadow-md shadow-gray-600 transition-all duration-300 hover:-translate-y-2">
                                <LazyLoadImage
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                    wrapperProps={{ style: { transitionDelay: "1s" } }}
                                    effect="blur" />
                                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link
                            to="/services"
                            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold transition-all duration-500"
                        >
                            Explore More
                        </Link>
                    </div>
                </div>
            </section>
            <section className="mt-1">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700  to-gray-800 bg-clip-text text-transparent mb-10">Why Choose A2Z Mechanical Service</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-[#FAF7F3] p-6 rounded-lg shadow-sm hover:shadow-md shadow-gray-600 transition-all duration-300 hover:-translate-y-2">
                            <FaTools className="text-indigo-500 text-3xl mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                            <p className="text-gray-600">Certified and skilled technicians for reliable repairs.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md shadow-gray-600 transition-all duration-300 hover:-translate-y-2">
                            <FaBolt className="text-indigo-500 text-3xl mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
                            <p className="text-gray-600">Fast response and doorstep services to save your time.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md shadow-gray-600 transition-all duration-300 hover:-translate-y-2">
                            <FaShieldAlt className="text-indigo-500 text-3xl mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-2">100% Guarantee</h3>
                            <p className="text-gray-600">Reliable work with complete customer satisfaction guaranteed.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;