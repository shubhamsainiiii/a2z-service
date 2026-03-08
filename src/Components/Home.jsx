/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
    FaTools, FaBolt, FaShieldAlt, FaPhoneAlt,
    FaCheckCircle, FaClock, FaMapMarkerAlt, FaWhatsapp,
    FaSnowflake, FaFire, FaTv, FaWater, FaWrench
} from "react-icons/fa";
import service1 from "../assets/optimized/carousel1.webp";
import service2 from "../assets/optimized/carousel2.webp";
import service3 from "../assets/optimized/carousel3.webp";
import { Link } from "react-router-dom";
import Footer from './Footer';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

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
    { title: "AC & Fridge Repair", image: service1, description: "Professional repair services for split/window ACs, refrigerators, and more." },
    { title: "Geyser & Washing Machine", image: service2, description: "Quick maintenance for geysers, washing machines, and water purifiers." },
    { title: "CCTV & Chimney Services", image: service3, description: "Installation and repair of CCTV cameras and kitchen chimneys at your doorstep." }
];

const steps = [
    { step: "01", title: "Book Online", desc: "Fill a quick form or call us to schedule your repair appointment at a time that suits you." },
    { step: "02", title: "Technician Visits", desc: "Our certified technician arrives at your doorstep on time with all necessary tools." },
    { step: "03", title: "Repair & Done", desc: "Problem diagnosed and fixed with warranty. Pay only after you are 100% satisfied." },
];

const allServices = [
    { icon: <FaSnowflake />, name: "AC Repair", path: "/services/ac" },
    { icon: <FaFire />, name: "Geyser Repair", path: "/services/geyser" },
    { icon: <FaWrench />, name: "Washing Machine", path: "/services/washing" },
    { icon: <FaTv />, name: "LED TV Repair", path: "/services/tv" },
    { icon: <FaWater />, name: "RO Purifier", path: "/services/ro" },
    { icon: <FaTools />, name: "All Services", path: "/services" },
];

const Home = () => {
    return (
        <div className="bg-gradient-to-b from-[#A3CCDA] via-indigo-200 to-[#E7F2EF]">

            {/* Hero Slider */}
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
                                <img src={slide.image} alt={slide.title} className="w-full h-full object-fill" />
                                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
                                    <h3 className="text-lg md:text-2xl font-medium uppercase tracking-wide mb-2">Reliable & Fast Service</h3>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                                    <p className="text-md md:text-xl mb-6 max-w-2xl">{slide.text}</p>
                                    <Link to="/contact" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>



            {/* About Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700 to-gray-800 bg-clip-text text-transparent mb-6">
                                About A2Z Mechanical Service
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                A2Z Mechanical Service is a trusted name in home appliance repair, serving thousands of happy customers across the city for over 10 years. We specialize in fast, reliable, and affordable repair solutions for all major home appliances.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Our team of certified technicians is trained to handle everything from air conditioners and refrigerators to geysers, washing machines, CCTV systems, and more. We believe in transparent pricing — no hidden charges, no surprises.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {["Certified Technicians", "Same Day Service", "Genuine Spare Parts", "Warranty on Repairs"].map((point, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-800">
                                        <FaCheckCircle className="text-indigo-500 flex-shrink-0" />
                                        <span className="text-sm font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/about" className="inline-block mt-8 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300">
                                Know More About Us
                            </Link>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm shadow-gray-400">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Service Links</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {allServices.map((s, i) => (
                                    <Link key={i} to={s.path}
                                        className="flex flex-col items-center gap-2 p-4 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="text-indigo-500 text-2xl">{s.icon}</div>
                                        <span className="text-xs font-semibold text-gray-700 text-center leading-tight">{s.name}</span>
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-indigo-500 rounded-xl text-white text-center">
                                <p className="text-sm font-medium mb-1 flex items-center justify-center gap-2">
                                    <FaPhoneAlt className="text-white" /> Call for Instant Booking
                                </p>
                                <a href="tel:+919251288005" className="text-xl font-bold hover:text-indigo-200 transition-colors">
                                    +91 92512 88005
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 ">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700 to-gray-800 bg-clip-text text-transparent mb-4">Our Services</h2>
                    <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                        We provide professional repair and maintenance services for all major home appliances at your doorstep.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15, duration: 0.5 }} viewport={{ once: true }}
                                className="bg-[#FAF7F3] rounded-lg shadow-sm p-6 hover:shadow-md shadow-gray-600 transition-all duration-300 hover:-translate-y-2">
                                <LazyLoadImage src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" effect="blur" />
                                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <Link to="/services" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors text-sm">
                                    Learn More →
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link to="/services" className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold transition-all duration-500">
                            Explore All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700 to-gray-800 bg-clip-text text-transparent mb-4">Why Choose A2Z?</h2>
                    <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                        We stand out from the competition with our commitment to quality, speed, and customer satisfaction.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <FaTools />, title: "Expert Technicians", desc: "All our technicians are certified, trained, and experienced in handling complex appliance repairs with precision." },
                            { icon: <FaBolt />, title: "Quick Service", desc: "We offer same-day doorstep service so your daily life is never disrupted for long." },
                            { icon: <FaShieldAlt />, title: "100% Guarantee", desc: "Every repair comes with a service warranty. If the issue returns, we fix it free of charge." },
                            { icon: <FaClock />, title: "24/7 Availability", desc: "Appliances don't follow a schedule — neither do we. We are available round the clock for emergencies." },
                            { icon: <FaCheckCircle />, title: "Genuine Parts", desc: "We use only original and manufacturer-approved spare parts to ensure long-lasting repairs." },
                            { icon: <FaMapMarkerAlt />, title: "Doorstep Service", desc: "No need to carry heavy appliances anywhere. Our technicians come directly to your home." },
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true }}
                                className="bg-[#FAF7F3] p-6 rounded-lg shadow-sm hover:shadow-md shadow-gray-600 transition-all duration-300 hover:-translate-y-2 text-left">
                                <div className="text-indigo-500 text-3xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 ">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700 to-gray-800 bg-clip-text text-transparent mb-4">How It Works</h2>
                    <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto">
                        Getting your appliance repaired is as easy as 1-2-3. Here's how our simple process works.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.6 }} viewport={{ once: true }}
                                className="relative bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-sm shadow-gray-500">
                                <div className="text-6xl font-black text-indigo-100 absolute top-3 right-5 select-none leading-none">{step.step}</div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">{i + 1}</div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA Banner */}
            <section className="py-16 ">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700 to-gray-800 bg-clip-text text-transparent mb-4">
                        Need a Repair? We're Just a Call Away!
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Get same-day doorstep service at the most affordable price. Our expert technicians are ready to help you right now.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="tel:+919251288005"
                            className="flex items-center gap-2 bg-white text-indigo-600 font-bold px-8 py-3 rounded-md hover:bg-indigo-50 transition-all duration-300">
                            <FaPhoneAlt /> Call Now
                        </a>
                        <a href="https://wa.me/919251288005" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-md transition-all duration-300">
                            <FaWhatsapp /> WhatsApp Us
                        </a>
                        <Link to="/contact"
                            className="flex items-center gap-2 bg-white text-indigo-600 font-bold px-8 py-3 rounded-md hover:bg-indigo-50 transition-all duration-300">
                            Book Online
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;