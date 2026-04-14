import React from 'react';
import { Link } from 'react-router';
import { IoIosArrowBack } from "react-icons/io";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-[#F8FAFC]">

            <div className="container mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-20 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 text-center md:text-left text-(--primary-color)">

                    <h1 className="text-6xl md:text-7xl font-bold mb-4">
                        404
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                        Page not found
                    </h2>

                    <p className="text-gray-500 mb-6 max-w-md">
                        Sorry, the page you’re looking for doesn’t exist or has been moved.
                        Let’s get you back on track.
                    </p>

                    <Link
                        to="/"
                        className=" w-fit bg-(--primary-color) text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition duration-200 flex items-center gap-1"
                    >
                        <IoIosArrowBack />
                        Back to Home
                    </Link>

                </div>

                <div className="flex-1">
                    <img
                        src="/404.svg"
                        alt="Error Illustration"
                        className="w-full max-w-sm mx-auto"
                    />
                </div>

            </div>

        </div>
    );
};

export default ErrorPage;