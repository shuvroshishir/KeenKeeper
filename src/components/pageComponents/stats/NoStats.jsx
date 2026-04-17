import React from 'react';
import { MdOutlineQueryStats } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router';

const NoStats = () => {
    return (
        <div className='h-[40vh] flex flex-col gap-10 items-center justify-center'>
            <h2 className='text-3xl sm:text-4xl font-bold flex flex-wrap items-center justify-center gap-2 text-(--para-color) text-center'>
                <MdOutlineQueryStats /> No Stats in Timeline
            </h2>
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

export default NoStats;