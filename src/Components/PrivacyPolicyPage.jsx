import React from 'react'
import Footer from './Footer'

const PrivacyPolicyPage = () => {
    return (
        <div className="bg-gradient-to-b from-[#A3CCDA] via-indigo-200 to-[#E7F2EF] min-h-screen flex flex-col mt-18">
            <main className="flex-grow max-w-5xl mx-auto px-6 text-justify">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-950 via-indigo-700  to-gray-800 bg-clip-text text-transparent mb-5 p-2 text-center">
                    Privacy Policy
                </h1>
                <p className="text-gray-900 mt-10">
                    At <b>A2Z Mechanical Service</b>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Information We Collect
                </h2>
                <p className="text-gray-900 mb-4">
                    We may collect personal information such as your name, email, phone number, and service requests when you contact us or book an appointment.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    How We Use Your Information
                </h2>
                <p className="text-gray-900 mb-4">
                    Your information is used to provide and improve our services, respond to inquiries, process bookings, and send important updates.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Data Security
                </h2>
                <p className="text-gray-900 mb-4">
                    We implement industry-standard security measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Third-Party Sharing
                </h2>
                <p className="text-gray-900 mb-4">
                    We do not sell or rent your personal information. We may share data with trusted service providers to assist in delivering services, always under strict confidentiality.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Updates to Privacy Policy
                </h2>
                <p className="text-gray-900 mb-4">
                    We may update this Privacy Policy from time to time. Please review it periodically for any changes.
                </p>
                <p className="text-gray-900 mt-6">
                    If you have any questions about our Privacy Policy, feel free to contact us.
                </p>
            </main>
            <Footer />
        </div>
    )
}

export default PrivacyPolicyPage