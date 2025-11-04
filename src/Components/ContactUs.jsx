import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Contactimage from "../assets/contactimage.png";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Footer from "./Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Swal from "sweetalert2";

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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        service: "",
        message: "",
    });

    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);

        const templateParams = {
            name: formData.name,
            email: formData.email,
            number: formData.number,
            service: formData.service,
            message: formData.message,
        };

        emailjs
            .send(
                "service_x5zbebs",
                "template_xsrmu3a",
                templateParams,
                "hyOpMhJcpkTq1jZbt"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    Swal.fire({
                        title: "✅ Message Sent!",
                        text: "Your message has been sent successfully. We'll get back to you soon!",
                        icon: "success",
                        confirmButtonColor: "#4f46e5",
                    });
                    setFormData({
                        name: "",
                        email: "",
                        number: "",
                        service: "",
                        message: "",
                    });
                    setSending(false);
                },
                (error) => {
                    console.log(error);
                    Swal.fire({
                        title: "Failed to Send!",
                        text: "Something went wrong. Please try again later.",
                        icon: "error",
                        confirmButtonColor: "#ef4444",
                    });
                    setSending(false);
                }
            );
    };

    return (
        <section
            id="contact"
            className="bg-gradient-to-b from-[#A3CCDA] via-indigo-200 to-[#E7F2EF]"
        >
            <div className="max-w-6xl mx-auto px-6 mt-18">
                <h2 className="text-5xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700 to-gray-800 bg-clip-text text-transparent mb-6 text-center p-2">
                    Contact Us
                </h2>
                <p className="text-justify text-gray-900 text-lg mb-10 max-w-2xl mx-auto">
                    We’re always here to help! Whether you have a question about our
                    services, need support, or want to book a repair. Get in touch with
                    our friendly team. We’ll respond as quickly as possible.
                </p>

                <div className="grid sm:grid-cols-3 gap-6 text-center mb-12">
                    <div className="bg-[#FAF7F3] shadow-sm rounded-lg p-6 hover:shadow-md shadow-gray-600 transition-all duration-300 hover:-translate-y-2">
                        <FaPhoneAlt className="text-indigo-500 text-3xl mx-auto mb-3" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h4>
                        <a href="tel:+919251288005" className="text-gray-600">
                            +91 9251288005
                        </a>
                    </div>

                    <div className="bg-[#FAF7F3] shadow-sm rounded-lg p-6 hover:shadow-md shadow-gray-600 transition-all duration-300 hover:-translate-y-2">
                        <FaEnvelope className="text-indigo-500 text-3xl mx-auto mb-3" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h4>
                        <a href="mailto:mechanicalserviceaz@gmail.com" className="text-gray-600">
                            mechanicalserviceaz@gmail.com
                        </a>
                    </div>

                    <div className="bg-[#FAF7F3] shadow-sm shadow-gray-600 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                        <FaClock className="text-indigo-500 text-3xl mx-auto mb-3" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            Working Hours
                        </h4>
                        <p className="text-gray-600">Mon - Sun : 24x7</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row rounded-xl overflow-hidden">
                    <div className="md:w-1/2 flex items-center justify-center p-6">
                        <LazyLoadImage
                            src={Contactimage}
                            alt="Contact"
                            className="w-full h-full object-cover rounded-lg"
                            wrapperProps={{ style: { transitionDelay: "1s" } }}
                            effect="blur"
                        />
                    </div>

                    <div className="md:w-1/2 p-8 flex items-center justify-center">
                        <form onSubmit={sendEmail} className="w-full space-y-6">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full h-13 shadow-sm shadow-gray-600 px-4 py-4 rounded-md outline-none"
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full h-13 shadow-sm shadow-gray-600 px-4 py-4 rounded-md outline-none"
                            />
                            <input
                                name="number"
                                type="text"
                                placeholder="Phone Number"
                                required
                                value={formData.number}
                                onChange={handleChange}
                                className="w-full h-13 shadow-sm shadow-gray-600 px-4 py-4 rounded-md outline-none"
                            />
                            <select
                                name="service"
                                required
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full h-13 shadow-sm shadow-gray-600 px-4 py-4 rounded-md outline-none"
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
                                name="message"
                                placeholder="Message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full shadow-sm shadow-gray-600 px-4 py-8 rounded-md outline-none"
                            ></textarea>

                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    disabled={sending} // ✅ disable while sending
                                    className={`py-2 px-6 rounded-md font-semibold transition-all duration-500 cursor-pointer ${sending
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-indigo-500 hover:bg-indigo-600 text-white"
                                        }`}
                                >
                                    {sending ? "Sending..." : "Send Message"}
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
