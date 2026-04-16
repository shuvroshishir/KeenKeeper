import React from 'react';
import { FaHistory } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router';

const NoHistory = () => {
    return (
        <div className='h-[40vh] flex flex-col gap-6 items-center justify-center'>
            <h2 className='text-3xl sm:text-4xl font-bold flex items-center gap-2 text-(--para-color)'><FaHistory /> No History in Timeline</h2>
            <Link
                to="/"
                className=" w-fit bg-(--primary-color) text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition duration-200 flex items-center gap-1"
            >
                <IoIosArrowBack />
                Go Back to Home
            </Link>
        </div>
    );
};

export default NoHistory;