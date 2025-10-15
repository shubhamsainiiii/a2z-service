import React from "react";
import { FaCheckCircle, FaPhoneAlt, FaTools } from "react-icons/fa";
import { MdOutlineHomeRepairService } from "react-icons/md";
import Footer from "../Footer";

const FridgeRepair = () => {
    return (
        <div className="bg-gradient-to-b from-[#A3CCDA] via-indigo-200 to-[#E7F2EF]">
            <section className="h-116 relative bg-center bg-cover text-white bg-[url('/src/assets/AcBg.jpg')] mt-18">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-30 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Refrigerator Repair & Maintenance
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Fast & Affordable Fridge Repair Service at Your Doorstep
                    </p>
                    <a
                        href="tel:+919251288005"
                        className="inline-flex items-center bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-300"
                    >
                        <FaPhoneAlt className="mr-2" /> Call Now @9251288005
                    </a>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700  to-gray-800 bg-clip-text text-transparent text-center mb-10 p-1">
                    Complete Refrigerator Repair & Maintenance Solutions
                </h2>

                <div className="md:flex items-center justify-center gap-16">
                    <div className="md:w-1/2 space-y-4 text-center md:text-left">
                        <p className="text-gray-900 leading-relaxed">
                            <strong>Accurate Service Mechanical</strong> is Jaipur’s most
                            trusted name for refrigerator repair and service. Whether it’s a
                            single-door, double-door, or side-by-side fridge — we handle all
                            models with expert care and precision.
                        </p>
                        <p className="text-gray-900 leading-relaxed">
                            Our professional technicians ensure quick diagnosis, affordable
                            pricing, and 100% genuine parts replacement. We also offer same-day
                            service and preventive maintenance for long-lasting performance.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <ul className="space-y-3 text-gray-900">
                            <li className="flex items-center">
                                <FaCheckCircle className="text-indigo-500 mr-2" />
                                Single & Double Door Fridge Repair
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-indigo-500 mr-2" />
                                Gas Refill & Compressor Fixing
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-indigo-500 mr-2" />
                                Cooling Issues & Power Failure
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-indigo-500 mr-2" />
                                No Hidden Charges – Transparent Pricing
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <h2 className="text-4xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700  to-gray-800 bg-clip-text text-transparent text-center mb-10 p-1">
                    Our Refrigerator Services
                </h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                    {[
                        {
                            icon: <MdOutlineHomeRepairService size={40} />,
                            title: "Fridge Servicing",
                            desc: "Cleaning, inspection & performance optimization.",
                        },
                        {
                            icon: <FaTools size={40} />,
                            title: "Compressor & Cooling Repair",
                            desc: "Fixing cooling issues, thermostat & motor problems.",
                        },
                        {
                            icon: <FaCheckCircle size={40} />,
                            title: "Gas Filling",
                            desc: "Refilling refrigerant gas for efficient cooling.",
                        },
                        {
                            icon: <FaCheckCircle size={40} />,
                            title: "AMC Plans",
                            desc: "Annual Maintenance Contracts for hassle-free service.",
                        },
                    ].map((service, i) => (
                        <div
                            key={i}
                            className="bg-[#FAF7F3] p-6 rounded-2xl shadow-sm text-center hover:shadow-md shadow-gray-600 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="text-indigo-500 flex justify-center mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-indigo-400 text-white text-center py-16">
                <h2 className="text-3xl font-bold mb-4">
                    Book Your Fridge Repair Appointment Now!
                </h2>
                <p className="text-lg mb-6">
                    Get fast, reliable, and affordable refrigerator repair in Jaipur.
                </p>
                <a
                    href="tel:+919251288005"
                    className="inline-flex items-center bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
                >
                    <FaPhoneAlt className="mr-2" /> Call Now @9251288005
                </a>
            </section>
            <Footer />
        </div>
    );
};

export default FridgeRepair;
