import React from "react";

const Services = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">
                    Our Services
                </h1>
                <p className="text-gray-700 text-lg mb-10">
                    At <strong>Hefshine Software Pvt. Ltd.</strong>, we offer a range of
                    training and software development services to help students and
                    professionals build strong technical skills and real-world experience.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                            Software Development
                        </h2>
                        <p className="text-gray-600">
                            We develop efficient, scalable, and user-friendly software
                            solutions using the latest technologies like Spring Boot, React,
                            and Angular.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                            Corporate & Student Training
                        </h2>
                        <p className="text-gray-600">
                            Our expert-led training sessions cover core and advanced
                            programming languages including Java, Spring Boot, Python, and
                            Frontend frameworks.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                            Internship & Project Guidance
                        </h2>
                        <p className="text-gray-600">
                            We provide practical exposure through internships and guide
                            students in building industry-level projects using modern tools
                            and technologies.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                        Why Choose Hefshine?
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-left md:text-center">
                        <li>Experienced Trainers and Developers</li>
                        <li>Hands-on Practical Learning</li>
                        <li>Placement Assistance and Mock Interviews</li>
                        <li>Focus on Real-Time Projects</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Services;