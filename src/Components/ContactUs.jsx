import React from "react";
import Contactimage from "../assets/contactimage.png";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Footer from "./Footer";

const services = [
    "Split & Window AC Repairing",
    "Fridge Repairing",
    "Geyser Repairing Service",
    "Washing Machine Repairing",
    "Microwave Repairing",
    "R.O Repairing",
    "Kitchen Chimney Repairing",
    "CCTV Installation",
];

const Contact = () => {
    return (
        <section id="contact" className="bg-gradient-to-b from-[#A3CCDA] via-indigo-200 to-[#E7F2EF]">
            <div className="max-w-6xl mx-auto px-6 mt-18">
                <h2 className="text-5xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700  to-gray-800 bg-clip-text text-transparent mb-6 text-center p-2">
                    Contact Us
                </h2>
                <p className="text-center text-gray-900 text-lg mb-10 max-w-2xl mx-auto">
                    We’re always here to help! Whether you have a question about our services, need support, or want to book a repair. Get in touch with our friendly team.
                    We’ll respond as quickly as possible.
                </p>

                <div className="grid sm:grid-cols-3 gap-6 text-center mb-12">
                    <div className="bg-[#FAF7F3] shadow-sm rounded-lg p-6 hover:shadow-md shadow-gray-600 transition-all duration-300 hover:-translate-y-2">
                        <FaPhoneAlt className="text-indigo-500 text-3xl mx-auto mb-3" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h4>
                        <a href="tel:+919251288005" className="text-gray-600">+91 9251288005</a>
                    </div>

                    <div className="bg-[#FAF7F3] shadow-sm rounded-lg p-6 hover:shadow-md shadow-gray-600 transition-all duration-300 hover:-translate-y-2">
                        <FaEnvelope className="text-indigo-500 text-3xl mx-auto mb-3" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h4>
                        <a href="mailto:manishsaini965@gmail.com" className="text-gray-600">manishsaini965@gmail.com</a>
                    </div>

                    <div className="bg-[#FAF7F3] shadow-sm shadow-gray-600 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                        <FaClock className="text-indigo-500 text-3xl mx-auto mb-3" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Working Hours</h4>
                        <p className="text-gray-600">Mon - Sun : 24x7</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row rounded-xl overflow-hidden">
                    <div className="md:w-1/2 flex items-center justify-center p-6">
                        <img
                            src={Contactimage}
                            alt="Contact"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    <div className="md:w-1/2 p-8 flex items-center justify-center">
                        <form className="w-full space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full h-13 shadow-sm shadow-gray-600 px-4 py-4 rounded-md outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full h-13 shadow-sm shadow-gray-600 px-4 py-4 rounded-md outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full h-13 shadow-sm shadow-gray-600 px-4 py-4 rounded-md outline-none"
                            />
                            <select
                                className="w-full h-13 shadow-sm shadow-gray-600 px-4 py-4 rounded-md outline-none"
                                defaultValue=""
                                aria-label="Choose a service"
                            >
                                <option value="" disabled>
                                    Choose Service
                                </option>
                                {services.map((service, idx) => (
                                    <option key={idx} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>
                            <textarea
                                placeholder="Message"
                                className="w-full shadow-sm shadow-gray-600 px-4 py-8 rounded-md outline-none"
                            ></textarea>
                            <div className="flex justify-center mt-4">
                                <button className="bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600 font-semibold cursor-pointer transition-all duration-500">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Contact;
