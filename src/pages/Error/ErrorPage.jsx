import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-[#F9FAFC]">

            <div className="container mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">

                    <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
                        404
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
                        Page not found
                    </h2>

                    <p className="text-gray-500 mb-6 max-w-md">
                        Sorry, the page you’re looking for doesn’t exist or has been moved.
                        Let’s get you back on track.
                    </p>

                    <Link
                        to="/"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                    >
                        Back to Home
                    </Link>

                </div>

                {/* Right Image */}
                <div className="flex-1">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6195/6195678.png"
                        alt="Error Illustration"
                        className="w-full max-w-sm mx-auto"
                    />
                </div>

            </div>

        </div>
    );
};

export default ErrorPage;