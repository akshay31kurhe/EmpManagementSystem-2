import React from "react";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
            <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-md">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
                    Contact Hefshine Software Pvt. Ltd.
                </h1>

                <p className="text-center text-gray-700 mb-8">
                    We’d love to hear from you! Whether you have a question about training,
                    internships, development services, or anything else — our team is ready to help.
                </p>

                <div className="space-y-4 text-gray-800">
                    <div>
                        <h2 className="text-lg font-semibold text-blue-500">📍 Address:</h2>
                        <p>
                            Hefshine Software Pvt. Ltd.,<br />
                            Office No. 302, 3rd Floor, Pesh Infotech, Above Vijaya Bank,<br />
                            Near Bhumkar Chowk, Wakad, Pune, Maharashtra - 411057
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-blue-500">📞 Phone:</h2>
                        <p>+91 86688 52888 | +91 70575 33000</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-blue-500">📧 Email:</h2>
                        <p>info@hefshine.com</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-blue-500">🕒 Office Hours:</h2>
                        <p>Monday – Saturday: 9:30 AM – 6:00 PM<br />Sunday: Closed</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-blue-500">🌐 Follow Us:</h2>
                        <div className="flex space-x-4 mt-2">
                            <a
                                href="https://www.facebook.com/hefshine"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.instagram.com/hefshine"
                                target="_blank"
                                rel="noreferrer"
                                className="text-pink-500 hover:underline"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://www.linkedin.com/company/hefshine-software-pvt-ltd"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-700 hover:underline"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-center mb-4 text-blue-600">
                        Send Us a Message
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;